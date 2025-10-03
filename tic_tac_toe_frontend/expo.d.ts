// Type definitions for Expo Metro config
declare module 'expo/metro-config' {
  export interface MetroConfig {
    resolver: {
      assetExts: string[];
      sourceExts: string[];
      [key: string]: string[] | boolean | number | Record<string, unknown>;
    };
    transformer: {
      babelTransformerPath: string;
      [key: string]: string | boolean | number | Record<string, unknown>;
    };
    [key: string]: {
      [key: string]: string | boolean | number | string[] | Record<string, unknown>;
    };
  }
  
  export function getDefaultConfig(
    projectRoot: string,
    options?: { isCSSEnabled?: boolean }
  ): MetroConfig;
}

// Ensure this file is treated as a module
export {};
