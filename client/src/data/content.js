import {
	BookOpen,
	CheckCircle,
	Globe,
	GraduationCap,
	Heart,
	Leaf,
	Lightbulb,
	Link,
	ShieldCheck,
	Zap,
} from "lucide-react";

export const NAV_LINKS = [
	{ label: "Focus Areas", href: "#focus", type: "scroll" },
	{ label: "Services", href: "#services", type: "scroll" },
	{ label: "Contact", href: "#contact", type: "scroll" },
];

export const ABOUT_DROPDOWN = [
	// { label: "Who We Are", href: "#about", type: "scroll" },
	{ label: "Our Story", href: "/our-story", type: "route", },
	{ label: "Programs", href: "/programs", type: "route" },
	{ label: "News", href: "/news", type: "route" },
	// { label: "Team", href: "/team", type: "route" },
	{ label: "Achievements", href: "/achievements", type: "route" },
];

export const ENQUIRY_TYPES = [
	"Research Collaboration",
	"Training / Workshop",
	"Consultancy",
	"Partnership / Funding",
	"Media Enquiry",
	"General Information",
];

export const SERVICES1 = [
	"Policy Research",
	"Policy Advisory",
	"Leadership Development",
	"Institutional Partnerships",
	"Capacity Building",
	"Consultancy",
	"Monitoring & Evaluation",
];

export const cards = [
	{
		icon: Globe,
		title: "Regional Reach",
		desc: "Our major operational presence in Zimbabwe and Kenya allows us to extend our Regional and Continental engagement with projects and programmes in Sudan, Malawi, Zambia, Uganda, Angola and South Sudan.",
	},
	{
		icon: BookOpen,
		title: "Policy and Research Dialogues",
		desc: "We offer platforms for robust engagement on Africa's contemporary and historical issues",
	},
	{
		icon: GraduationCap,
		title: "Systems Strengthening Courses",
		desc: "We run Capacity-building programmmes for individuals, organisations and businesses to foster skills and knowledge transfer.",
	},
];

export const videos = [
	"/videos/hero-1.mp4",
	"/videos/hero-3.mp4",
	"/videos/hero-2.mp4",
];

export const vms = [
	{
		label: "Our Vision",
		title: "Inspire the African Renaissance",
		body: "A continent reclaiming its intellectual heritage and positioning its wisdom at the heart of global discourse — driving its own narrative, on its own terms.",
	},
	{
		label: "Our Mission",
		title: "Bridging Local Knowledge & Global Policy",
		body: "To bridge the gap between local knowledge and global research and policy-making; facilitating dialogue towards the creation of African narratives through extensive knowledge production and dissemination.",
	},
	{
		label: "Our Presence",
		title: "Zimbabwe & Kenya",
		body: "Head office in Harare, Zimbabwe, with an active operations base in Nairobi, Kenya — a platform for regional and continental engagement.",
	},
];

export const VALUES = [
	{
		icon: ShieldCheck,
		title: "Integrity",
		desc: "Honesty and transparency in all research, partnerships and communications.",
	},
	{
		icon: CheckCircle,
		title: "Accountability",
		desc: "Responsibility to the communities, partners, and causes we serve.",
	},
	{
		icon: Zap,
		title: "Resilience",
		desc: "Perseverance in advancing African knowledge despite systemic barriers.",
	},
	{
		icon: Lightbulb,
		title: "Phronesis",
		desc: "Practical wisdom — applying knowledge with discernment and contextual judgment.",
	},
	{
		icon: Heart,
		title: "Humanity",
		desc: "Deep care for people, communities, and the human stories behind the data.",
	},
	{
		icon: Link,
		title: "Interconnectedness",
		desc: "Recognising that African progress is bound to global solidarity.",
	},
	{
		icon: Leaf,
		title: "Respect for Nature",
		desc: "Environmental stewardship as a cornerstone of African development thinking.",
	},
];

export const FOCUS_AREAS = [
	{
		num: "01",
		title: "Education, Training & Capacity Building",
		desc: "Targeted training workshops, short courses, and systems strengthening for individuals, organisations, and governments across Africa.",
		image: "/images/focus/education.jpg",
	},
	{
		num: "02",
		title: "International Law & Relations",
		desc: "Research and dialogue at the intersection of international law, peace, security and governance with an African lens.",
		image: "/images/focus/laws.jpg",
	},
	{
		num: "03",
		title: "Environment & Climate",
		desc: "Applied research on climate change and environmental governance, integrating local ecological knowledge with global policy.",
		image: "/images/focus/environment.avif",
	},
	{
		num: "04",
		title: "Peace, Security & Governance",
		desc: "Conflict dynamics, post-conflict reconstruction, and governance challenges examined through scholar-practitioner perspectives.",
		image: "/images/focus/peace.jpg",
	},
	{
		num: "05",
		title: "Development & Humanitarian Affairs",
		desc: "Bridging academic research and humanitarian action — from fieldwork in conflict zones to development policy recommendations.",
		image: "/images/focus/development.jpg",
	},
];

export const SERVICES = [
	{
		num: "01",
		title: "Policy & Research Dialogues",
		desc: "We offer platforms for diverse and robust engagement on Africa's contemporary and historical issues — convening scholars, practitioners, and policymakers.",
		image: "/images/services/dialogue.avif",
	},
	{
		num: "02",
		title: "Training Workshops & Short Courses",
		desc: "We organise and run targeted programmes that enhance the understanding of African affairs in International Law, Governance, Humanitarian Response and Regional Integration.",
		image: "/images/services/training.avif",
	},
	{
		num: "04",
		title: "Systems Strengthening Courses",
		desc: "We run capacity-building programmes for individuals, organisations and businesses to foster skills transfer and institutional resilience.",
		image: "/images/services/development.avif",
	},
	{
		num: "05",
		title: "Consultancy Services",
		desc: "We offer expertise in Research Methodologies, Sustainable Development Strategies, and Community Engagement Practices.",
		image: "/images/services/consultancy.avif",
	},
];

export const TEAM = [
	{
		name: "Dr. James Nyawo",
		role: "Founding Executive Director",
		bio: "Ph.D. in International Law from Middlesex University, UK. A Zimbabwean scholar-practitioner with 20+ years in humanitarian field management — Angola, Uganda, Sudan, and South Sudan. Consultant for UNICEF, IOM, and UNESCO. Lecturer at Strathmore University, Nairobi. Deeply committed to the Pax Africana philosophy.",
		image: "/founder.jpg",
	},
	{
		name: "Dr. Saul Davis Sango",
		role: "Director",
		bio: "B.Sc. Statistics & Data Analysis, M.Sc. Industrial Diversity & Organizational Psychology, Ph.D. candidate in Psychology. Six Sigma Black Belt and PMP-certified. Kenyan training consultant and business development strategist. Expert in organizational psychology, data analytics, and change management.",
		image: "/director.jpg",
	},
];

export const ACHIEVEMENTS = [
	{
		title: "Keynote at Marondera University",
		desc: "Keynote address at Marondera University of Agricultural Sciences & Technology on collaborative and impactful research, emphasising transdisciplinary teamwork, research integrity, and societal impact beyond academia.",
		image: "/images/achievements/keynote.avif",
	},
	{
		title: "ZIMAZA — African Quiz & Essay Competition",
		desc: "Sponsored the ZIMAZA competition in Nairobi, fostering cross-border collaboration among students from Zimbabwe, Malawi, and Zambia. Promoted African history, geography, culture, and critical thinking on sustainable development.",
		image: "/images/achievements/competition.avif",
	},
	{
		title: "Youth Empowerment & Leadership",
		desc: "Created platforms for youth intellectual engagement and leadership development — reinforcing commitment to regional integration, education, and academic excellence across Southern and East Africa.",
		image: "/images/achievements/empowerment.avif",
	},
	{
		title: "Regional Research Networks",
		desc: "Built a growing network of researchers, practitioners, and institutions united by the goal of producing knowledge that centres African experience in global conversations.",
		image: "/images/achievements/academic.avif",
	},
];

export const CONTACT = {
	harare: {
		label: "Head Office — Zimbabwe",
		address: "13 Hendrikz Way, Mount Pleasant, Harare, Zimbabwe",
		phone: "+263 77 807 3475",
	},
	nairobi: {
		label: "Nairobi Office — Kenya",
		address: "P.O. Box 644-00620, Nairobi, Kenya",
		phone: "+254 79 7119 199",
	},
	email: "info@vfri.africa",
	website: "www.vfri.africa",
};

export const PROGRAMS = [
	{
		title: "World Vision: Sudan's Children Carry the Deepest Scars",
		category: "Research Program",
		description:
			"In this program, we integrate the World Vision's Fragile Context Programme Approach built around the Survive-Adapt-Thrive continuum and a six step implementation cycle to operationalise anticipatory action within the Humanitarian-Development-Peace Nexus in Protracted Emergencies in Sudan.",
		image: "/images/focus/development.jpg",
		link: "https://www.wvi.org/newsroom/sudan/three-years-agony-sudans-children-trapped-and-carry-deepest-scars",
		linkLabel: "Read the World Vision story",
	},
	{
		title: "Africa Forward",
		category: "Capacity Building",
		description:
			"Africa Forward is a 4 month programme featuring a masterclass and hackathon with a focus on finance, technology, marketing, and data.",
		image: "/images/programs/youth.avif",
	},
	{
		title: "Roots Forward",
		category: "Research & Innovation",
		description:
			"Roots is a three week residential program in Victoria Falls, Zimbabwe, for young adults of Zimbabwean, Zambian or African descent who have grown up in the Diaspora. It provides heritage, digital and leadership skill training to successful participants.",
		image: "/images/programs/climate.avif",
		internalLink: "/roots-forward",
	},
];

export const NEWS = [
	{
		title: "Africa Forward",
		date: "August 2026",
		summary:
			"We partnered with Momentum Labs to bring together professionals from across Africa to explore the future of finance, marketing, technology, and entrepreneurship.The session was filled with practical insights, thoughtful discussions, and perspectives from leaders who are actively shaping their industries.",
		tag: "Event",
		image: "/images/news/news3.avif",
	},
	{
		title: "Africa Forward",
		date: "November 2025",
		summary:
			"We hosted our first ever Africa Forward - IT & Tech Innovation Masterclass and Hackathon. 60+ participants aand 7+ solutions were built demonstrating the creativity and resilience of Africa's growing tech ecosystem.",
		tag: "Instagram Event Updates",
		image: "/images/news/news3.avif",
	},
	{
		title: "ZIMAZA Day Competition",
		date: "September 2025",
		summary:
			"The ZIMAZA quiz and essay competition brought learners together to explore African history, geography, culture, and sustainable development.",
		tag: "Event",
		image: "/images/news/news2.avif",
	},

	{
		title: "Culture Day Celebration",
		date: "July 2026",
		summary:
			"We sponsored a quiz on Zimbabwean general knowledge during the Zimbabwe Culture Day in Nairobi, Kenya, where participants were divided into different totem and clan groups to showcase the depth of their knowledge of Zimbabwe. Administered via the Kahoot platform to guarantee complete fairness and transparency, the quiz was ultimately won by the Elephants (Samanyangas).",
		tag: "Instagram Event Updates",
		image: "/images/news/news1.avif",
	},
	
	
];
