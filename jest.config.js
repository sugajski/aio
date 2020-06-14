module.exports = {
  preset: 'jest-expo',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-router-native|react-native-expo-image-cache|expo-blur|@unimodules)',
  ],
  timers: 'fake',
  testEnvironment: 'jsdom'
};
