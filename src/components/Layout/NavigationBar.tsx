import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`flex w-full items-center bg-white dark:bg-dark`}>
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between">
          <div className="flex-shrink-0 px-4">
            <a href="/" className="block w-full py-5">
              <img
                src={`logo/lightmode.svg`}
                alt="logo"
                className="dark:hidden w-40 h-auto"
              />
              <img
                src={`/logo/lightmode.svg`}
                alt="logo"
                className="hidden dark:block w-40 h-auto"
              />
            </a>
          </div>

          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            <nav className="flex items-center">
              <ul className="flex space-x-12">
                <ListItem NavLink="#homepage-slider">Home</ListItem>
                <ListItem NavLink="#homepage-about">About</ListItem>
                <ListItem NavLink="#homepage-prototype">Prototype</ListItem>
                <ListItem NavLink="#homepage-team">Team</ListItem>
                <ListItem NavLink="#homepage-faqs">FAQs</ListItem>
                <ListItem NavLink="#homepage-feedback">Feedback</ListItem>
              </ul>
            </nav>
          </div>

          <div className="hidden lg:block flex-shrink-0 w-40 px-4"></div>

          {/* <div className="flex lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              id="navbarToggler"
              className={`${
                open && 'navbarTogglerActive'
              } rounded-lg px-3 py-[6px] ring-primary focus:ring-2`}
            >
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary dark:bg-white"></span>
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary dark:bg-white"></span>
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary dark:bg-white"></span>
            </button>
          </div> */}

          <nav
            id="navbarCollapse"
            className={`absolute top-full left-0 right-0 z-50 w-full bg-white px-6 py-5 shadow dark:bg-dark-2 lg:hidden ${
              !open && 'hidden'
            }`}
          >
            <ul className="block">
              <ListItem NavLink="#homepage-slider">Home</ListItem>
              <ListItem NavLink="#homepage-about">About</ListItem>
              <ListItem NavLink="#homepage-prototype">Prototype</ListItem>
              <ListItem NavLink="#homepage-team">Team</ListItem>
              <ListItem NavLink="#homepage-faqs">FAQs</ListItem>
              <ListItem NavLink="#homepage-feedback">Feedback</ListItem>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

interface ListItemProps {
  children: React.ReactNode;
  NavLink: string;
}

const ListItem: React.FC<ListItemProps> = ({ children, NavLink }) => {
  return (
    <li>
      <a
        href={NavLink}
        className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:py-5"
      >
        {children}
      </a>
    </li>
  );
};
