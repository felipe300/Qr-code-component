module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"Light-gray": "#d6e2f0", // hsl(212, 45%, 89%)
				"Grayish-blue": "#7b879d", // hsl(220, 15%, 55%)
				"Dark-blue": "#1f3251" // hsl(218, 44%, 22%)
			},
			fontFamily: {
				sans: ["Outfit", "sans-serif"]
			},
			boxShadow: {
				'special': '0px 0px 10px hsla(0, 0%, 0%, 0.5)',
			}
		},
	},
	plugins: [],
}
