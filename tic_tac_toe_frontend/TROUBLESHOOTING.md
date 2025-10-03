# Development Troubleshooting Guide

## Common Issues and Solutions

### Gradle Build Errors
If you see errors like:
```
Error running gradle check: Error executing Docker command
Error: bash: line 1: ./gradlew: No such file or directory
```
**Solution**: These errors can be safely ignored during development. This project uses Expo's managed workflow, which means:
- Development is done using Expo Go
- No native build tools (like Gradle) are required
- Use `npm start` to run the app in Expo Go

### Development Environment Setup

1. **Missing Dependencies**
   ```
   npm install
   ```
   This will install all required dependencies.

2. **TypeScript Errors**
   ```
   npm run typecheck
   ```
   Run this to check for type errors.

3. **Linting Issues**
   ```
   npm run lint
   ```
   Run this to check for code style issues.

### Running the App

1. Ensure Expo Go is installed on your mobile device
2. Run `npm start` to start the development server
3. Scan the QR code with your device's camera
4. The app will open in Expo Go

### Known Issues

1. **Metro Bundler Port in Use**
   - Error: "Port 8081 already in use"
   - Solution: Kill the existing process or use a different port:
     ```
     npm start -- --port 8082
     ```

2. **Hot Reload Not Working**
   - Ensure you're on the same network as the development machine
   - Try shaking your device to open the developer menu
   - Select "Reload" from the developer menu

### Project Structure Verification

Run the setup verification script:
```
npm run verify-setup
```
This will check that all required files are present and properly configured.

### Getting Help

1. Check the project README.md for basic setup and running instructions
2. Review the .expo/README.md for Expo-specific configuration details
3. Consult the [Expo documentation](https://docs.expo.dev/) for more detailed information

### Development Best Practices

1. Always run TypeScript checks before committing:
   ```
   npm run typecheck
   ```

2. Ensure linting passes:
   ```
   npm run lint
   ```

3. Verify the setup when making structural changes:
   ```
   npm run verify-setup
   ```

4. Test both game modes (single-player and two-player) after making changes

### Expo Go Development Tips

1. Use the Expo Go app for testing
2. Shake the device to access the developer menu
3. Enable Fast Refresh for quick development
4. Use Expo's error overlay for debugging

Remember: This is an Expo managed workflow project - native build configurations are not needed for development.
