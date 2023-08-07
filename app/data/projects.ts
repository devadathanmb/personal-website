interface Project {
  id: number;
  name: string;
  description: string;
  tags: string[];
  githubLink: string;
  demoLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "RIT Attendance Bot",
    description:
      "A telegram bot to find attendance details from RITSoft easily.",
    tags: [
      "Telegraf.Js",
      "Node.Js",
      "Axios",
      "FASTAPI",
      "Python",
      "BeautifulSoup",
    ],
    githubLink: "https://github.com/devadathanmb/rit-attendance-bot",
    demoLink: "https://t.me/atttendancebot",
  },
  {
    id: 2,
    name: "Diet Planner Application",
    description:
      "A diet planner application to generate customized diet plans based on the user's body measurements and goals by using linear programming",
    tags: ["React.Js", "Python-PuLP", "Flask-RESTful", "Python"],
    githubLink: "https://github.com/devadathanmb/diet-planner-backend",
    demoLink: "https://dietplannerapp.online",
  },
  {
    id: 3,
    name: "Price Watcher",
    description:
      "A simple self hosted telegram bot to watch price drops of products in Flipkart",
    tags: ["Python", "pyTelegramBotAPI"],
    githubLink: "https://github.com/devadathanmb/price-watcher",
    demoLink: "https://github.com/devadathanmb/price-watcher",
  },
  {
    id: 4,
    name: "Wut?",
    description:
      "A CLI dictionary application to find meanings of words from the terminal built as a part of my CS50P final project.",
    tags: ["Python", "Python-Rich Library"],
    githubLink: "https://github.com/devadathanmb/price-watcher",
  },
  {
    id: 5,
    name: "Entevim",
    description:
      "My curated neovim configs which can be used as an IDE layer on top of neovim.",
    tags: ["Neovim", "Packer.nvim", "Lua"],
    githubLink: "https://github.com/devadathanmb/entevim",
  },
  {
    id: 6,
    name: "ArchStrap",
    description:
      "A ready to bootstrap arch linux installation script completely written in pure bash",
    tags: ["Bash", "Arch Linux"],
    githubLink: "https://github.com/devadathanmb/archstrap",
  },
];

export default projects;
