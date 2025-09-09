import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileRecoverAccount: React.FC = ({}) => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50 px-4 dark:bg-boxdark">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center text-center p-6">
          <img
            src="/logo/Logo_light_mode.svg"
            alt="Logo"
            className="h-12 mb-2"
          />
          <p className="text-sm text-gray-700 max-w-md dark:text-white">
            Stay Informed, Stay Safe, Stay Ahead
          </p>
        </div>

        {/* Main content here */}
        <div className=" flex items-center justify-center">
          <div className="rounded-sm   dark:border-strokedark dark:bg-boxdark">
            <div className="flex flex-wrap items-center">
              <div className="w-full  dark:border-strokedark  xl:border-l-2">
                <div className="w-screen p-6 sm:p-12.5 xl:p-17.5">
                  {/* <span className="mb-1.5 block font-medium">
                  Stay Informed, Stay Safe, Stay Ahead
                </span> */}
                  <h2 className="mb-9 text-xl font-bold text-black dark:text-white sm:text-2xl">
                    Reset Password
                  </h2>

                  <form>
                    <div className="mb-4">
                      <label className="mb-2 block font-small text-black dark:text-white text-sm sm:text-small">
                        Email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full rounded-lg border border-stroke bg-transparent py-2 sm:py-3 md:py-2 px-2 sm:px-6 pr-10 text-sm sm:text-sm text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />

                        <Mail
                          className="absolute right-2 top-1/2 -translate-y-1/2 sm:right-4 sm:top-4 text-gray-400 dark:text-gray-500"
                          size={20} // adjust size as needed
                        />
                      </div>
                    </div>

                    <div className="mb-5">
                      <input
                        type="submit"
                        value="Reset Password"
                        className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-2 text-white transition hover:bg-opacity-90"
                      />
                    </div>

                    <div className="mt-6 text-center">
                      <p className="text-sm sm:text-small">
                        Don’t have any account?
                        <Link to="/mobile/register" className="text-primary">
                          Register
                        </Link>
                      </p>

                      <p className="text-sm sm:text-small">
                        Already have an account?{' '}
                        <Link to="/mobile/login" className="text-primary">
                          Login
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileRecoverAccount;
