export const portfolioData = {
    sectionTitle: {
        title: "My Portfolio",
        subtitle: "Explore my works, certifications, and the technologies I use — all in one place."
    },

    tabs: {
        projects: [
            {
                id: 1,
                img: "/assets/project.png",
                title: "3D Landing Page Fizzi",
                subtitle: "Digital showcase of how animation, and interactivity.",
                desc: "Fizzi Soda is an immersive and visually captivating 3D landing page built with modern web technologies. Crafted for both commercial appeal and creative exploration, it showcases smooth, scroll-based animations and engaging interactions that make browsing feel like a visual experience.",
                demo: "https://fizzi-gutsy-xi.vercel.app/",
                tags: ["React+TypeScript", "Prismic", "Tailwind CSS", "Three.js", "Drei", "GSAP", "Zustand"]
            },
            {
                id: 2,
                img: "/assets/project2.png",
                title: "Interactive 3D Landing Page",
                subtitle: "A 3D landing using GSAP and other framework",
                desc: "Is an immersive and visually captivating 3D landing page built with modern web technologies. Crafted for both commercial appeal and creative exploration, it showcases smooth, scroll-based animations and engaging interactions that make browsing feel like a visual experience.",
                demo: "https://spylt-gsap-ten.vercel.app/",
                tags: ["React+Next.js", "Tailwind CSS", "GSAP", "Zustand", "React Three Fiber"]
            },
            {
                id: 3,
                img: "/assets/project3.png",
                title: "Personal Portfolio Website",
                subtitle: "Your work deserves a beautiful showcase.",
                desc: "A sleek and responsive personal portfolio built with Vite and Tailwind CSS. This site features categorized project sections, certificates, and a dynamic tech stack. Optimized for both desktop and mobile experiences, it reflects professional branding with clean code.",
                demo: "#",
                tags: ["Vite", "React", "Tailwind CSS", "JavaScript", "Git", "Node"]
            }
        ],

        certificates: [
            {
                id: 1,
                img: "/assets/cert.jpg"
            },
            {
                id: 2,
                img: "/assets/cert2.jpg",
            },
            {
                id: 3,
                img: "/assets/cert3.jpg",
            }
        ],

        techStacks: [
            {
                id: 1,
                icon: "bx bxl-react",
                label: "React",
                color: "#61DAFB"
            },
            {
                id: 2,
                icon: "bx bxl-tailwind-css",
                label: "Tailwind CSS",
                color: "#38BDF8"
            },
            {
                id: 3,
                icon: "bx bxl-nodejs",
                label: "Node.js",
                color: "#3C873A"
            },
            {
                id: 4,
                icon: "bx bxl-javascript",
                label: "JavaScript",
                color: "#F7DF1E"
            },
            {
                id: 5,
                icon: "bx bxl-typescript",
                label: "TypeScript",
                color: "#3178C6"
            },
            {
                id: 6,
                icon: "bx bxl-git",
                label: "Git",
                color: "#F05032"
            }
        ]
    }
};
