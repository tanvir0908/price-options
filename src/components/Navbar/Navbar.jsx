import { useState } from "react";
import Link from "../Link/Link";
// React Icons
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <div>
      <nav>
        <div
          className="md:hidden text-3xl"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <AiOutlineClose /> : <HiMenuAlt2 />}
        </div>
        <ul
          className={`md:flex duration-1000 rounded-xl p-5 ${
            open ? "top-30" : "-top-60"
          } absolute md:static text-black font-medium text-2xl bg-yellow-200`}
        >
          {routes.map((route) => (
            <Link key={route.id} route={route} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
