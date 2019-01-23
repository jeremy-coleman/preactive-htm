
import rewireConfig from "./config";


export default (config, env, helpers) => {
	// add a PRERENDER global:
	helpers.getPluginsByName(config, 'DefinePlugin')[0].plugin.definitions.PRERENDER = String(env.ssr===true);
	
	rewireConfig(config);

	// link stockroom to our local copy:
	//config.resolve.alias.stockroom = path.resolve(__dirname, '..');
};
