"use client"
import React from "react";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll";
import { motion, useInView } from "framer-motion";

const About = () => {
	const aboutMeRef = React.useRef(null);
	const bioRef = React.useRef(null);
	const timelineRef = React.useRef(null);
	const certificatesRef = React.useRef(null);

	const aboutMeInView = useInView(aboutMeRef, { once: true });
	const bioInView = useInView(bioRef, { once: true });
	const timelineInView = useInView(timelineRef, { once: true });
	const certificatesInView = useInView(certificatesRef, { once: true });

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="w-full bg-background md:overflow-hidden border flex md:flex-row flex-col"
			>
				<motion.div
					initial={{ x: -100 }}
					animate={{ x: 0 }}
					transition={{ duration: 1 }}
					className="flex flex-col md:w-2/5 items-center md:pt-32"
				>
					<h1 className="md:text-7xl text-5xl my-10 md:py-0 font-serif z-30">
						Programmer
						<br />
						Student
						<br />
						Freelancer
						<br />
						Gamer
					</h1>
				</motion.div>
				<div className="md:w-3/5 overflow-hidden hidden md:block">
					<ParallaxScrollSecond images={images} className="" />
				</div>
			</motion.div>

			<div className="container mx-auto px-4">
				<motion.div
					ref={aboutMeRef}
					initial={{ opacity: 0, y: 50 }}
					animate={aboutMeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 1 }}
					className="my-12"
				>
					<h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
					<div className="h-1 w-24 bg-green-500 mt-4"></div>
				</motion.div>

				<motion.div
					ref={bioRef}
					initial={{ opacity: 0 }}
					animate={bioInView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 1 }}
					className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 mb-16"
				>
					<div className="flex items-center mb-4">
						<div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
						<h2 className="text-xl font-bold text-green-500">Bio</h2>
					</div>
					<div className="max-w-3xl text-lg">
						<p className="mb-4">
							I am currently a 3rd-year student at Tarlac State University,
							pursuing a BS in Computer Science. My passion for technology drives
							me to continually learn and grow in my field.
						</p>
						<p className="mb-4">
							Raised in the Philippines, I have dedicated myself to mastering the
							art of coding over the past two years. Beyond my college curriculum,
							I have independently nurtured my skills as a full-stack developer,
							gaining proficiency in both frontend and backend technologies.
						</p>
						<p className="mb-4">
							I have experience working on various projects that involve both
							frontend and backend technologies. I enjoy tackling complex problems
							and finding efficient solutions. I am always eager to learn new
							things and improve my skills. I believe in continuous learning and
							staying updated with the latest trends in the tech industry.
						</p>
					</div>
				</motion.div>

				{/* My Journey Timeline */}
				<motion.div
					ref={timelineRef}
					initial={{ opacity: 0 }}
					animate={timelineInView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 1 }}
					className="mb-16"
				>
					<div className="flex items-center mb-8">
						<div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
						<h2 className="text-xl font-bold text-green-500">My Journey</h2>
					</div>

					<div className="relative border-l-2 border-green-500 pl-8 ml-4 space-y-10">
						{journey.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -20 }}
								animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
								transition={{ delay: index * 0.1, duration: 0.5 }}
							>
								<div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[26px] mt-1.5"></div>
								<div className="border border-neutral-200 dark:border-neutral-800 p-4 rounded-lg bg-white dark:bg-neutral-900">
									<p className="text-green-500 font-semibold">{item.year}</p>
									<h3 className="text-xl font-bold mb-2">{item.title}</h3>
									<p className="text-neutral-600 dark:text-neutral-400">
										{item.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				<motion.div
					ref={certificatesRef}
					initial={{ opacity: 0 }}
					animate={certificatesInView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 1 }}
					className="border mt-10 h-[30rem] rounded-xl flex flex-col antialiased bg-background dark:bg-background dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden mb-16"
				>
					<div className="flex items-center mb-4">
						<div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
						<h2 className="text-xl font-bold text-green-500">
							Recent Certificates
						</h2>
					</div>
					<InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
				</motion.div>
			</div>
		</>
	);
};

// Journey Timeline Data
const journey = [
	{
		year: "2021",
		title: "Started CS Journey",
		description:
			"Enrolled in Computer Science at Tarlac State University, beginning my formal education in programming.",
	},
	{
		year: "2022",
		title: "First Web Projects",
		description:
			"Created my first web applications using HTML, CSS, and JavaScript. Began exploring React and modern web technologies.",
	},
	{
		year: "2023",
		title: "Full Stack Development",
		description:
			"Deepened my knowledge of backend technologies, databases, and deployment. Started working on more complex applications.",
	},
	{
		year: "2024",
		title: "Freelance Work",
		description:
			"Started taking on freelance projects to apply my skills in real-world scenarios and help clients bring their ideas to life.",
	},
	{
		year: "2025",
		title: "Expanding Horizons",
		description:
			"Continuing to learn and grow as a developer. Exploring new technologies and methodologies to stay at the cutting edge.",
	},
];

export default About;

const testimonials = [
	{
		image: (
			<Image
				src="/Certificates/CS50x.png"
				width={1000}
				height={1000}
				alt="certificate"
				className="rounded-lg object-cover"
			/>
		),
		name: "CS50",
		title: "Introduction to Computer Science",
	},
	{
		image: (
			<Image
				src="/Certificates/FFC-FrontEndLibraries.png"
				width={1000}
				height={1000}
				alt="certificate"
				className="rounded-lg object-cover"
			/>
		),
		name: "FreeCodeCamp",
		title: "Front End Development Libraries",
	},
	{
		image: (
			<Image
				src="/Certificates/FFC-JavascriptLegacy.png"
				width={1000}
				height={1000}
				alt="certificate"
				className="rounded-lg object-cover"
			/>
		),
		name: "FreeCodeCamp",
		title: "Legacy JavaScript Algorithms and Data Structures",
	},
	{
		image: (
			<Image
				src="/Certificates/FFC-ResponsiveWebDesign.png"
				width={1000}
				height={500}
				alt="certificate"
				className="rounded-lg object-cover"
			/>
		),
		name: "FreeCodeCamp",
		title: "Responsive Web Design",
	},
];

const images = [
	"/me/1.jpg",
	"/me/4.jpg",
	"/me/7.jpg",
	"/me/10.jpg",
	"/me/13.jpg",
	"/me/16.jpg",
	"/me/2.jpg",
	"/me/5.jpg",
	"/me/8.jpg",
	"/me/11.jpg",
	"/me/14.jpg",
	"/me/17.jpg",
	"/me/3.jpg",
	"/me/6.jpg",
	"/me/9.jpg",
	"/me/12.jpg",
	"/me/15.jpg",
	"/me/18.jpg",
];
