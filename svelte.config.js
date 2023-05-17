import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'@/*': 'src/*'
		}
	},
	preprocess: vitePreprocess()
};

export default config;
