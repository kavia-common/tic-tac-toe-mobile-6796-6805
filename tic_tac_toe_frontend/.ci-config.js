// CI Configuration for Expo Managed Workflow
module.exports = {
  // Specify that we only run Expo-related checks
  buildChecks: {
    // Native builds are not part of CI
    skipNativeBuilds: true,
    // Skip Gradle checks - not applicable for Expo managed workflow
    skipGradleChecks: true,
    // Required checks
    required: [
      'npm run typecheck',
      'npm run lint',
      'npm run verify-setup'
    ]
  },

  // Environment configuration
  environment: {
    type: 'expo-managed',
    requiresExpoGo: true,
    nativeBuildTools: {
      required: false,
      message: 'Native build tools not required - using Expo managed workflow'
    }
  },

  // Expected "errors" that should be ignored
  ignoredErrors: [
    {
      pattern: 'Error running gradle check',
      reason: 'Gradle not used in Expo managed workflow'
    },
    {
      pattern: './gradlew: No such file or directory',
      reason: 'Native Android tools not required'
    }
  ]
};
