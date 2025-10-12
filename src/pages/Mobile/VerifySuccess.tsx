import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const VerifySuccess: React.FC = () => {
  return (
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

      {/* Success content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="rounded-sm shadow-default p-8 text-center dark:border-strokedark dark:bg-boxdark">
          <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
          <h2 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-2xl">
            Your account has been verified!
          </h2>
          <p className="text-sm text-gray-600 mb-6 dark:text-gray-300">
            You can now log in and start using the app.
          </p>

          <Link
            to="/mobile/login"
            className="inline-block w-full cursor-pointer rounded-lg border border-primary bg-primary py-2 text-sm sm:text-base text-white transition hover:bg-opacity-90"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifySuccess;
