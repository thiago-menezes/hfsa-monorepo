import express, { Application } from 'express';
import cors from 'cors';
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import { load } from 'js-yaml';
import { DocsServerOptions } from './types';
import { Server } from 'http';

export class DocsServer {
  private app: Application;
  private server: Server | null = null;
  private options: DocsServerOptions;

  constructor(options: DocsServerOptions) {
    this.options = {
      host: 'localhost',
      title: 'HFSA API Documentation',
      theme: 'auto',
      ...options
    };
    
    this.app = express();
    this.setupMiddleware();
    this.setupRoutes();
  }

  private setupMiddleware(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private setupRoutes(): void {
    // Health check
    this.app.get('/health', (req, res) => {
      res.json({ status: 'ok', service: 'hfsa-docs-server' });
    });

    // API Reference with Scalar
    this.app.get('/reference', (req, res) => {
      const html = `
<!DOCTYPE html>
<html>
<head>
  <title>${this.options.title}</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body>
  <script id="api-reference" data-url="/openapi.yaml"></script>
  <script src="https://cdn.jsdelivr.net/npm/@scalar/api-reference@latest"></script>
</body>
</html>`;
      res.setHeader('Content-Type', 'text/html');
      res.send(html);
    });

    // Serve OpenAPI spec
    this.app.get('/openapi.yaml', (req, res) => {
      try {
        const specPath = resolve(this.options.specPath);
        
        if (!existsSync(specPath)) {
          return res.status(404).json({ error: 'OpenAPI spec not found' });
        }

        const content = readFileSync(specPath, 'utf8');
        
        // Try to parse as YAML to validate
        try {
          load(content);
        } catch (yamlError) {
          console.error('❌ Invalid YAML in OpenAPI spec:', yamlError);
          return res.status(500).json({ error: 'Invalid OpenAPI spec format' });
        }

        res.setHeader('Content-Type', 'application/x-yaml');
        return res.send(content);
      } catch (error) {
        console.error('❌ Error serving OpenAPI spec:', error);
        return res.status(500).json({ error: 'Failed to load OpenAPI spec' });
      }
    });

    // Redirect root to reference
    this.app.get('/', (req, res) => {
      res.redirect('/reference');
    });
  }

  async start(): Promise<void> {
    const specPath = resolve(this.options.specPath);
    
    if (!existsSync(specPath)) {
      throw new Error(`OpenAPI spec file not found: ${specPath}`);
    }

    return new Promise((resolve, reject) => {
      const host = this.options.host || 'localhost';
      this.server = this.app.listen(this.options.port, host, () => {
        console.log(`📚 Documentation server running on http://${host}:${this.options.port}`);
        console.log(`📄 Using OpenAPI spec: ${specPath}`);
        resolve();
      });

      this.server.on('error', (error) => {
        console.error('❌ Documentation server error:', error);
        reject(error);
      });
    });
  }

  async stop(): Promise<void> {
    if (this.server) {
      return new Promise((resolve) => {
        this.server!.close(() => {
          console.log('✅ Documentation server stopped');
          this.server = null;
          resolve();
        });
      });
    }
    return Promise.resolve();
  }

  isRunning(): boolean {
    return this.server !== null;
  }
}