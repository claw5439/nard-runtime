const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);
// config.maxWorkers = 1;
// config.cac
config.transformer.minifierPath = 'metro-minify-esbuild';
config.transformer.minifierConfig = {
  // ESBuild options...
};

config.cacheStores = ({ FileStore }) => [
    new FileStore({
      root: './metro-cache'//path.join(os.tmpdir(), 'metro-cache'),
    }),
  ]
module.exports = withNativeWind(config, { input: './global.css' });
