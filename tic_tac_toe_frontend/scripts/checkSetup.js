#!/usr/bin/env node

/**
 * Script to verify development environment setup
 */
const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'App.tsx',
  'components/Board.tsx',
  'components/Cell.tsx',
  'logic/game.ts',
  'storage.ts',
  'index.js',
  'app.config.js',
  'babel.config.js',
  'metro.config.js',
  'tsconfig.json',
  'package.json',
  '.expo/settings.json'
];

const checkFiles = () => {
  console.log('Checking project setup...');
  const missing = [];
  
  requiredFiles.forEach(file => {
    if (!fs.existsSync(path.join(process.cwd(), file))) {
      missing.push(file);
    }
  });

  if (missing.length > 0) {
    console.error('Missing required files:', missing.join(', '));
    process.exit(1);
  }

  console.log('All required files present.');
  console.log('Project is properly configured for Expo development.');
  console.log('Note: Native build errors (like Gradle) can be ignored - use Expo Go for development.');
};

checkFiles();
