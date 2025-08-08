const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Puedes habilitar o deshabilitar la configuración TurboModules aquí si es necesario
config.transformer = {
  ...config.transformer,
  experimentalImportSupport: true,
  inlineRequires: false,
};

config.resolver.assetRegistryPath = require.resolve(
  'react-native/Libraries/Image/AssetRegistry'
);

module.exports = config;

