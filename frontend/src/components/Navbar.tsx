import React from "react";
import { NavLink } from "react-router-dom";

const Links = [
  {
    id: 0,
    name: "Home",
    src: "/",
  },
  {
    id: 1,
    name: "Resources",
    src: "physics/resources",
  },
  {
    id: 2,
    name: "Blog",
    src: "/blog",
  },
  {
    id: 3,
    name: "Contact",
    src: "/contact",
  },
  {
    id: 4,
    name: "About",
    src: "about",
  },
];

type LinkType = (typeof Links)[0];

const Navbar = () => {
  const linkData: React.JSX.Element = (
    <ul id="Nav-link" className="flex gap-6 ">
      {Links.map((link: LinkType) => (
        <li key={link.id}>
          <NavLink
            className={`text-sm 2xl:text-base ease-in font-semibold duration-500 rounded-3xl px-3 py-2`}
            to={link.src}
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="w-full z-50 fixed top-0 left-0 py-6 px-10  bg-white">
      <div className="flex justify-between items-center w-full">
        {/* logo */}
        <h2 className="text-xl font-medium ">Physics | Tech </h2>

        <div className=" bg-[#D9D9D933] py-3 px-5 rounded-3xl">{linkData}</div>

        <div>
          <NavLink
            to={"/learn-a-skill"}
            className="bg-customGreen rounded-[26px] border border-customGreen hover:bg-transparent px-4 py-2"
          >
            Learn a Skill
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
