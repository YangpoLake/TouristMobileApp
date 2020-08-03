const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, on Mac: sudo npm run / sudo yarn
const devServerPort = 9527;
module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/TouristMoblieApp/"
      : "/",
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: true,
  devServer: {
    port: devServerPort,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    progress: false,
    proxy: {
      "/api": {
        target: `http://121.196.25.46:10010`,
        changeOrigin: true, // needed for virtual hosted sites
        source: false
      }
    }
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.join(__dirname, 'public/*'),
          to: path.join(__dirname, 'dist', process.env.NODE_ENV === 'production' ? 'build' : 'dev', process.env.UNI_PLATFORM, '')
        }
      ])
    ]
  }
};
