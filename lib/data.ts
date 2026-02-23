import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
// import blogImg from "@/public/blog-desktop.png"
import jumpnImg from "@/public/jumpn-desktop.png"
import speedocImg from "@/public/speedoc-desktop.png"

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const

export const experiencesData = [
	{
		title: "B.A. Philosophy & Computer Science",
		location: "Hanover College, Indiana",
		description:
			"Studied Philosophy and Computer Science.",
		icon: React.createElement(LuGraduationCap),
		date: "2008",
	},
	{
		title: "IT & Self-Directed Study",
		location: "Various",
		description:
			"Worked in IT, continued studying programming, and built hobby projects.",
		icon: React.createElement(CgWorkAlt),
		date: "2008 - 2020",
	},
	{
		title: "Le Wagon Bootcamp",
		location: "Bali, Indonesia",
		description:
			"Completed an intensive full-stack web development bootcamp. Transitioned into a technical program manager role immediately after.",
		icon: React.createElement(LuGraduationCap),
		date: "2020",
	},
	{
		title: "Website Team Lead & Engineering Manager",
		location: "Bali, Indonesia",
		description:
			"Led a frontend development team building a healthcare web platform. Progressed to Engineering Manager, overseeing multiple development and QA squads.",
		icon: React.createElement(CgWorkAlt),
		date: "2020 - 2023",
	},
	{
		title: "Full-Stack Developer",
		location: "Remote",
		description:
			"Built an online booking platform for a vacation-rental company. Developed a React Native social sports app.",
		icon: React.createElement(FaReact),
		date: "2023 - 2024",
	},
	{
		title: "AWS Solutions Architect - Associate",
		location: "",
		description:
			"Earned AWS Certified Solutions Architect - Associate certification.",
		icon: React.createElement(LuGraduationCap),
		date: "2024",
	},
	{
		title: "AI Software Engineer",
		location: "Amsterdam, Netherlands",
		description:
			"Building AI-powered solutions at ML6.",
		icon: React.createElement(FaReact),
		date: "2024 - present",
	},
] as const

export const projectsData = [
	{
		title: "Speedoc",
		description:
			"I worked on the corporate website for this startup for 2 years. Users can book medical appointments and video consultations.",
		tags: [
			"React",
			"TypeScript",
			"Next.js",
			"MongoDB",
			"MUI",
			"Strapi",
			"Payload CMS",
			"GraphQL",
		],
		imageUrl: speedocImg,
		url: "https://speedoc.com",
	},
	{
		title: "Jump'N",
		description:
			"I worked at this social sports startup as a React Native developer — implementing map, chat, and video editing features.",
		tags: ["React Native", "Expo", "FFMpeg", "React Query", "TypeScript"],
		imageUrl: jumpnImg,
		url: "https://jumpn-app.com",
	},
	// {
	// 	title: "AI Tech Blog",
	// 	description:
	// 		"Personal Next.js project to learn the OpenAI API and a customized Tip Tap editor",
	// 	tags: [
	// 		"React",
	// 		"TypeScript",
	// 		"Next.js",
	// 		"Tailwind",
	// 		"OpenAI API",
	// 		"Tip Tap",
	// 	],
	// 	imageUrl: blogImg,
	// 	url: "https://blog-ai-app-ten.vercel.app/",
	// },
] as const

export const skillsData = [
	"JavaScript",
	"TypeScript",
	"Python",
	"React",
	"React Native",
	"Next.js",
	"Node.js",
	"Express",
	"Tailwind",
	"Prisma",
	"MongoDB",
	"PostgreSQL",
	"GraphQL",
	"Git",
	"Docker",
	"GCP",
	"AWS (SAA Certified)",
	"Azure",
	"OpenAI",
	"Agents SDK",
	"Context Engineering",
] as const
