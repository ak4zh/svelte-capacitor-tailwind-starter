module.exports = {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 20s linear infinite'
			},
			colors: {
				primary: '#000',
				accent: '#fff'
			}
		},

		fontFamily: {
			heading: ['Inter-Black'],
			body: ['Inter-Medium']
		}
	},
	plugins: []
};
