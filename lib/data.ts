import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import speedocImg from "public/speedoc-desktop.png"
import blogImg from "public/blog-desktop.png"
import jumpnImg from "public/jumpn-desktop.png"

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
] as const;

export const experiencesData = [
  {
    title: "Graduated Le Wagon Bootcamp",
    location: "Bali, Indonesia",
    description:
      "I graduated after 3 months of studying. I immediately found a job as a technical program manager.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Website Team Lead & Engineering Manager",
    location: "Bali, Indonesia",
    description:
      "I worked as a developer and team lead for 2 years. I also upskilled to the Engineering Manager position, where I managed multiple development and QA squads.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: 'Remote',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Speedoc",
    description:
      "I worked on the corporate website for this startup for 2 years. Users can book medical appointments and video consultations.",
    tags: ["React", "TypeScript", "Next.js", "MongoDB", "MUI", "Strapi", "Payload CMS", "GraphQL"],
    imageUrl: speedocImg,
  },
  {
    title: "Jump'N",
    description:
      "I worked at this social sports startup as a React Native developer — implementing map, chat, and video editing features.",
    tags: ["React Native", "Expo","FFMpeg", "React Query", "TypeScript" ],
    imageUrl: jumpnImg,
  },
  {
    title: "AI Tech Blog",
    description:
      "Personal Next.js project to learn the OpenAI API and a customized Tip Tap editor",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "OpenAI API", "Tip Tap"],
    imageUrl: blogImg,
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;