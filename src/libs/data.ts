type OurData = {
    name: string;
    image: string;
    // skills: string;
    bio: string;
    // socialLinks: {
    //     name: string;
    //     link: string;
    // };
}[]

export const ourData: OurData = [
    {
        name: "Md Murad",
        image: "../../public/images/murad.jpg",
        bio: `(CSE)💻
        My dream is to become a MERN stack developer
        alert('😈');`
    },
    {
        name: "Md Nifad Uzzaman",
        image: "../../public/images/murad.jpg",
        bio: "WebDeveloper | BookLover | PassionateTraveler | Resilient | SpirituallyGrounded"
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