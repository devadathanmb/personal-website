import { BsGithub, BsLinkedin, BsDiscord, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiMatrix } from "react-icons/si";

export default function Contact() {
  return (
    <div className="w-full pt-20 bg-gradient-to-b from-black to-gray-800 p-4">
      <div className="p-5">
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline border-b-4 border-yellow-200">
            Connect with me
          </h1>
          <p className="py-5">Find my social links below</p>
          <br />
          <ul className="leading-8">
            <li className="flex items-center">
              Email &nbsp;
              <MdEmail size={20} />
              &nbsp; : devadathanmb@gmail.com
            </li>
            <li className="flex items-center">
              Twitter (aka X) &nbsp;
              <BsTwitter size={20} />
              &nbsp; :{" "}
              <a href="https://twitter.com/devcodess">@devcodess</a>
            </li>
            <li className="flex items-center">
              Discord &nbsp;
              <BsDiscord size={20} />
              &nbsp; :{" "}
              <a href="https://discord.com/users/dev_on_discrd">
                @dev_on_discrd
              </a>
            </li>
            <li className="flex items-center">
              Github &nbsp;
              <BsGithub size={20} />
              &nbsp; :{" "}
              <a href="https://github.com/devadathanmb">@devadathanmb</a>
            </li>
            <li className="flex items-center">
              LinkedIn &nbsp;
              <BsLinkedin size={20} />
              &nbsp; :{" "}
              <a href="https://www.linkedin.com/in/devadathanmb/">
                @devadathanmb
              </a>
            </li>
            {/* <li className="flex items-center"> */}
            {/*   Matrix &nbsp; */}
            {/*   <SiMatrix size={20} /> */}
            {/*   &nbsp; : @devadathanmb:matrix.org */}
            {/* </li> */}
          </ul>
          <br />
        </div>
      </div>

      <div className="flex flex-col p-5 justify-center">
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline border-b-4 border-yellow-200">
            Contact me
          </h1>
          <p className="py-5">Submit the form to get in touch with me</p>
        </div>
        <div className="flex justify-center">
          <form action="" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <input
              type="text"
              name="name"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              id=""
              rows={10}
              placeholder="Enter your message"
              className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-fit mx-auto px-6 py-3 my-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
