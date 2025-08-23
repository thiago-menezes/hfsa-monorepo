# HFSA Monorepo

**Hybrid Feature Scope Architecture** - A modern React monorepo with Next.js, design system, and shared packages.

## 🚀 Quick Start

```bash
# Install dependencies
yarn install

# Start development servers
yarn dev

# Start specific apps
yarn dev:main      # Main application
yarn dev:storybook # Design system Storybook
```

## 📁 What's Inside?

This monorepo includes the following packages and apps:

### 🎯 Applications (`apps/`)

- **`@hfsa/boilerplate`** - Main Next.js application with HFSA architecture
- **`@hfsa/storybook`** - Design system documentation and playground
- **`docs`** - Documentation site
- **`web`** - Additional web application

### 📦 Packages (`packages/`)

- **`@hfsa/design-system`** - Reusable React UI components
- **`@hfsa/shared-types`** - TypeScript types shared across the monorepo
- **`@hfsa/openapi-ts`** - OpenAPI TypeScript code generation tools
- **`@hfsa/eslint-config`** - Shared ESLint configurations

All packages are 100% **TypeScript** with comprehensive type safety.

## 🛠️ Tech Stack

- **⚡ [Turborepo](https://turborepo.org/)** - High-performance build system
- **⚛️ [React 19](https://react.dev/)** - Latest React with concurrent features
- **🔗 [Next.js 15](https://nextjs.org/)** - Full-stack React framework
- **📘 [TypeScript](https://typescriptlang.org/)** - Type-safe development
- **🎨 [Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **📚 [Storybook](https://storybook.js.org/)** - Component development environment
- **🧪 [Vitest](https://vitest.dev/)** - Fast unit testing framework
- **🔍 [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)** - Code quality tools

## 📋 Available Scripts

### Development

```bash
yarn dev                # Start all development servers
yarn dev:main          # Start main app only
yarn dev:storybook     # Start Storybook only
```

### Building

```bash
yarn build             # Build all packages and apps
yarn build --filter=@hfsa/boilerplate    # Build specific app
```

### Testing

```bash
yarn test              # Run all tests
yarn test:unit         # Run unit tests only
yarn test:integration  # Run integration tests only
```

### Code Quality

```bash
yarn lint              # Lint all packages
yarn format            # Format and fix all code
yarn check-types       # Type check all packages
```

### Maintenance

```bash
yarn clean             # Clean all build artifacts
yarn reset             # Full reset (clean + reinstall)
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo login

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo login
yarn exec turbo login
pnpm exec turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo link

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo link
yarn exec turbo link
pnpm exec turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
