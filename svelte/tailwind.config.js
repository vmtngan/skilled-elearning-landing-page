/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'chetwode-blue': 'hsl(234, 25%, 52%)',
				'dark-blue': 'hsl(233, 54%, 16%)',
				'dark-grayish-blue': 'hsl(232, 10%, 56%)',
				'bright-pink': 'hsl(341, 92%, 62%)',
				'pale-pink': 'hsl(341, 100%, 83%)',
				'magenta-pink': 'hsl(322, 87%, 55%)',
				persimmon: 'hsl(13, 100%, 64%)',
				'vibrant-blue': 'hsl(237, 100%, 64%)',
				'pale-blue': 'hsl(234, 100%, 97%)',
				'deep-blue': 'rgb(6, 22, 141)'
			}
		}
	},
	plugins: []
};
