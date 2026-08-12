/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				// Red colours
				crimson: {
					deep: "#5E0A11",
					dark: "#840309",
					mid: "#86151E",
					light: "#9D414B",
				},
				// Green colours
				green: {
					deep: "#0F382C", 
					mid: "#154a3b",
					light: "#1d604d",
				},
				gold: {
					DEFAULT: "#D4A017",
					light: "#E6BE3A",
					pale: "#F7E7A9",
				},
				rust: "#6B8E23",
				cream: {
					DEFAULT: "#F8F7F2",
					dark: "#ECE8D9",
				},
				ink: {
					DEFAULT: "#1F2937",
					mid: "#4B5563",
					light: "#6B7280",
				},
			},
			fontFamily: {
				display: ['"Cormorant Garamond"', "Georgia", "serif"],
				sans: ["Roboto", "system-ui", "sans-serif"],
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
