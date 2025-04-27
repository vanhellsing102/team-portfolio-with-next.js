
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
type OurData = {
    name: string;
    image: string;
    // skills: string;
    bio: string;
    socialLinks: {
        name: string;
        link: string;
        logo?: any;
    }[],
    education: string;
    id: number
}[]
type ProjectsData = {
    id: number;
    title: string;
    image: string;
    link: string;
}[]
export const ourData: OurData = [
    {   
        id: 1,
        name: "Md Murad",
        image: "/images/murad.jpg",
        bio: `(CSE)💻 || My dream is to become a MERN stack developer || alert('😈');`,
        socialLinks: [
            {
                name: "Github",
                link: "https://github.com/vanhellsing102",
                logo:FaGithub
            },
            {
                name: "Facebook",
                link: "https://www.facebook.com/muradvanhellsing",
                 logo: FaFacebook
            },
            {
                name: "Twitter",
                link: "https://x.com/MdMurad72660848",
                logo:FaSquareXTwitter
            },
            {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/md-murad-4a9a862b4/",
                logo:  FaLinkedin 
            }
        ],
        education:"Diploma in computer science and technology from Thakurgoan polytechnic institute."

    },
    {
        id:2,
        name: "Md Nifad Uzzaman",
        image: "/images/nifad.jpg",
        bio: "WebDeveloper | BookLover | PassionateTraveler | Resilient | SpirituallyGrounded",
        socialLinks: [
            {
                name: "Github",
                link: "https://github.com/nifad2005",
                logo: FaGithub
            },
            {
                name: "Facebook",
                link: "https://www.facebook.com/nifad2005",
                logo: FaFacebook
            },
            {
                name: "Twitter",
                link: "https://twitter.com/nifad2005",
                logo: FaSquareXTwitter
            },
            {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/nifad2005",
                logo: FaLinkedin
            }
        ],
        education:"Diploma in computer science and technology from Dinajpur polytechnic institute."

    }
]


type NavData = {
    id: number;
    title: string;
    link: string;
}[]
export const navData: NavData = [
    {
        id: 1,
        title: "Home",
        link: "#"
    },
    {
        id: 2,
        title: "Introduction",
        link: "#"
    },
    {
        id: 3,
        title: "Skills",
        link: "#skills"
    },
    {
        id: 4,
        title: "Projects",
        link: "#projects"
    },
    {
        id: 5,
        title: "About Us",
        link: "#about"
    },
    {
        id: 6,
        title: "Contact Us",
        link: "#contact"
    },
]


type OurSkills = {
    id: number;
    name: string;
    image: string;
}[]
export const ourSkills: OurSkills = [
    {
        id: 1,
        name: "html",
        image: "/images/skills/html-Photoroom.png"
    },
    {
        id: 2,
        name: "css",
        image: "/images/skills/css-Photoroom.png"
    },
    {
        id: 3,
        name: "tailwing",
        image: "/images/skills/tailwind-Photoroom.png"
    },
    {
        id: 4,
        name: "bootstrap",
        image: "/images/skills/bootstrap-Photoroom.png"
    },
    {
        id: 5,
        name: "javascript",
        image: "/images/skills/javascript-Photoroom.png"
    },
    {
        id: 6,
        name: "react js",
        image: "/images/skills/react-Photoroom.png"
    },
    {
        id: 7,
        name: "router",
        image: "/images/skills/react router-Photoroom.png"
    },
    {
        id: 8,
        name: "redux",
        image: "/images/skills/redux-Photoroom.png"
    },
    {
        id: 9,
        name: "node js",
        image: "/images/skills/node js-Photoroom.png"
    },
    {
        id: 10,
        name: "express js",
        image: "/images/skills/express js-Photoroom.png"
    },
    {
        id: 11,
        name: "mongodb",
        image: "/images/skills/mongodb-Photoroom.png"
    },
    {
        id: 12,
        name: "tailwing",
        image: "/images/skills/mongoose-Photoroom.png"
    },
    {
        id: 13,
        name: "firebase",
        image: "/images/skills/firebase-Photoroom.png"
    },
    {
        id: 14,
        name: "axios",
        image: "/images/skills/axios-Photoroom.png"
    },
    {
        id: 15,
        name: "figma",
        image: "/images/skills/figma-Photoroom.png"
    },
    {
        id: 16,
        name: "github",
        image: "/images/skills/github-Photoroom.png"
    },
    {
        id: 17,
        name: "git",
        image: "/images/skills/git-Photoroom.png"
    },
    {
        id: 18,
        name: "tanstack",
        image: "/images/skills/tanstack-Photoroom.png"
    },
    {
        id: 19,
        name: "zustand",
        image: "/images/skills/zustand-Photoroom.png"
    },
    {
        id: 20,
        name: "typescript",
        image: "/images/skills/typescript-Photoroom.png"
    },
    {
        id: 21,
        name: "next js",
        image: "/images/skills/next-Photoroom.png"
    }
]

export const projectsData:ProjectsData = [
    {
        id: 1,
        title: "QuraniQ-Ai agent",
        image: "/images/project-bg.jpg",
        link: "https://example.com/project1",
    },
    {
        id: 2,
        title: "Project 2",
        image: "/images/project-bg.jpg",
        link: "https://example.com/project2",
    },
    {
        id: 3,
        title: "Project 3",
        image: "/images/project-bg.jpg",
        link: "https://example.com/project3",
    }]