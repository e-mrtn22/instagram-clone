/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'longAside': '250px minmax(300px, 1fr)',
				'shortAside': '72px minmax(300px, 1fr)'
			},
			gridTemplateRows: {
				'storiesProfile': 'auto 1fr'
			}
		},
	},
	plugins: [],
}
