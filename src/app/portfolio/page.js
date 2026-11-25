
// const technologies = [
//     "Next.js",
//     "React.js",
//     "JavaScript",
//     "Node.js",
//     "Express.js",
//     "MongoDB",
//     "Tailwind CSS",
//     "REST APIs",
//     "Git & GitHub",
// ];

// const projects = [
//     {
//         number: "01",
//         name: "Formiqo",
//         category: "DOCUMENT GENERATION PLATFORM",
//         description:
//             "A modern document-generation application designed to simplify professional document creation, management and PDF exports with advanced security features.",
//         stack: ["Next.js", "MongoDB", "Tailwind CSS", "JavaScript"],
//         link: "https://formiqo-app.vercel.app/",
//         type: "LIVE APPLICATION",
//     },
//     {
//         number: "02",
//         name: "JAKMalls",
//         category: "FULL STACK E-COMMERCE",
//         description:
//             "A complete e-commerce platform featuring product collections, shopping cart, authentication, order management and an admin dashboard to manage the store.",
//         stack: ["React", "Node.js", "Express.js", "MongoDB"],
//         link: "https://jakmalls.netlify.app/",
//         type: "LIVE APPLICATION",
//     },
//     {
//         number: "03",
//         name: "JAREX Enterprises",
//         category: "ADVANCED BUSINESS WEBSITE",
//         description:
//             "A professional business website designed to showcase projects, services and company information with an admin dashboard for client and service management.",
//         stack: ["React", "Express.js", "MongoDB", "JWT"],
//         link: "https://jarex-enterprises.netlify.app",
//         type: "LIVE APPLICATION",
//     },
// ];

// const services = [
//     {
//         number: "01",
//         title: "Web Development",
//         description:
//             "Modern, responsive and high-performance websites built with clean code and professional design.",
//     },
//     {
//         number: "02",
//         title: "Full Stack Development",
//         description:
//             "Complete web applications with frontend, backend, databases, authentication and APIs.",
//     },
//     {
//         number: "03",
//         title: "Business Websites",
//         description:
//             "Professional digital experiences that help businesses establish their online presence.",
//     },
//     {
//         number: "04",
//         title: "Web Application Development",
//         description:
//             "Functional web applications designed to solve real-world problems and improve workflows.",
//     },
// ];

// function SectionHeading({ eyebrow, title, highlight, description }) {
//     return (
//         <div className="mx-auto mb-14 max-w-2xl text-center">
//             <p className="mb-4 text-xs font-bold tracking-[0.3em] text-emerald-400">
//                 {eyebrow}
//             </p>

//             <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
//                 {title}{" "}
//                 <span className="text-emerald-400">{highlight}</span>
//             </h2>

//             <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
//                 {description}
//             </p>
//         </div>
//     );
// }

// function Arrow() {
//     return <span aria-hidden="true">↗</span>;
// }

// export default function PortfolioPage() {
//     return (
//         <main className="min-h-screen overflow-hidden bg-[#070a08] text-white">

//             {/* ================= NAVBAR ================= */}

//             <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#070a08]/90 backdrop-blur-xl">
//                 <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">

//                     <a href="#home" className="text-2xl font-black tracking-tight">
//                         JAK<span className="text-emerald-400">.</span>
//                     </a>

//                     <div className="hidden items-center gap-8 md:flex">
//                         {[
//                             ["Home", "#home"],
//                             ["About", "#about"],
//                             ["Skills", "#skills"],
//                             ["Projects", "#projects"],
//                             ["Services", "#services"],
//                             ["Contact", "#contact"],
//                         ].map(([name, link]) => (
//                             <a
//                                 key={name}
//                                 href={link}
//                                 className="text-sm font-medium text-gray-400 transition-colors hover:text-emerald-400"
//                             >
//                                 {name}
//                             </a>
//                         ))}
//                     </div>

//                     <a
//                         href="#contact"
//                         className="hidden rounded-full border border-emerald-400/40 px-5 py-2.5 text-xs font-bold text-emerald-300 transition-all hover:bg-emerald-400 hover:text-black sm:inline-flex"
//                     >
//                         LET'S TALK ↗
//                     </a>

//                     {/* Mobile navigation */}
//                     <details className="relative md:hidden">
//                         <summary className="flex cursor-pointer list-none items-center justify-center rounded-lg border border-white/10 px-4 py-2 text-sm text-emerald-400">
//                             MENU ☰
//                         </summary>

//                         <div className="absolute right-0 top-14 flex w-52 flex-col gap-1 rounded-xl border border-white/10 bg-[#101612] p-3 shadow-2xl">
//                             {[
//                                 ["Home", "#home"],
//                                 ["About", "#about"],
//                                 ["Skills", "#skills"],
//                                 ["Projects", "#projects"],
//                                 ["Services", "#services"],
//                                 ["Contact", "#contact"],
//                             ].map(([name, link]) => (
//                                 <a
//                                     key={name}
//                                     href={link}
//                                     className="rounded-lg px-4 py-3 text-sm text-gray-300 transition hover:bg-emerald-400/10 hover:text-emerald-400"
//                                 >
//                                     {name}
//                                 </a>
//                             ))}
//                         </div>
//                     </details>

//                 </nav>
//             </header>

//             {/* ================= HERO ================= */}

//             <section
//                 id="home"
//                 className="relative flex min-h-[680px] scroll-mt-24 items-center justify-center px-5 py-28 text-center sm:min-h-[750px] sm:px-8"
//             >
//                 <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.08] blur-[150px]" />

//                 <div className="relative mx-auto max-w-5xl">

//                     <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-5 py-2.5">
//                         <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
//                         <span className="text-[10px] font-semibold tracking-[0.2em] text-emerald-300 sm:text-xs">
//                             WEB DEVELOPER · OPEN TO OPPORTUNITIES
//                         </span>
//                     </div>

//                     <p className="mb-5 text-sm font-medium tracking-[0.3em] text-gray-500">
//                         BUILDING DIGITAL EXPERIENCES
//                     </p>

//                     <h1 className="text-5xl font-black leading-[1.12] tracking-[-0.055em] sm:text-7xl md:text-8xl">
//                         Turning Ideas
//                         <br />
//                         Into{" "}
//                         <span className="bg-gradient-to-r from-emerald-300 to-green-500 bg-clip-text text-transparent">
//                             Reality.
//                         </span>
//                     </h1>

//                     <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-gray-400 sm:text-lg">
//                         I'm <span className="font-semibold text-white">Jareer Ahmad Khan</span>,
//                         a web developer focused on building modern websites and
//                         full-stack applications that combine functionality,
//                         performance and exceptional user experiences.
//                     </p>

//                     <div className="mt-10 flex flex-wrap justify-center gap-4">
//                         <a
//                             href="#projects"
//                             className="rounded-full bg-emerald-400 px-8 py-4 text-sm font-bold text-[#061009] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-300 hover:shadow-[0_10px_40px_rgba(52,211,153,0.2)]"
//                         >
//                             EXPLORE MY WORK ↗
//                         </a>

//                         <a
//                             href="#contact"
//                             className="rounded-full border border-white/15 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:text-emerald-400"
//                         >
//                             CONTACT ME
//                         </a>
//                     </div>

//                     <div className="mt-14 flex flex-wrap justify-center gap-7 text-xs text-gray-500">
//                         <a
//                             href="https://github.com/jareerahmad"
//                             target="_blank"
//                             rel="noreferrer"
//                             className="transition hover:text-emerald-400"
//                         >
//                             GITHUB ↗
//                         </a>

//                         <a
//                             href="https://www.linkedin.com/"
//                             target="_blank"
//                             rel="noreferrer"
//                             className="transition hover:text-emerald-400"
//                         >
//                             LINKEDIN ↗
//                         </a>

//                         <a
//                             href="mailto:contact@jarex-enterprises.com"
//                             className="transition hover:text-emerald-400"
//                         >
//                             EMAIL ↗
//                         </a>
//                     </div>

//                 </div>
//             </section>

//             {/* ================= TECHNOLOGY MARQUEE ================= */}

//             <div className="overflow-hidden border-y border-white/[0.07] bg-white/[0.015] py-6">
//                 <div className="flex w-max animate-marquee">
//                     {[...technologies, ...technologies].map((tech, index) => (
//                         <div
//                             key={`${tech}-${index}`}
//                             className="flex items-center gap-10 px-8 sm:gap-14 sm:px-12"
//                         >
//                             <span className="whitespace-nowrap text-xs font-bold tracking-[0.16em] text-gray-400 sm:text-sm">
//                                 {tech.toUpperCase()}
//                             </span>
//                             <span className="text-emerald-400">✳</span>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* ================= ABOUT ================= */}

//             <section
//                 id="about"
//                 className="scroll-mt-24 px-5 py-28 sm:px-8 lg:px-12"
//             >
//                 <div className="mx-auto max-w-6xl">

//                     <SectionHeading
//                         eyebrow="01 / ABOUT ME"
//                         title="A Developer With"
//                         highlight="A Vision."
//                         description="I believe great websites are built through the right combination of technology, thoughtful design and problem-solving."
//                     />

//                     <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">

//                         <div className="rounded-3xl border border-white/[0.08] bg-[#0d120f] p-7 sm:p-10">
//                             <p className="mb-5 text-sm font-bold tracking-widest text-emerald-400">
//                                 WHO I AM
//                             </p>

//                             <h3 className="mb-6 text-2xl font-bold leading-snug sm:text-3xl">
//                                 I don't just write code.
//                                 <br />
//                                 I build solutions.
//                             </h3>

//                             <p className="mb-5 text-sm leading-8 text-gray-400 sm:text-base">
//                                 I'm Jareer Ahmad Khan, a web developer from Peshawar,
//                                 Pakistan. I work with modern JavaScript technologies
//                                 to develop responsive websites and functional
//                                 full-stack applications.
//                             </p>

//                             <p className="text-sm leading-8 text-gray-400 sm:text-base">
//                                 My experience includes developing e-commerce platforms,
//                                 document-generation applications and web-based systems.
//                                 I'm continuously improving my skills and exploring
//                                 modern technologies, including Next.js.
//                             </p>

//                             <a
//                                 href="#projects"
//                                 className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-emerald-400 transition hover:gap-5"
//                             >
//                                 DISCOVER MY PROJECTS <Arrow />
//                             </a>
//                         </div>

//                         <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">

//                             <div className="rounded-3xl border border-emerald-400/15 bg-emerald-400/[0.045] p-7">
//                                 <p className="text-4xl font-black text-emerald-400">
//                                     MERN
//                                 </p>
//                                 <p className="mt-3 text-sm font-semibold text-white">
//                                     Full Stack Development
//                                 </p>
//                                 <p className="mt-2 text-xs leading-6 text-gray-500">
//                                     Building applications across frontend, backend and databases.
//                                 </p>
//                             </div>

//                             <div className="rounded-3xl border border-white/[0.08] bg-[#0d120f] p-7">
//                                 <p className="text-4xl font-black text-white">
//                                     100%
//                                 </p>
//                                 <p className="mt-3 text-sm font-semibold text-white">
//                                     Commitment to Growth
//                                 </p>
//                                 <p className="mt-2 text-xs leading-6 text-gray-500">
//                                     Learning, building and improving with every project.
//                                 </p>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ================= SKILLS ================= */}

//             <section
//                 id="skills"
//                 className="scroll-mt-24 border-y border-white/[0.06] bg-[#0a0e0b] px-5 py-28 sm:px-8 lg:px-12"
//             >
//                 <div className="mx-auto max-w-6xl">

//                     <SectionHeading
//                         eyebrow="02 / TECHNICAL EXPERTISE"
//                         title="Technologies I"
//                         highlight="Work With."
//                         description="The tools and technologies I use to design, develop and bring web applications to life."
//                     />

//                     <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">

//                         {technologies.map((tech, index) => (
//                             <div
//                                 key={tech}
//                                 className="group rounded-2xl border border-white/[0.07] bg-[#101612] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-400/[0.05] sm:p-7"
//                             >
//                                 <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.08] text-sm font-black text-emerald-400 transition group-hover:bg-emerald-400 group-hover:text-black">
//                                     {String(index + 1).padStart(2, "0")}
//                                 </div>

//                                 <h3 className="text-sm font-bold text-gray-200 sm:text-base">
//                                     {tech}
//                                 </h3>

//                                 <p className="mt-2 text-[10px] text-gray-600">
//                                     DEVELOPMENT TECHNOLOGY
//                                 </p>
//                             </div>
//                         ))}

//                     </div>
//                 </div>
//             </section>

//             {/* ================= PROJECTS ================= */}

//             <section
//                 id="projects"
//                 className="scroll-mt-24 px-5 py-28 sm:px-8 lg:px-12"
//             >
//                 <div className="mx-auto max-w-6xl">

//                     <SectionHeading
//                         eyebrow="03 / SELECTED WORK"
//                         title="Projects That"
//                         highlight="Speak."
//                         description="A selection of applications and digital products I've worked on. Real projects, practical functionality and continuous improvement."
//                     />

//                     <div className="grid gap-6 lg:grid-cols-2">

//                         {projects.map((project, index) => (
//                             <article
//                                 key={project.number}
//                                 className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0d120f] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/35 sm:p-9 ${index === 0 ? "lg:col-span-2" : ""
//                                     }`}
//                             >
//                                 <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-emerald-400/[0.045] blur-[90px] transition group-hover:bg-emerald-400/[0.10]" />

//                                 <div className="relative">

//                                     <div className="mb-9 flex items-center justify-between">
//                                         <span className="text-sm font-bold tracking-widest text-emerald-400">
//                                             PROJECT / {project.number}
//                                         </span>

//                                         <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 text-[9px] font-bold tracking-wider text-emerald-300">
//                                             {project.type}
//                                         </span>
//                                     </div>

//                                     <p className="mb-3 text-[10px] font-bold tracking-[0.2em] text-gray-500">
//                                         {project.category}
//                                     </p>

//                                     <h3 className="text-3xl font-black tracking-tight transition-colors group-hover:text-emerald-300 sm:text-4xl">
//                                         {project.name}
//                                     </h3>

//                                     <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400">
//                                         {project.description}
//                                     </p>

//                                     <div className="mt-7 flex flex-wrap gap-2">
//                                         {project.stack.map((item) => (
//                                             <span
//                                                 key={item}
//                                                 className="rounded-full border border-white/10 px-3 py-2 text-[10px] font-medium text-gray-400"
//                                             >
//                                                 {item}
//                                             </span>
//                                         ))}
//                                     </div>

//                                     <div className="mt-9 border-t border-white/[0.07] pt-6">
//                                         <a
//                                             href={project.link}
//                                             target="_blank"
//                                             rel="noreferrer"
//                                             className="inline-flex items-center gap-3 text-sm font-bold text-emerald-400 transition-all hover:gap-5"
//                                         >
//                                             EXPLORE PROJECT <Arrow />
//                                         </a>
//                                     </div>

//                                 </div>
//                             </article>
//                         ))}

//                     </div>

//                 </div>
//             </section>

//             {/* ================= SERVICES ================= */}

//             <section
//                 id="services"
//                 className="scroll-mt-24 border-y border-white/[0.06] bg-[#0a0e0b] px-5 py-28 sm:px-8 lg:px-12"
//             >
//                 <div className="mx-auto max-w-6xl">

//                     <SectionHeading
//                         eyebrow="04 / WHAT I OFFER"
//                         title="Turning Your Ideas"
//                         highlight="Into Solutions."
//                         description="I help individuals and businesses transform their ideas into professional digital products."
//                     />

//                     <div className="grid gap-4 sm:grid-cols-2">

//                         {services.map((service) => (
//                             <div
//                                 key={service.number}
//                                 className="group rounded-2xl border border-white/[0.07] bg-[#101612] p-7 transition-all duration-300 hover:border-emerald-400/35 sm:p-9"
//                             >
//                                 <div className="mb-7 flex items-center justify-between">
//                                     <span className="text-sm font-bold text-emerald-400">
//                                         {service.number}
//                                     </span>

//                                 </div>

//                                 <h3 className="text-xl font-bold text-white group-hover:text-emerald-400">
//                                     {service.title}
//                                 </h3>

//                                 <p className="mt-4 text-sm leading-7 text-gray-400">
//                                     {service.description}
//                                 </p>
//                             </div>
//                         ))}

//                     </div>
//                 </div>
//             </section>

//             {/* ================= CONTACT ================= */}

//             <section
//                 id="contact"
//                 className="scroll-mt-24 px-5 py-28 sm:px-8 lg:px-12"
//             >
//                 <div className="mx-auto max-w-5xl overflow-hidden rounded-[30px] border border-emerald-400/20 bg-[#0d1510] px-6 py-16 text-center sm:px-12 sm:py-20">

//                     <p className="mb-5 text-xs font-bold tracking-[0.3em] text-emerald-400">
//                         05 / LET'S CONNECT
//                     </p>

//                     <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
//                         Have a Project
//                         <br />
//                         <span className="text-emerald-400">In Mind?</span>
//                     </h2>

//                     <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-gray-400 sm:text-base">
//                         Looking for a developer to bring your ideas to life?
//                         Let's discuss your project, explore possibilities and
//                         build something meaningful together.
//                     </p>

//                     <a
//                         href="mailto:jarexenterprises@gmail.com?subject=Project%20Inquiry"
//                         className="mt-10 inline-flex items-center gap-4 rounded-full bg-emerald-400 px-9 py-4 text-sm font-bold text-black transition-all hover:-translate-y-1 hover:bg-emerald-300 hover:shadow-[0_10px_40px_rgba(52,211,153,0.2)]"
//                     >
//                         LET'S WORK TOGETHER <Arrow />
//                     </a>

//                     <p className="mt-7 text-xs text-gray-500">
//                         Peshawar, Pakistan · Available for opportunities
//                     </p>

//                 </div>
//             </section>

//             {/* ================= FOOTER ================= */}

//             <footer className="border-t border-white/[0.08] bg-[#060907] px-5 py-10 sm:px-8 lg:px-12">
//                 <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 text-center sm:flex-row sm:text-left">

//                     <div>
//                         <a href="#home" className="text-2xl font-black">
//                             Jareer<span className="text-emerald-400">.</span>
//                         </a>

//                         <p className="mt-2 text-xs text-gray-500">
//                             Building digital experiences with purpose.
//                         </p>
//                     </div>

//                     <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-400">
//                         <a href="#home" className="transition hover:text-emerald-400">
//                             Home
//                         </a>
//                         <a href="#about" className="transition hover:text-emerald-400">
//                             About
//                         </a>
//                         <a href="#projects" className="transition hover:text-emerald-400">
//                             Projects
//                         </a>
//                         <a href="#contact" className="transition hover:text-emerald-400">
//                             Contact
//                         </a>
//                     </div>

//                     <p className="text-[10px] tracking-wider text-gray-600">
//                         © 2026 JAREER AHMAD KHAN
//                     </p>

//                 </div>
//             </footer>

//         </main>
//     );
// }














import ContactForm from "@/components/ContactForm";

import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiTailwindcss,
    SiGit,
    SiGithub,
    SiVite,
    SiNpm,
} from "react-icons/si";

import { FaCode, FaPhone, FaLinkedin, FaDatabase, FaEnvelope, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Vite",
    "npm",
];

const skills = [
    { name: "HTML5", icon: SiHtml5, color: "text-orange-500", category: "FRONTEND" },
    { name: "CSS3", icon: SiCss, color: "text-blue-500", category: "FRONTEND" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", category: "LANGUAGE" },
    { name: "React.js", icon: SiReact, color: "text-cyan-400", category: "FRONTEND" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white", category: "FRAMEWORK" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500", category: "BACKEND" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-300", category: "BACKEND" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500", category: "DATABASE" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400", category: "STYLING" },
    { name: "Git", icon: SiGit, color: "text-orange-500", category: "TOOLS" },
    { name: "GitHub", icon: SiGithub, color: "text-white", category: "TOOLS" },
    { name: "Vite", icon: SiVite, color: "text-purple-400", category: "TOOLS" },
    { name: "npm", icon: SiNpm, color: "text-red-500", category: "TOOLS" },
];

const projects = [
    {
        number: "01",
        name: "Formiqo",
        category: "DOCUMENT GENERATION PLATFORM",
        description:
            "A modern document-generation application designed to simplify professional document creation, management and PDF exports with advanced security features.",
        stack: ["Next.js", "MongoDB", "Tailwind CSS", "JavaScript"],
        link: "https://formiqo-app.vercel.app/",
        type: "LIVE APPLICATION",
    },
    {
        number: "02",
        name: "JAKMalls",
        category: "FULL STACK E-COMMERCE",
        description:
            "A complete e-commerce platform featuring product collections, shopping cart, authentication, order management and an admin dashboard to manage the store.",
        stack: ["React", "Node.js", "Express.js", "MongoDB"],
        link: "https://jakmalls.netlify.app/",
        type: "LIVE APPLICATION",
    },
    {
        number: "03",
        name: "JAREX Enterprises",
        category: "ADVANCED BUSINESS WEBSITE",
        description:
            "A professional business website designed to showcase projects, services and company information with an admin dashboard for client and service management.",
        stack: ["MongoDB", "Express.js", "Tailwind CSS", "Node.js"],
        link: "https://jarex-enterprises.netlify.app/",
        type: "LIVE APPLICATION",
    },
];

const services = [
    {
        number: "01",
        title: "Web Development",
        description:
            "Modern, responsive and high-performance websites built with clean code and professional design.",
        icon: FaCode,
    },
    {
        number: "02",
        title: "Full Stack Development",
        description:
            "Complete web applications with frontend, backend, databases, authentication and APIs.",
        icon: FaDatabase,
    },
    {
        number: "03",
        title: "Business Websites",
        description:
            "Professional digital experiences that help businesses establish their online presence.",
        icon: SiReact,
    },
    {
        number: "04",
        title: "Web Application Development",
        description:
            "Functional web applications designed to solve real-world problems and improve workflows.",
        icon: SiNextdotjs,
    },
];

const navigation = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Services", "#services"],
    ["Contact", "#contact"],
];

function SectionHeading({ eyebrow, title, highlight, description }) {
    return (
        <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-emerald-400">
                {eyebrow}
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                {title}{" "}
                <span className="text-emerald-400">{highlight}</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
                {description}
            </p>
        </div>
    );
}

function Arrow() {
    return <span aria-hidden="true">↗</span>;
}

export default function PortfolioPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#070a08] pt-[76px] text-white">

            {/* FIXED NAVBAR */}

            <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.07] bg-[#070a08]/95 backdrop-blur-xl">
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">

                    <a href="#home" className="text-2xl font-black tracking-tight">
                        Jareer<span className="text-emerald-400">.</span>
                    </a>

                    <div className="hidden items-center gap-7 lg:flex">
                        {navigation.map(([name, link]) => (
                            <a
                                key={name}
                                href={link}
                                className="text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-emerald-400"
                            >
                                {name}
                            </a>
                        ))}
                    </div>

                    <a
                        href="#contact"
                        className="hidden rounded-full border border-emerald-400/40 px-5 py-2.5 text-xs font-bold text-emerald-300 transition-all duration-300 hover:bg-emerald-400 hover:text-black sm:inline-flex"
                    >
                        LET'S TALK ↗
                    </a>

                    <details className="group relative lg:hidden">
                        <summary className="flex cursor-pointer list-none items-center justify-center rounded-lg border border-white/10 px-4 py-2 text-sm text-emerald-400">
                            MENU ☰
                        </summary>

                        <div className="absolute right-0 top-14 flex w-56 flex-col gap-1 rounded-xl border border-white/10 bg-[#101612] p-3 shadow-2xl">
                            {navigation.map(([name, link]) => (
                                <a
                                    key={name}
                                    href={link}
                                    className="rounded-lg px-4 py-3 text-sm text-gray-300 transition hover:bg-emerald-400/10 hover:text-emerald-400"
                                >
                                    {name}
                                </a>
                            ))}

                            <a
                                href="#contact"
                                className="mt-2 rounded-lg bg-emerald-400 px-4 py-3 text-center text-sm font-bold text-black"
                            >
                                LET'S TALK ↗
                            </a>
                        </div>
                    </details>

                </nav>
            </header>

            {/* HERO */}

            <section
                id="home"
                className="relative flex min-h-[680px] scroll-mt-24 items-center justify-center px-5 py-28 text-center sm:min-h-[750px] sm:px-8"
            >
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.08] blur-[150px]" />

                <div className="relative mx-auto max-w-5xl">

                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-5 py-2.5">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                        <span className="text-[10px] font-semibold tracking-[0.2em] text-emerald-300 sm:text-xs">
                            WEB DEVELOPER · OPEN TO OPPORTUNITIES
                        </span>
                    </div>

                    <p className="mb-5 text-sm font-medium tracking-[0.3em] text-gray-500">
                        BUILDING DIGITAL EXPERIENCES
                    </p>

                    <h1 className="text-5xl font-black leading-[1.12] tracking-[-0.055em] sm:text-7xl md:text-8xl">
                        Turning Ideas
                        <br />
                        Into{" "}
                        <span className="bg-gradient-to-r from-emerald-300 to-green-500 bg-clip-text text-transparent">
                            Reality.
                        </span>
                    </h1>

                    <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-gray-400 sm:text-lg">
                        I'm <span className="font-semibold text-white">Jareer Ahmad Khan</span>,
                        a web developer focused on building modern websites and
                        full-stack applications that combine functionality,
                        performance and exceptional user experiences.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <a
                            href="https://go.fliplink.me/view/006FFB53-9668-4705-93FE-D8B073EAFCCE"
                            className="rounded-full bg-emerald-400 px-8 py-4 text-sm font-bold text-[#061009] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-300 hover:shadow-[0_10px_40px_rgba(52,211,153,0.2)]"
                        >
                            My Resume ↗
                        </a>

                        <a
                            href="#projects"
                            className="rounded-full border border-white/15 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:text-emerald-400"
                        >
                            View MY WORK
                        </a>
                    </div>

                    <div className="mt-14 flex flex-wrap justify-center gap-7 text-sm text-gray-500">
                        <a
                            href="https://github.com/jareerahmad"
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-emerald-400 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:text-emerald-400"
                        >
                            GITHUB ↗
                        </a>

                        <a
                            href="https://www.linkedin.com/in/jareer-ahmad-khan-93279b425/"
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-emerald-400  font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:text-emerald-400"
                        >
                            LINKEDIN ↗
                        </a>

                        <a
                            href="mailto:jarexenterprises@gmail.com"
                            className="transition hover:text-emerald-400 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:text-emerald-400"
                        >
                            EMAIL ↗
                        </a>
                    </div>

                </div>
            </section>

            {/* TECHNOLOGY MARQUEE */}

            <div className="overflow-hidden border-y border-white/[0.07] bg-white/[0.015] py-6">
                <div className="flex w-max animate-marquee">
                    {[...technologies, ...technologies].map((tech, index) => (
                        <div
                            key={`${tech}-${index}`}
                            className="flex items-center gap-10 px-8 sm:gap-14 sm:px-12"
                        >
                            <span className="whitespace-nowrap text-xs font-bold tracking-[0.16em] text-gray-400 sm:text-sm">
                                {tech.toUpperCase()}
                            </span>
                            <span className="text-emerald-400">✳</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ABOUT */}

            <section
                id="about"
                className="scroll-mt-24 px-5 py-28 sm:px-8 lg:px-12"
            >
                <div className="mx-auto max-w-6xl">

                    <SectionHeading
                        eyebrow="01 / ABOUT ME"
                        title="A Developer With"
                        highlight="A Vision."
                        description="I believe great websites are built through the right combination of technology, thoughtful design and problem-solving."
                    />

                    <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">

                        <div className="rounded-3xl border border-white/[0.08] bg-[#0d120f] p-7 sm:p-10">
                            <p className="mb-5 text-sm font-bold tracking-widest text-emerald-400">
                                WHO I AM
                            </p>

                            <h3 className="mb-6 text-2xl font-bold leading-snug sm:text-3xl">
                                I don't just write code.
                                <br />
                                I build solutions.
                            </h3>

                            <p className="mb-5 text-sm leading-8 text-gray-400 sm:text-base">
                                I'm Jareer Ahmad Khan, a web developer from Peshawar,
                                Pakistan. I work with modern JavaScript technologies
                                to develop responsive websites and functional
                                full-stack applications.
                            </p>

                            <p className="text-sm leading-8 text-gray-400 sm:text-base">
                                My experience includes developing e-commerce platforms,
                                document-generation applications and web-based systems.
                                I'm continuously improving my skills and exploring
                                modern technologies, including Next.js.
                            </p>

                            <a
                                href="#projects"
                                className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-emerald-400 transition hover:gap-5"
                            >
                                DISCOVER MY PROJECTS <Arrow />
                            </a>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">

                            <div className="rounded-3xl border border-emerald-400/15 bg-emerald-400/[0.045] p-7">
                                <p className="text-4xl font-black text-emerald-400">
                                    MERN
                                </p>
                                <p className="mt-3 text-sm font-semibold text-white">
                                    Full Stack Development
                                </p>
                                <p className="mt-2 text-xs leading-6 text-gray-500">
                                    Building applications across frontend, backend and databases.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-white/[0.08] bg-[#0d120f] p-7">
                                <p className="text-4xl font-black text-white">
                                    100%
                                </p>
                                <p className="mt-3 text-sm font-semibold text-white">
                                    Commitment to Growth
                                </p>
                                <p className="mt-2 text-xs leading-6 text-gray-500">
                                    Learning, building and improving with every project.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* SKILLS WITH REAL TECHNOLOGY LOGOS */}

            <section
                id="skills"
                className="scroll-mt-24 border-y border-white/[0.06] bg-[#0a0e0b] px-5 py-28 sm:px-8 lg:px-12"
            >
                <div className="mx-auto max-w-6xl">

                    <SectionHeading
                        eyebrow="02 / TECHNICAL EXPERTISE"
                        title="Technologies I"
                        highlight="Work With."
                        description="A closer look at the technologies and tools I use to design, develop and bring web applications to life."
                    />

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {skills.map((skill, index) => {
                            const Icon = skill.icon;

                            return (
                                <div
                                    key={skill.name}
                                    className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#101612] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/40 hover:bg-emerald-400/[0.05] sm:p-7"
                                    style={{ animationDelay: `${index * 60}ms` }}
                                >
                                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-400/[0.04] blur-2xl transition group-hover:bg-emerald-400/[0.12]" />

                                    <div className="relative">
                                        <Icon
                                            className={`mb-6 text-4xl transition duration-300 group-hover:scale-110 ${skill.color}`}
                                        />

                                        <h3 className="text-sm font-bold text-gray-100 sm:text-base">
                                            {skill.name}
                                        </h3>

                                        <p className="mt-2 text-[9px] font-bold tracking-[0.18em] text-gray-600">
                                            {skill.category}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <p className="mt-8 text-center text-xs text-gray-600">
                        Technologies and tools used across my development work.
                    </p>

                </div>
            </section>

            {/* PROJECTS */}

            <section
                id="projects"
                className="scroll-mt-24 px-5 py-28 sm:px-8 lg:px-12"
            >
                <div className="mx-auto max-w-6xl">

                    <SectionHeading
                        eyebrow="03 / SELECTED WORK"
                        title="Projects That"
                        highlight="Speak."
                        description="A selection of applications and digital products I've worked on. Real projects, practical functionality and continuous improvement."
                    />

                    <div className="grid gap-6 lg:grid-cols-2">
                        {projects.map((project, index) => (
                            <article
                                key={project.number}
                                className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0d120f] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/35 sm:p-9 ${index === 0 ? "lg:col-span-2" : ""
                                    }`}
                            >
                                <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-emerald-400/[0.045] blur-[90px] transition group-hover:bg-emerald-400/[0.10]" />

                                <div className="relative">

                                    <div className="mb-9 flex items-center justify-between gap-3">
                                        <span className="text-sm font-bold tracking-widest text-emerald-400">
                                            PROJECT / {project.number}
                                        </span>

                                        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 text-[9px] font-bold tracking-wider text-emerald-300">
                                            {project.type}
                                        </span>
                                    </div>

                                    <p className="mb-3 text-[10px] font-bold tracking-[0.2em] text-gray-500">
                                        {project.category}
                                    </p>

                                    <h3 className="text-3xl font-black tracking-tight transition-colors group-hover:text-emerald-300 sm:text-4xl">
                                        {project.name}
                                    </h3>

                                    <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400">
                                        {project.description}
                                    </p>

                                    <div className="mt-7 flex flex-wrap gap-2">
                                        {project.stack.map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-full border border-white/10 px-3 py-2 text-[10px] font-medium text-gray-400"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-9 border-t border-white/[0.07] pt-6">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-3 text-sm font-bold text-emerald-400 transition-all hover:gap-5"
                                        >
                                            EXPLORE PROJECT <Arrow />
                                        </a>
                                    </div>

                                </div>
                            </article>
                        ))}
                    </div>

                </div>
            </section>

            {/* SERVICES */}

            <section
                id="services"
                className="scroll-mt-24 border-y border-white/[0.06] bg-[#0a0e0b] px-5 py-28 sm:px-8 lg:px-12"
            >
                <div className="mx-auto max-w-6xl">

                    <SectionHeading
                        eyebrow="04 / WHAT I OFFER"
                        title="Turning Your Ideas"
                        highlight="Into Solutions."
                        description="I help individuals and businesses transform their ideas into professional digital products."
                    />

                    <div className="grid gap-4 sm:grid-cols-2">
                        {services.map((service) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.number}
                                    className="group rounded-2xl border border-white/[0.07] bg-[#101612] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/35 sm:p-9"
                                >
                                    <div className="mb-7 flex items-center justify-between">
                                        <span className="text-sm font-bold text-emerald-400">
                                            {service.number}
                                        </span>

                                        <Icon className="text-2xl text-emerald-400/70 transition group-hover:scale-110 group-hover:text-emerald-300" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white transition group-hover:text-emerald-400">
                                        {service.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-gray-400">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* CONTACT FORM */}

            <section
                id="contact"
                className="scroll-mt-24 px-5 py-28 sm:px-8 lg:px-12"
            >
                <div className="mx-auto max-w-6xl">

                    <SectionHeading
                        eyebrow="05 / LET'S CONNECT"
                        title="Let's Build"
                        highlight="Something Great."
                        description="Have an idea, a project or an opportunity? Send me a message. I'd love to hear about it."
                    />

                    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

                        <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-[#0d1510] p-8 sm:p-10">
                            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-emerald-400/[0.08] blur-[90px]" />

                            <div className="relative">
                                <p className="text-xs font-bold tracking-[0.25em] text-emerald-400">
                                    GET IN TOUCH
                                </p>

                                <h3 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">
                                    Let's turn your next idea into reality.
                                </h3>

                                <p className="mt-6 text-sm leading-8 text-gray-400">
                                    Whether you're looking for a website, a web application
                                    or a developer to join your project, feel free to reach out.
                                </p>

                                <div className="mt-10 space-y-6">

                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-400">
                                            <FaMapMarkerAlt />
                                        </div>

                                        <div>
                                            <p className="text-xs text-gray-500">LOCATION</p>
                                            <p className="mt-1 text-sm font-semibold text-gray-200">
                                                Peshawar, Pakistan
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-400">
                                            <FaEnvelope />
                                        </div>

                                        <div>
                                            <p className="text-xs text-gray-500">EMAIL</p>
                                            <a
                                                href="mailto:jarexenterprises@gmail.com"
                                                className="mt-1 block break-all text-sm font-semibold text-gray-200 transition hover:text-emerald-400"
                                            >
                                                jarexenterprises@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-400">
                                            <FaPhone />
                                        </div>

                                        <div>
                                            <p className="text-xs text-gray-500">PHONE</p>
                                            <a
                                                href="https://wa.me/923229327790"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-1 block text-sm font-semibold text-gray-200 transition hover:text-emerald-400"
                                            >
                                                +92 322 9327790
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-400">
                                            <FaGithub />
                                        </div>

                                        <div>
                                            <p className="text-xs text-gray-500">GITHUB</p>
                                            <a
                                                href="https://github.com/jareerahmad"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-1 block text-sm font-semibold text-gray-200 transition hover:text-emerald-400"
                                            >
                                                github.com/jareerahmad ↗
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/[0.08] bg-[#0d120f] p-6 sm:p-9">
                            <div className="mb-8">
                                <p className="text-xs font-bold tracking-[0.25em] text-emerald-400">
                                    SEND AN INQUIRY
                                </p>

                                <h3 className="mt-3 text-2xl font-bold">
                                    Tell me about your project.
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-gray-500">
                                    Fill in the details below and I'll get back to you.
                                </p>
                            </div>

                            <ContactForm />
                        </div>

                    </div>
                </div>
            </section>

            {/* PROFESSIONAL FOOTER */}

            <footer className="border-t border-white/[0.08] bg-[#050806] px-5 pb-8 pt-16 sm:px-8 lg:px-12">

                <div className="mx-auto max-w-7xl">

                    <div className="grid gap-12 border-b border-white/[0.08] pb-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

                        <div>
                            <a href="#home" className="text-3xl font-black tracking-tight">
                                Jareer<span className="text-emerald-400">.</span>
                            </a>

                            <p className="mt-5 max-w-sm text-sm leading-8 text-gray-500">
                                Building modern digital experiences through thoughtful
                                design, clean code and practical solutions.
                            </p>

                            <div className="mt-7 flex gap-3">
                                <a
                                    href="https://github.com/jareerahmad"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GitHub"
                                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-400"
                                >
                                    <FaGithub />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/jareer-ahmad-khan-93279b425/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="LinkedIn"
                                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-400"
                                >
                                    <FaLinkedin />
                                </a>

                                <a
                                    href="mailto:jarexenterprises@gmail.com"
                                    aria-label="Email"
                                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-400"
                                >
                                    <FaEnvelope />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold text-white">NAVIGATION</h4>

                            <div className="mt-6 flex flex-col gap-4">
                                {navigation.map(([name, link]) => (
                                    <a
                                        key={name}
                                        href={link}
                                        className="w-fit text-sm text-gray-500 transition hover:translate-x-1 hover:text-emerald-400"
                                    >
                                        {name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold text-white">MY SERVICES</h4>

                            <div className="mt-6 flex flex-col gap-4">
                                {services.map((service) => (
                                    <a
                                        key={service.number}
                                        href="#services"
                                        className="w-fit text-sm text-gray-500 transition hover:translate-x-1 hover:text-emerald-400"
                                    >
                                        {service.title}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold text-white">LET'S CONNECT</h4>

                            <p className="mt-6 text-sm leading-7 text-gray-500">
                                Have an idea or opportunity? Let's discuss how we can
                                work together.
                            </p>

                            <a
                                href="#contact"
                                className="mt-6 inline-flex items-center gap-3 rounded-full bg-emerald-400 px-6 py-3 text-xs font-bold text-black transition hover:-translate-y-1 hover:bg-emerald-300"
                            >
                                START A PROJECT <Arrow />
                            </a>
                        </div>

                    </div>

                    <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center sm:flex-row sm:text-left">
                        <p className="text-xs text-gray-600">
                            © {new Date().getFullYear()} Jareer Ahmad Khan. All rights reserved.
                        </p>

                        <a
                            href="#home"
                            className="text-xs font-semibold text-gray-500 transition hover:text-emerald-400"
                        >
                            BACK TO TOP ↑
                        </a>
                    </div>

                </div>
            </footer>

        </main>
    );
}
