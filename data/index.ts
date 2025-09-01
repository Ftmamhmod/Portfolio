import { Github, Linkedin, User } from "lucide-react";

const data = {
  home: {
    name: "Fatma Mahmoud",
    description: "I Build  #React & #Next_js  Apps.",
    cvLink: "#contact",
  },
  sidebar: {
    links: [
      {
        name: "github",
        link: "https://github.com/Ftmamhmod",
        icon: Github,
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/ftmamhmod/",
        icon: Linkedin,
      },
      {
        name: "C.V",
        link: "https://drive.google.com/file/d/1-j7KJ_8toDqxvyZjFOIeK30ThMIsJlYW/view?usp=sharing",
        icon: User,
      },
    ],
  },

  projects: {
    projects: [
      {
        id: 1,
        title: "Halal Market Platform",
        description:
          "Worked on a e-commerce platform, as part of a Scrum team for 3 month, focusing on CRUDS and AUTH workflows. \n\n Technologies Used: React.js, Mui, Redux, TypeScript",
        image: "/projects-imgs/halal.png",
        previewLink: "http://41.33.54.162:8088/halal/",
      },
      {
        id: 3,
        title: "Tatwir platform",
        description:
          "A Saudi-based platform. The initiative fosters innovation, offers training programs, and provides resources for startups and SMEs to enhance their technological and business capabilities.  \n\n Technologies Used: MUI, React.js.",
        image: "/projects-imgs/Tatwir.png",
        previewLink: "https://tatwir-ksa.com/",
      },
      {
        id: 3,
        title: "Mrkoon Website",
        description:
          "Mrkoon is a leading digital marketplace dedicated to sustainable industrial waste management, connecting companies with surplus materials to scrap traders and recyclers. \n\n Technologies Used: React.js, Tailwind CSS.",
        image: "/projects-imgs/mrkoon.png",
        previewLink: "https://mrkoonapp.com/",
      },
      {
        id: 4,
        title: "Book Store",
        description:
          " a modern and user-friendly online bookstore designed for book lovers. Browse a vast collection of genres, from bestsellers to hidden gems, and enjoy a seamless shopping experience with intuitive navigation, secure checkout, and quick delivery options \n\n Technologies Used: React.js, MUI and Type Scripte",
        image: "/projects-imgs/Book store.png",
        previewLink:
          "https://book-store-n7jo97o50-ftmamhmods-projects.vercel.app/",
        githubLink: "https://github.com/Ftmamhmod/Book-store",
      },
      {
        id: 5,
        title: "Basket",
        description:
          " Basket is a modern, user-friendly e-commerce platform designed to provide a seamless shopping experience. Browse a curated selection of high-quality products, from electronics and fashion to home essentials, all in one place \n\n Technologies Used: React.js, Tailwind CSS and JavaScript",
        image: "/projects-imgs/Basket.png",
        previewLink: "https://basket-ihgw.vercel.app/",
        githubLink: "https://github.com/Ftmamhmod/Basket",
      },
    ],
  },
  technologies: {
    skills: [
      {
        id: 1,
        name: "html",
        src: "/skills/html.svg",
        link: "https://en.wikipedia.org/wiki/HTML",
      },
      {
        id: 2,
        name: "css",
        src: "/skills/css.svg",
        link: "https://en.wikipedia.org/wiki/CSS",
      },
      {
        id: 3,
        name: "javascript",
        src: "/skills/javascript.svg",
        link: "https://en.wikipedia.org/wiki/JavaScript",
      },
      {
        id: 4,
        name: "typescript",
        src: "/skills/typescript.svg",
        link: "https://en.wikipedia.org/wiki/TypeScript",
      },
      {
        id: 5,
        name: "react",
        src: "/skills/react.svg",
        link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      },
      {
        id: 6,
        name: "tailwind",
        src: "/skills/tailwind.svg",
        link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
      },
      {
        id: 7,
        name: "nextJS",
        src: "/skills/nextJS.svg",
        link: "https://en.wikipedia.org/wiki/Next.js",
      },
      {
        id: 9,
        name: "vitejs",
        src: "/skills/vitejs.svg",
        link: "https://en.wikipedia.org/wiki/Vite_(software)",
      },
      {
        id: 10,
        name: "git",
        src: "/skills/git.svg",
        link: "https://en.wikipedia.org/wiki/Git",
      },
    ],
  },
  contact: {
    email: "ftmamhmod2@gmail.com",
  },
};

export default data;
