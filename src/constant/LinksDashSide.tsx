import { AiOutlineProfile } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlinePostAdd } from "react-icons/md";
import { RiCheckDoubleFill } from "react-icons/ri";

const LinkDashSide = [
   {
      id: 0,
      title: "داشبورد صفحه اصلی",
      link: "/dashboard",
      icon: <BiHomeAlt />,
      role: "USER",
   },
   {
      id: 1,
      title: "اگهی های من",
      link: "/dashboard/my-profiles",
      icon: <AiOutlineProfile />,
      role: "USER",
   },
   {
      id: 2,
      title: "ثبت آگهی",
      link: "/dashboard/add",
      icon: <MdOutlinePostAdd />,
      role: "USER",
   },
   {
      id: 3,
      title: "در صف پذیرش",
      link: "/admin",
      icon: <RiCheckDoubleFill />,
      role: "ADMIN",
   },
];

export { LinkDashSide };
