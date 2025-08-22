#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { resolve } from 'path';
import { MockServer } from './mock-server';
import { DocsServer } from './docs-server';

const program = new Command();

program
  .name('hfsa-mock')
  .description('HFSA Mock Server and Documentation CLI')
  .version('1.0.0');

program
  .command('mock')
  .description('Start the mock API server')
  .option('-p, --port <number>', 'Port for mock server', '4010')
  .option(
    '-s, --spec <path>',
    'Path to OpenAPI spec file',
    'public/openapi.yaml',
  )
  .option('-h, --host <host>', 'Host for mock server', 'localhost')
  .option('--no-cors', 'Disable CORS')
  .action(async (options) => {
    try {
      const mockServer = new MockServer({
        port: parseInt(options.port),
        specPath: resolve(options.spec),
        host: options.host,
        cors: options.cors,
      });

      await mockServer.start();

      process.on('SIGINT', async () => {
        console.log('\n🔌 Shutting down mock server...');
        await mockServer.stop();
        process.exit(0);
      });

      // Keep the process running
      process.on('exit', async () => {
        await mockServer.stop();
      });
    } catch (error) {
      console.error(chalk.red('❌ Failed to start mock server:'), error);
      process.exit(1);
    }
  });

program
  .command('docs')
  .description('Start the API documentation server')
  .option('-p, --port <number>', 'Port for docs server', '4011')
  .option(
    '-s, --spec <path>',
    'Path to OpenAPI spec file',
    'public/openapi.yaml',
  )
  .option('-h, --host <host>', 'Host for docs server', 'localhost')
  .option(
    '-t, --title <title>',
    'Documentation title',
    'HFSA API Documentation',
  )
  .option('--theme <theme>', 'Documentation theme (light|dark|auto)', 'auto')
  .action(async (options) => {
    try {
      const docsServer = new DocsServer({
        port: parseInt(options.port),
        specPath: resolve(options.spec),
        host: options.host,
        title: options.title,
        theme: options.theme as 'light' | 'dark' | 'auto',
      });

      await docsServer.start();

      process.on('SIGINT', async () => {
        console.log('\n🔌 Shutting down documentation server...');
        await docsServer.stop();
        process.exit(0);
      });

      // Keep the process running
      process.on('exit', async () => {
        await docsServer.stop();
      });
    } catch (error) {
      console.error(
        chalk.red('❌ Failed to start documentation server:'),
        error,
      );
      process.exit(1);
    }
  });

program
  .command('start')
  .description('Start both mock and documentation servers')
  .option('--mock-port <number>', 'Port for mock server', '4010')
  .option('--docs-port <number>', 'Port for docs server', '4011')
  .option(
    '-s, --spec <path>',
    'Path to OpenAPI spec file',
    'public/openapi.yaml',
  )
  .option('-h, --host <host>', 'Host for servers', 'localhost')
  .option('--no-cors', 'Disable CORS on mock server')
  .option(
    '-t, --title <title>',
    'Documentation title',
    'HFSA API Documentation',
  )
  .option('--theme <theme>', 'Documentation theme (light|dark|auto)', 'auto')
  .action(async (options) => {
    try {
      const specPath = resolve(options.spec);

      const mockServer = new MockServer({
        port: parseInt(options.mockPort),
        specPath,
        host: options.host,
        cors: options.cors,
      });

      const docsServer = new DocsServer({
        port: parseInt(options.docsPort),
        specPath,
        host: options.host,
        title: options.title,
        theme: options.theme as 'light' | 'dark' | 'auto',
      });

      console.log(
        chalk.blue('🚀 Starting HFSA Mock Server and Documentation...\\n'),
      );

      await Promise.all([mockServer.start(), docsServer.start()]);

      console.log(chalk.green('✅ Both servers are running!'));
      console.log(
        chalk.blue(`📊 Mock API: http://${options.host}:${options.mockPort}`),
      );
      console.log(
        chalk.blue(
          `📚 Documentation: http://${options.host}:${options.docsPort}`,
        ),
      );

      const shutdown = async () => {
        console.log('\\n🔌 Shutting down servers...');
        await Promise.all([mockServer.stop(), docsServer.stop()]);
        process.exit(0);
      };

      process.on('SIGINT', shutdown);
      process.on('exit', shutdown);
    } catch (error) {
      console.error(chalk.red('❌ Failed to start servers:'), error);
      process.exit(1);
    }
  });

if (require.main === module) {
  program.parse();
}
