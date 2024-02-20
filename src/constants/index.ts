import {
    css,
    git,
    github,
    html,
    javascript,
    motion,
    mui,
    react,
    redux,
    sass,
    vite,
    movieselector,
    recipebook,
    socialnetwork,
    ecommerce,
    tailwindcss,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: vite,
        name: "Vite",
        type: "Frontend",
    }
]

export const projects = [
    {
        iconUrl: socialnetwork,
        theme: 'btn-back-red',
        name: 'MeetFriends',
        description: 'Developed a React prototype for a social network, which includes user authentication, CRUD operations, chat simulation and profile customization',
    },
    {
        iconUrl: movieselector,
        theme: 'btn-back-blue',
        name: 'My Movie Choice',
        description: 'Built a React app aiding movie selection. Enables access to user ratings, descriptions, cast, trailers, and similar content suggestions for movies or series',
        link: 'https://github.com/thatsfov1/my-movie-choice',
    },
    {
        iconUrl: ecommerce,
        theme: 'btn-back-pink',
        name: 'E-commerce shop "Chic Stock" ',
        description: 'Created a React-based laptop shop featuring modern design, animations, and seamless Stripe integration for transactions.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: recipebook,
        theme: 'btn-back-black',
        name: 'Food Recipes',
        description: 'Developed a web application for finding recipes. More than thousands of recipes that are listed on basis of various categories',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    }
]

export const languages = [
    {
        title:"English",
        level: 70
    },
    {
        title:"Polish",
        level: 75
    },
    {
        title:"Ukrainian",
        level:100
    },
    {
        title:"Russian",
        level:100
    }
]