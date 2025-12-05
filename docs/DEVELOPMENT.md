# twoChurch Development Guide

## Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git
- (Optional) Expo Go app for mobile development

### Installation

```bash
# Clone the repository
git clone https://github.com/ITSolutionsLLC/twoChurch.git
cd twoChurch

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration
```

### Running the Applications

#### Web Application

```bash
# Development mode
npm run web

# Build for production
npm run web:build

# Start production server
npm run web:start
```

The web app will be available at `http://localhost:3000`

#### Mobile Application

```bash
# Start Expo development server
npm run mobile

# Run on iOS simulator (Mac only)
npm run mobile:ios

# Run on Android emulator
npm run mobile:android

# Run in web browser
npm run mobile:web
```

Scan the QR code with Expo Go app to test on your physical device.

## Project Structure

```
twoChurch/
├── apps/
│   ├── web/                 # Next.js web application
│   │   ├── app/            # App router pages
│   │   ├── components/     # React components
│   │   └── public/         # Static assets
│   │
│   └── mobile/             # React Native mobile app
│       ├── app/            # Expo Router pages
│       ├── components/     # React Native components
│       └── assets/         # Images and fonts
│
├── packages/
│   ├── shared/             # Shared TypeScript code
│   │   ├── src/
│   │   │   ├── types.ts    # Type definitions
│   │   │   ├── utils.ts    # Utility functions
│   │   │   └── constants.ts # Constants
│   │
│   ├── ui/                 # Shared UI components (future)
│   └── config/             # Shared configuration (future)
│
├── docs/                   # Documentation
└── scripts/                # Build and utility scripts
```

## Development Workflow

### Creating a New Feature

1. Create a feature branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes in the appropriate workspace:
   - Web features: `apps/web/`
   - Mobile features: `apps/mobile/`
   - Shared logic: `packages/shared/`

3. Test your changes locally

4. Commit and push:
```bash
git add .
git commit -m "feat: add your feature description"
git push origin feature/your-feature-name
```

5. Create a Pull Request on GitHub

### Code Style

- Use TypeScript for all new code
- Follow existing naming conventions
- Use functional components with hooks
- Keep components small and focused
- Write meaningful commit messages (Conventional Commits)

### Commit Message Format

```
<type>(<scope>): <subject>

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructuring
- test: Tests
- chore: Maintenance
```

## Working with Shared Packages

The `packages/shared` package contains code used by both web and mobile apps.

### Adding Shared Types

Edit `packages/shared/src/types.ts`:

```typescript
export interface YourNewType {
  id: string;
  name: string;
}
```

### Using Shared Code

In web or mobile apps:

```typescript
import { YourNewType, formatDate } from '@twochurch/shared';
```

## Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests for specific workspace
npm run test --workspace=@twochurch/web
```

## Building for Production

### Web

```bash
npm run web:build
```

Outputs to `apps/web/.next/`

### Mobile

For production builds, use EAS Build:

```bash
cd apps/mobile
npx eas build --platform android
npx eas build --platform ios
```

## Environment Variables

### Web (.env.local)
- `NEXT_PUBLIC_API_URL`: Public API endpoint
- `API_BASE_URL`: Server-side API endpoint

### Mobile
Environment variables are configured in `app.json` and `eas.json`

## Troubleshooting

### "Module not found" errors

```bash
# Clear all node_modules and reinstall
rm -rf node_modules apps/*/node_modules packages/*/node_modules
npm install
```

### Web app not updating

```bash
# Clear Next.js cache
rm -rf apps/web/.next
npm run web
```

### Mobile app not loading

```bash
# Clear Expo cache
cd apps/mobile
npx expo start -c
```

### TypeScript errors

```bash
# Rebuild TypeScript projects
npm run build --workspaces
```

## Debugging

### Web Application

Use Chrome DevTools or VS Code debugger:

1. Open Chrome DevTools (F12)
2. Go to Sources tab
3. Find your component in webpack://

Or use VS Code:
- Press F5
- Select "Next.js: Chrome"

### Mobile Application

Use React Native Debugger or Expo DevTools:

- Press `j` in Expo terminal to open debugger
- Use `console.log()` statements
- Check Expo DevTools in browser

## API Development

When the backend API is implemented:

1. Start the API server (separate terminal):
```bash
npm run api
```

2. API will run on `http://localhost:3001`

3. Both web and mobile apps will connect to it

## Database

When implementing database:

### PostgreSQL
```bash
# Start PostgreSQL
# Run migrations
# Seed data
```

### MongoDB
```bash
# Start MongoDB
# Initialize collections
# Seed data
```

## Useful Commands

```bash
# Install dependency for web only
npm install package-name --workspace=@twochurch/web

# Install dependency for mobile only
npm install package-name --workspace=@twochurch/mobile

# Install dependency for shared package
npm install package-name --workspace=@twochurch/shared

# Run commands in all workspaces
npm run build --workspaces

# Clean all build artifacts
rm -rf apps/web/.next apps/mobile/.expo packages/*/dist
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Help

- Check existing documentation in `/docs`
- Review closed issues on GitHub
- Ask in team chat
- Create an issue on GitHub

---

Happy coding! 🚀
