declare module '@env' {
  export const NODE_ENV: 'development' | 'production' | 'test';
  export const EXPO_PUBLIC_APP_VARIANT: string;
}

// Ensure the file is treated as a module
export {};
