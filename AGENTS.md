# Agent Guidelines for North Point Technology Website

## Build Commands
- `pnpm dev` - Development server
- `pnpm build` - Production build
- `pnpm start` - Start production server
- No test command available - this is a Next.js portfolio site without a test suite

## Code Style & Conventions
- **TypeScript**: Strict mode enabled, use explicit types for props and return values
- **Imports**: Follow ESLint order rules - external packages first, then internal modules with `@/` prefix
- **Components**: PascalCase naming, default exports, functional components with async when needed
- **Files**: kebab-case for files, PascalCase for React components (.tsx extension)
- **Styling**: Tailwind classes, responsive design patterns (sm/md/lg), semantic HTML
- **API**: Contentful GraphQL queries in `/lib/api.ts`, async/await pattern
- **Types**: Define in `/types/data.d.ts`, export with proper naming conventions
- **Error Handling**: Use optional chaining and nullish coalescing for safe property access
- **Naming**: Descriptive variable names, avoid abbreviations, use camelCase for variables
- **Structure**: App Router pattern, page components in `/app`, reusable components in `/components`

## Project Context
Next.js 15 portfolio site with Contentful CMS, TypeScript, Tailwind CSS, no testing framework.