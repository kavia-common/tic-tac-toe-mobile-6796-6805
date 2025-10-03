# Tic Tac Toe Mobile Game

A React Native implementation of the classic Tic Tac Toe game with single-player and two-player modes, built with Expo.

## Important Development Note

This is an Expo-managed project designed specifically for development and testing with Expo Go. Native build configurations (Android/Gradle, iOS/Xcode) are not required for development. If you see Gradle-related errors during development, these can be safely ignored as they don't affect the Expo Go development workflow.

## Features

- Single-player mode with AI opponent
- Local two-player mode
- Score tracking with persistence
- Clean, centered 3x3 grid UI
- Game controls (New Game, Reset Scores)
- Mode switching between single and two-player
- Responsive design
- Basic accessibility support

## Development Setup

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Expo Go app on your mobile device

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the Expo development server:
   ```bash
   npm start
   ```

3. Run the app:
   - Install Expo Go from App Store (iOS) or Play Store (Android)
   - Make sure your mobile device is on the same network as your development machine
   - Scan the QR code shown in the terminal with your device's camera
   - The app will load in Expo Go

### Development Commands

- `npm start` - Start the Expo development server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run ios` - Start iOS simulator (macOS only)
- `npm run android` - Start Android emulator
- `npm run web` - Start web version

## Game Modes

### Single Player
- Play against a simple AI opponent
- AI will attempt to win or block your winning moves
- You play as X, AI plays as O

### Two Player
- Play locally with a friend on the same device
- Players take turns as X and O

## Score Tracking
- Scores are automatically saved and persist between sessions
- Use "Reset Scores" button to start fresh
- Tracks wins for both X and O, plus draws

## Technical Details

The game is built using:
- React Native with TypeScript
- Expo framework
- AsyncStorage for persistence
- Functional components with hooks
- Simple AI logic for single-player mode

### Project Structure
```
├── App.tsx              # Main app component
├── components/          # UI components
│   ├── Board.tsx       # Game board component
│   └── Cell.tsx        # Individual cell component
├── logic/              # Game logic
│   └── game.ts         # Game state and AI logic
└── storage.ts          # AsyncStorage helpers
```

### Development Environment
This project uses Expo's managed workflow, which means:
- No need to handle native build configurations
- Development and testing through Expo Go
- Native builds would be handled through EAS Build if needed
- Gradle/Android Studio or Xcode configurations are not required

### Configuration
- TypeScript for type safety
- ESLint for code quality
- Expo for development and building
- Metro bundler for JavaScript bundling

### Type Checking and Linting
The project includes comprehensive TypeScript and ESLint configurations for code quality:
- Strict TypeScript checks enabled
- ESLint rules for React and TypeScript
- Run `npm run typecheck` and `npm run lint` to verify code quality
