var ghpages = require('gh-pages');

ghpages.publish(
    'dist',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/flameapp-io/svelte-capacitor-tailwind-starter', // Update to point to your repository  
        user: {
            name: 'jb-thery', 
            email: 'jb.thery@flameapp.fr'
        }
    },
        () => {
        console.log('Deploy Complete!')
    }
)