import { GrArchlinux } from "react-icons/gr";
import { SiNeovim } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { BiSolidDroplet } from "react-icons/bi";
import { RiTerminalBoxLine } from "react-icons/ri";
import { VscTerminalTmux } from "react-icons/vsc";

export default function About() {
  return (
    <div className="thing flex pt-20 flex-col justify-center bg-gradient-to-t from-gray-950 via-gray-900 to-black">
      <div className="max-w-screen-lg p-5 mx-auto">
        <div>
          <div className="pb-8">
            <h1 className="leading-loose text-4xl font-bold inline border-b-4 border-blue-300">
              Who am I?
            </h1>
          </div>
          <p>Well, good question!</p>
          <br />
          <p>
            I&apos;m Devadathan M B. A passionate software developer and Linux a
            enthusiast. Currently pursuing my B.Tech degree at RIT Kottayam,
            Kerala, India.
          </p>
          <br />
          <p>
            I&apos;m an ardent supporter of the FOSS and free software movement,
            and I have a deep affinity for Linux. I enjoy working with the
            command-line interface (CLI) and find joy in using CLI tools.
          </p>
          <br />
          <p>
            Backend development and cloud technologies also pique my interest.
            I&apos;m always eager to learn something new every day and continue
            to expand my knowledge in the ever-evolving tech world.
          </p>
        </div>

        <br />
        <div>
          <div className="pb-8">
            <h1 className="leading-loose text-4xl font-bold inline border-b-4 border-blue-300">
              Tools I use
            </h1>
          </div>
          <div>
            <p>
              As obvious it should be, I spend most of my time staring infront
              of my terminal screen. Anyways, here is a quick overview of the
              stuff I use in my daily workflow.
            </p>
            <br />
            <ul className="leading-8">
              <li className="flex items-center">
                OS: &nbsp;
                <GrArchlinux size={20} />
                &nbsp;Arch Linux
              </li>
              <li className="flex items-center">
                IDE : &nbsp;
                <SiNeovim size={20} />
                &nbsp;Neovim
              </li>
              <li className="flex items-center">
                Desktop environment : &nbsp;
                <BiSolidDroplet size={20} />
                &nbsp;Hyprland
              </li>
              <li className="flex items-center">
                Terminal multiplexer : &nbsp;
                <VscTerminalTmux size={20} />
                &nbsp;Tmux
              </li>
              <li className="flex items-center">
                Terminal emulator : &nbsp;
                <RiTerminalBoxLine size={20} />
                &nbsp;Foot terminal
              </li>
            </ul>
            <br />
            <p>
              This isn&apos;t the complete list of course. Checkout my{" "}
              <a
                className="underline"
                href="https://github.com/devadathanmb/dotfiles.git"
              >
                dotfiles repo{" "}
              </a>
              to find what I daily drive.
            </p>
          </div>
        </div>
        <br />
        <div className="pb-8">
          <h1 className="leading-loose text-4xl font-bold inline border-b-4 border-blue-300">
            What are my hobbies?
          </h1>
          <div className="mt-9">
            <p>
              Well, most of the time I spend writing code, exploring software,
              trying out different tools, writing scripts and yeah{" "}
              <a
                className="underline"
                href="https://www.reddit.com/r/unixporn/comments/3iy3wd/stupid_question_what_is_ricing/"
              >
                Ricing
              </a>{" "}
              my desktop.
            </p>
            <br />
            <p>
              Otherwise I&apos;m probably playing chess (Yes <b>chess</b>.{" "}
              <a
                className="underline"
                href="https://www.chess.com/member/publicstaticvoid_sane"
              >
                Come on let&apos;s play a game!
              </a>
              ) or watching or reading some interesting content.
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
