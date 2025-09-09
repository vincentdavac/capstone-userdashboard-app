import React, { useState } from 'react';
import MobileSignInModal from '../../pages/Authentication/ModalLogin';
import MobileSignUpModal from '../../pages/Authentication/ModalRegister';
import ModalRecoverAccount from '../../pages/Authentication/ModalRecoverAccount';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showRecoverModal, setShowRecoverModal] = useState(false);

  return (
    <header className={`flex w-full items-center bg-white dark:bg-dark`}>
      <div className="container mx-auto">
        <div className="relative  flex items-center justify-between">
          <div className="flex-shrink-0  max-w-full px-4">
            <a href="/homepage" className="block w-full py-5">
              <img
                src={`${import.meta.env.BASE_URL}/logo/Logo.png`}
                alt="logo"
                className="dark:hidden w-40 h-auto"
              />
              <img
                src="https://cdn.tailgrids.com/assets/images/logo/logo-white.svg"
                alt="logo"
                className="hidden dark:block"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && 'navbarTogglerActive'
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary dark:bg-white"></span>
              </button>

              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full z-50 w-full max-w-[250px] rounded-lg bg-white ring-primary px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && 'hidden'
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="#homepage-slider">Home</ListItem>
                  <ListItem NavLink="#homepage-about">About</ListItem>
                  <ListItem NavLink="#homepage-prototype">Prototype</ListItem>
                  <ListItem NavLink="#homepage-team">Team</ListItem>
                  <ListItem NavLink="#homepage-faqs">Faqs</ListItem>
                  <ListItem NavLink="#homepage-feedback">Feedback</ListItem>
                  <li className="lg:hidden">
                    <button
                      onClick={() => setShowLoginModal(true)}
                      className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white"
                    >
                      Login
                    </button>

                    <button
                      onClick={() => setShowRegisterModal(true)}
                      className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white"
                    >
                      Register
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <button
                onClick={() => setShowLoginModal(true)}
                className="px-6 py-2 text-base font-medium text-dark hover:text-primary dark:text-white"
              >
                Login
              </button>

              <button
                onClick={() => setShowRegisterModal(true)}
                className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
              >
                Register
              </button>
            </div>

            {/* Modal Button */}
            <MobileSignInModal
              show={showLoginModal}
              onClose={() => setShowLoginModal(false)}
              onOpenRegister={() => {
                setShowLoginModal(false);
                setShowRegisterModal(true);
              }}
              onOpenRecover={() => {
                setShowLoginModal(false);
                setShowRecoverModal(true);
              }}
            />

            {/* Modal Button*/}
            <MobileSignUpModal
              show={showRegisterModal}
              onClose={() => setShowRegisterModal(false)}
              onOpenLogin={() => {
                setShowRegisterModal(false);
                setShowLoginModal(true);
              }}
              onOpenRecover={() => {
                setShowRegisterModal(false);
                setShowRecoverModal(true);
              }}
            />

            {/* Recover Modal */}
            <ModalRecoverAccount
              show={showRecoverModal}
              onClose={() => setShowRecoverModal(false)}
              onOpenLogin={() => {
                setShowRecoverModal(false);
                setShowLoginModal(true);
              }}
              onOpenRegister={() => {
                setShowRecoverModal(false);
                setShowRegisterModal(true);
              }}
            />
          </div>
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
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
