import { spawn, ChildProcess } from 'child_process';
import { resolve } from 'path';
import { existsSync } from 'fs';
import { MockServerOptions } from './types';

export class MockServer {
  private process: ChildProcess | null = null;
  private options: MockServerOptions;

  constructor(options: MockServerOptions) {
    this.options = {
      host: 'localhost',
      cors: true,
      ...options,
    };
  }

  async start(): Promise<void> {
    const specPath = resolve(this.options.specPath);

    if (!existsSync(specPath)) {
      throw new Error(`OpenAPI spec file not found: ${specPath}`);
    }

    const args = [
      'mock',
      specPath,
      '-p',
      this.options.port.toString(),
      '-h',
      this.options.host!,
    ];

    if (this.options.cors) {
      args.push('--cors');
    }

    console.log(
      `🚀 Starting mock server on ${this.options.host}:${this.options.port}`,
    );
    console.log(`📄 Using OpenAPI spec: ${specPath}`);

    this.process = spawn('npx', ['prism', ...args], {
      stdio: 'inherit',
      shell: true,
    });

    this.process.on('error', (error) => {
      console.error('❌ Mock server error:', error);
    });

    this.process.on('exit', (code) => {
      if (code !== 0) {
        console.log(`🏁 Mock server exited with code ${code}`);
      }
    });

    // Wait a bit for the server to start
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  async stop(): Promise<void> {
    if (this.process) {
      this.process.kill();
      this.process = null;
      console.log('✅ Mock server stopped');
    }
  }

  isRunning(): boolean {
    return this.process !== null && !this.process.killed;
  }
}
