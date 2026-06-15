/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				crimson: {
					deep: "#8B0000",
					dark: "#C1121F",
					mid: "#D62828",
					light: "#E76F51",
				},
				gold: {
					DEFAULT: "#F4C430",
					light: "#FFD60A",
					pale: "#FFF3B0",
				},
				rust: "#2D6A4F",
				cream: {
					DEFAULT: "#F8F9FA",
					dark: "#E9ECEF",
				},
				ink: {
					DEFAULT: "#495057",
					mid: "#6C757D",
					light: "#ADB5BD",
				},
			},
			fontFamily: {
				display: ['"Cormorant Garamond"', "Georgia", "serif"],
				sans: ["Outfit", "system-ui", "sans-serif"],
			},
			animation: {
				"fade-up": "fadeUp 0.7s ease forwards",
				"fade-in": "fadeIn 0.5s ease forwards",
			},
			keyframes: {
				fadeUp: {
					from: { opacity: 0, transform: "translateY(28px)" },
					to: { opacity: 1, transform: "translateY(0)" },
				},
				fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
			},
		},
	},
	plugins: [],
};
