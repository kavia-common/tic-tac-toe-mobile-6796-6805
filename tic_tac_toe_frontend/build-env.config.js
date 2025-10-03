// This configuration file explicitly sets the build environment
module.exports = {
  // Specify that we're using Expo managed workflow
  buildType: 'expo-managed',
  
  // Development environment configuration
  development: {
    // Use Expo Go for development
    platform: 'expo-go',
    // No native builds required
    requiresNativeBuilds: false,
    // Expected "errors" that can be ignored
    ignorableErrors: [
      'gradle check',
      './gradlew: No such file or directory'
    ]
  },
  
  // Development commands
  commands: {
    start: 'npm start',
    lint: 'npm run lint',
    typecheck: 'npm run typecheck',
    verifySetup: 'npm run verify-setup'
  },
  
  // Verification steps
  verificationSteps: [
    'Install dependencies (npm install)',
    'Run verification (npm run verify-setup)',
    'Start development server (npm start)',
    'Open in Expo Go using QR code'
  ]
};
