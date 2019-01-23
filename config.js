const resolve = require('path').resolve

//"preact-cli": "3.0.0-next.14",

var TsconfigPathPlugin = require('tsconfig-paths-webpack-plugin')

const rewireConfig = config => {

  config.module.rules.push(
        {
          enforce: 'pre',
          test: /\.tsx?$/,
          use: [{loader: 'ts-loader', options: {transpileOnly: true}}],
        }
  )

  config.resolve.alias['preact-cli-entrypoint'] = resolve(process.cwd(), 'src', 'index')
  
  config.resolve.plugins = [
		new TsconfigPathPlugin ({configFile: './tsconfig.json'})
	]


    // Match instances of { loader: 'css-loader', options { modules: true }}
  const substituteTypingsForCssModulesLoader = config => {
    if (config.loader === 'css-loader'
      && config.options
      && config.options.modules) {
      config.loader = 'typings-for-css-modules-loader';
      config.options.namedExport = true;
      config.options.camelCase = true;
    }

    // Recursively search for and replace instances of 'css-loader' per the above.
    for (const key of Object.keys(config)) {
      const value = config[key];
      if (typeof value === "object") {
        substituteTypingsForCssModulesLoader(value);
      }
    }
  };

  substituteTypingsForCssModulesLoader(config);

  return config
}

module.exports = rewireConfig