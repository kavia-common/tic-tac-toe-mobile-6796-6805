module.exports = {
  expo: {
    name: "Tic Tac Toe",
    slug: "tic-tac-toe-mobile",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      }
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    // Explicitly specify we're using the managed workflow
    experiments: {
      tsconfigPaths: true
    },
    extra: {
      eas: {
        projectId: "tic-tac-toe-mobile"
      }
    }
  }
};
