# Developer Guide - Tic Tac Toe Mobile

## Development Environment

This is an Expo managed project that uses Expo Go for development. Native build tools (like Android Studio/Gradle or Xcode) are NOT required.

### Required Tools
- Node.js
- npm
- Expo Go app (on your mobile device)

### Not Required
- Android Studio/Gradle
- Xcode
- Native build tools

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

3. Open in Expo Go:
- Scan QR code with your device's camera
- The app will load in Expo Go

## Common Build Messages

### Gradle Errors
Messages like:
```
Error running gradle check
Error: ./gradlew: No such file or directory
```
These can be safely ignored. They're not relevant to our Expo development workflow.

## Development Workflow

1. Make code changes
2. Test in Expo Go
3. Run checks:
   ```bash
   npm run lint
   npm run typecheck
   ```
4. Verify setup:
   ```bash
   npm run verify-setup
   ```

## Project Structure

```
src/
├── components/     # UI components
├── logic/         # Game logic
└── storage.ts     # Persistence layer
```

## Testing Your Changes

1. Single Player Mode:
   - Test AI moves
   - Verify score tracking
   - Check persistence

2. Two Player Mode:
   - Test turn switching
   - Verify win conditions
   - Check score tracking

## Before Committing

1. Run all checks:
```bash
npm run lint && npm run typecheck && npm run verify-setup
```

2. Test both game modes
3. Verify persistence works
4. Check UI responsiveness

Remember: Focus on Expo Go development. Native build errors can be ignored.
