import { Link } from 'react-router-dom';

interface NotFoundProps {
  title?: string;
  description?: string;
}

export default function NotFound({
  title = '404 - Page Not Found',
  description = 'We can’t seem to find the page you are looking for!',
}: NotFoundProps) {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-center p-6  dark:border-strokedark dark:bg-boxdark"
      style={{
        backgroundImage: "url('/assets/NotFound404_lightmode.svg')",
      }}
    >
      <h1 className="mb-8 font-bold text-gray-800  text-6xl dark:text-white/90 xl:text-title-2xl">
        {title}
      </h1>

      <p className="mt-10 mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg">
        {description}
      </p>

      <Link
        to="/"
        className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
      >
        Back to Admin Dashboard
      </Link>

      {/* Footer */}
      <p className="absolute text-sm text-center text-white -translate-x-1/2 bottom-6 left-1/2 dark:text-gray-400">
        &copy; {new Date().getFullYear()} - Coastella | Capstone Project
      </p>
    </div>
  );
}
