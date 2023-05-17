/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Averta', 'Inter', 'sans-serif']
		},
		fontWeight: {
			normal: 400,
			semibold: 600
		},
		extend: {}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio')
	]
};
