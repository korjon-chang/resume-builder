import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				olive: '#606C38', // Name it "olive" for easier reference
				forest: '#283618',
				cream: '#FEFAE0',
				peach: '#DDA15E',
				rust: '#BC6C25'
			}
		}
	},

	plugins: [forms]
} satisfies Config;
