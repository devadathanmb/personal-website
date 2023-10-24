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
    githubLink: "https://github.com/devadathanmb/rit-attendance-bot.git",
    demoLink: "https://t.me/atttendancebot",
  },
  {
    id: 2,
    name: "Diet Planner Application",
    description:
      "A diet planner application to generate customized diet plans based on the user's body measurements and goals by using linear programming",
    tags: ["React.Js", "Python-PuLP", "Flask-RESTful", "Python"],
    githubLink: "https://github.com/devadathanmb/diet-planner-backend.git",
    demoLink: "https://dietplannerapp.online",
  },
  {
    id: 3,
    name: "Price Watcher",
    description:
      "A simple self hosted telegram bot to watch price drops of products in Flipkart",
    tags: ["Python", "pyTelegramBotAPI"],
    githubLink: "https://github.com/devadathanmb/price-watcher.git",
    demoLink: "https://github.com/devadathanmb/price-watcher.git",
  },
  {
    id: 4,
    name: "Wut?",
    description:
      "A CLI dictionary application to find meanings of words from the terminal built as a part of my CS50P final project.",
    tags: ["Python", "Python-Rich Library"],
    githubLink: "https://github.com/devadathanmb/wut.git",
  },
  {
    id: 5,
    name: "TLDR Bot",
    description:
      "A Telegram bot designed to condense lengthy chat messages because life's too short for verbosity",
    tags: ["Telegraf.Js", "Node.Js", "Huggingface", "Typescript"],
    githubLink: "https://github.com/devadathanmb/tldr-telegram-bot.git",
  },
  {
    id: 6,
    name: "KTU Results Bot",
    description: "A telegram bot to find KTU results easily",
    tags: ["Telegraf.Js", "Node.Js", "Axios", "Typescript"],
    githubLink: "https://github.com/devadathanmb/ktu-results-bot.git",
  },
  {
    id: 7,
    name: "Entevim",
    description:
      "My curated neovim configs which can be used as an IDE layer on top of neovim.",
    tags: ["Neovim", "Lazy.nvim", "Lua"],
    githubLink: "https://github.com/devadathanmb/entevim.git",
  },
  {
    id: 8,
    name: "ArchStrap",
    description:
      "A ready to bootstrap arch linux installation script completely written in pure bash",
    tags: ["Bash", "Arch Linux"],
    githubLink: "https://github.com/devadathanmb/archstrap.git",
  },
  {
    id: 9,
    name: "RIT ETLAB API",
    description: "An unoffical API to fetch data from RIT ETLAB website easily",
    tags: ["Flask", "Python", "BeautifulSoup"],
    githubLink: "git https://github.com/devadathanmb/rit-etlab-wrapperapi.git",
  },
];

export default projects;
