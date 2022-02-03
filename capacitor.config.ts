import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'sveltecapacitortailwindstarter.fr', // TODO: add your app id
	appName: 'svelte-capacitor-tailwind-starter',
	webDir: 'dist',
	bundledWebRuntime: false,
	backgroundColor: '#000',
	android: {
		backgroundColor: '#000'
	},
	ios: {
		backgroundColor: '#000'
	}
};

export default config;
