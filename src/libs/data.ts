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
    }[]
}[]

export const ourData: OurData = [
    {
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
        ]

    },
    {
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
        ]
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
        link: "#introduction"
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