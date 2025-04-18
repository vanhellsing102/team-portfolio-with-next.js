import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

type OurData = {
    name: string;
    image: string;
    // skills: string;
    bio: string;
    socialLinks: {
        name: string;
        link: string;
        logo: any;
    }[]
}[]

export const ourData: OurData = [
    {
        name: "Md Murad",
        image: "/images/murad.jpg",
        bio: `(CSE)💻
        My dream is to become a MERN stack developer
        alert('😈');`,
        socialLinks: [{
            name: "Github",
            link: "https://github.com/nifad2005",
            logo: FaGithub
        }, {
            name: "LinkedIn",    
            link: "https://www.linkedin.com/in/nifad2005/",
            logo: FaLinkedin
        },{
            name: "Twitter",
            link: "https://twitter.com/nifad2005",
            logo: FaSquareXTwitter 
        },
        {
            name: "Facebook",
            link: "https://www.facebook.com/nifad2005",
            logo: FaFacebook
        }
    ],
    },   
    {
        name: "Md Nifad Uzzaman",
        image: "/images/nifad.jpg",
        bio: "WebDeveloper | BookLover | PassionateTraveler | Resilient | SpirituallyGrounded",
        socialLinks: [{
            name: "Github",
            link: "https://github.com/nifad2005",
            logo: FaGithub
        }, {
            name: "LinkedIn",    
            link: "https://www.linkedin.com/in/nifad2005/",
            logo: FaLinkedin
        },{
            name: "Twitter",
            link: "https://twitter.com/nifad2005",
            logo: FaSquareXTwitter
        },
        {
            name: "Facebook",
            link: "https://www.facebook.com/nifad2005",
            logo: FaFacebook
        }
        
    ]
    }
]