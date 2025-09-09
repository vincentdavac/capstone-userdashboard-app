import { Lock, User, Phone, Mail, MapPin } from 'lucide-react'; // or the correct icon set you are using
import { Link } from 'react-router-dom';

const MobileRegister: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50 px-4 dark:bg-boxdark">
        {/* Logo + tagline */}
        <div className="flex  flex-col items-center text-center p-6">
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
        <div className="flex items-center justify-center">
          <div className="rounded-sm  shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex flex-wrap items-center">
              <div className="w-full border-stroke dark:border-strokedark  xl:border-l-2">
                <div className="w-screen p-6 sm:p-12.5 xl:p-17.5">
                  <h2 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                    Register Your Account
                  </h2>

                  <form>
                    <div className="mb-3">
                      <label className="mb-2 block font-small text-black dark:text-white text-sm sm:text-small">
                        First Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Enter your first name"
                          className="w-full rounded-lg border border-stroke bg-transparent py-2 sm:py-3 md:py-2 px-2 sm:px-6 pr-10 text-sm sm:text-sm text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />

                        <User
                          className="absolute right-2 top-1/2 -translate-y-1/2 sm:right-4 sm:top-4 text-gray-400 dark:text-gray-500"
                          size={20} // adjust size as needed
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="mb-2 block font-small text-black dark:text-white text-sm sm:text-sm">
                        Last Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Enter your last name"
                          className="w-full rounded-lg border border-stroke bg-transparent py-2 sm:py-3 md:py-2 px-2 sm:px-6 pr-10 text-sm sm:text-ss text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                        <User
                          className="absolute right-2 top-1/2 -translate-y-1/2 sm:right-4 sm:top-4 text-gray-400 dark:text-gray-500"
                          size={20} // adjust size as needed
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="mb-2 block font-small text-black dark:text-white text-sm sm:text-small">
                        Contact Number
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          placeholder="Enter your contact number"
                          className="w-full rounded-lg border border-stroke bg-transparent py-2 sm:py-3 md:py-2 px-2 sm:px-6 pr-10 text-sm sm:text-small text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                        <Phone
                          className="absolute right-2 top-1/2 -translate-y-1/2 sm:right-4 sm:top-4 text-gray-400 dark:text-gray-500"
                          size={20} // adjust size as needed
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="mb-2 block font-small text-black dark:text-white text-sm sm:text-small">
                        Email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full rounded-lg border border-stroke bg-transparent py-2 sm:py-3 md:py-2 px-2 sm:px-6 pr-10 text-sm sm:text-small text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />

                        <Mail
                          className="absolute right-2 top-1/2 -translate-y-1/2 sm:right-4 sm:top-4 text-gray-400 dark:text-gray-500"
                          size={20} // adjust size as needed
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="mb-2 block font-small text-black dark:text-white text-sm sm:text-small">
                        Municipality
                      </label>
                      <div className="relative">
                        <input
                          type="tex"
                          placeholder="Enter your City"
                          className="w-full rounded-lg border border-stroke bg-transparent py-2 sm:py-3 md:py-2 px-2 sm:px-6 pr-10 text-sm sm:text-small text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                        <MapPin
                          className="absolute right-2 top-1/2 -translate-y-1/2 sm:right-4 sm:top-4 text-gray-400 dark:text-gray-500"
                          size={20} // adjust size as needed
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="mb-2 block font-small text-black dark:text-white text-sm sm:text-small">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          placeholder="Enter your password"
                          className="w-full rounded-lg border border-stroke bg-transparent py-2 sm:py-3 md:py-2 px-2 sm:px-6 pr-10 text-sm sm:text-small text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />

                        <Lock
                          className="absolute right-2 top-1/2 -translate-y-1/2 sm:right-4 sm:top-4 text-gray-400 dark:text-gray-500"
                          size={20} // adjust size as needed
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="mb-2 block font-small text-black dark:text-white text-sm sm:text-small">
                        Re-type Password
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          placeholder="Re-enter your password"
                          className="w-full rounded-lg border border-stroke bg-transparent py-2 sm:py-3 md:py-2 px-2 sm:px-6 pr-10 text-sm sm:text-small text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />

                        <Lock
                          className="absolute right-2 top-1/2 -translate-y-1/2 sm:right-4 sm:top-4 text-gray-400 dark:text-gray-500"
                          size={20} // adjust size as needed
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <input
                        type="submit"
                        value="Create account"
                        className="w-full cursor-pointer rounded-lg border border-primary bg-primary py-2 sm:py-3 md:py-2 text-sm sm:text-base text-white transition hover:bg-opacity-90"
                      />
                    </div>

                    <div className="mt-3 text-center space-y-2">
                      <p className="text-sm sm:text-small">
                        Already have an account?{' '}
                        <Link to="/mobile/login" className="text-primary">
                          Login
                        </Link>
                      </p>

                      <p className="text-sm sm:text-small">
                        Forgot your password?{' '}
                        <Link
                          to="/mobile/recover-account"
                          className="text-primary"
                        >
                          Recover your account
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

export default MobileRegister;
