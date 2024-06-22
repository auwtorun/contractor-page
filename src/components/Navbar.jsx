import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import ContactButton from "./button/ContactButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const companyName = "Construction";
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed z-50 w-full px-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {companyName}
            </span>
          </Link>

          <div className={`flex md:order-2 md:hidden`}>
            <ContactButton />
            <button
              type="button"
              className="inline-flex items-center pl-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              open ? "block" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-full flex flex-col  md:mx-8  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white font-bold">
              {navItems.map((item) => (
                <li key={item.name}> 
                  <Link
                    to={item.href}
                    className="block py-2 md:pl-3 pr-4 text-primary rounded  md:p-0 "
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden md:block">
              <ContactButton />
            </div>
          </div>
        </div>
      </nav>
      <div className="h-12 md:h-16"></div>
    </>
  );
};

export default Navbar;
