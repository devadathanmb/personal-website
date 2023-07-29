import { SiNeovim } from "react-icons/si";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { AiFillHeart } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bg-black w-full flex text-gray-400 py-4 px-4 justify-center">
      <div className="flex items-center">
        <span>Made with&nbsp;</span>
        <AiFillHeart size={20} /> <span>&nbsp;using&nbsp;</span> <TbBrandNextjs size={20} />{" "}
        <span>&nbsp;and&nbsp;</span>
        <TbBrandTailwind size={20} /><span>&nbsp;on&nbsp;</span> <SiNeovim size={20} />
      </div>
    </div>
  );
}
