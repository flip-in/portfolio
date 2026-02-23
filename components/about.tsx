"use client"

import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"
import SectionHeading from "./section-heading"

export default function About() {
	const { ref } = useSectionInView("About")

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				delay: 0.175,
			}}
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				After graduating with a degree in{" "}
				<span className="font-medium">Philosophy and Computer Science</span>, I
				decided to pursue my passion for programming. I enrolled in a coding
				bootcamp and learned{" "}
				<span className="font-medium">full-stack web development</span>.{" "}
				<span className="italic">My favorite part of programming</span> is the
				problem-solving aspect. I <span className="underline">love</span> the
				feeling of finally figuring out a solution to a problem. My core stack
				is{" "}
				<span className="font-medium">
					React, TypeScript, Next.js, and Python
				</span>
				. I work extensively with{" "}
				<span className="font-medium">AI and cloud technologies</span>,
				including OpenAI, GCP, and AWS. I'm always looking to learn new
				technologies and push the boundaries of what's possible with AI.
			</p>

			<p>
				<span className="italic">When I'm not coding</span>, I enjoy playing
				video games, watching movies, and surfing. I also enjoy{" "}
				<span className="font-medium">learning new things</span>. I am currently
				learning about{" "}
				<span className="font-medium">stoicism and world history</span>.
			</p>
		</motion.section>
	)
}
