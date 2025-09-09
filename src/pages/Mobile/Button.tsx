import { Link } from 'react-router-dom';
import {
  Home,
  AlertTriangle,
  MessageSquare,
  User,
  CloudMoon,
} from 'lucide-react';

export default function MobileButton() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-around items-center py-2">
        <Link
          to="/mobile/forecast"
          className="flex flex-col items-center text-gray-600 hover:text-blue-600"
        >
          <CloudMoon className="h-6 w-6" />
          <span className="text-xs">Forecast</span>
        </Link>

        <Link
          to="/mobile/chat-support"
          className="flex flex-col items-center text-gray-600 hover:text-blue-600"
        >
          <MessageSquare className="h-6 w-6" />
          <span className="text-xs">Chat</span>
        </Link>

        <Link
          to="/mobile/home"
          className="absolute -top-6 flex flex-col items-center"
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg">
            <Home className="h-7 w-7" />
          </div>
          <span className="text-xs text-blue-600 mt-1 dark:text-gray-600">
            Home
          </span>
        </Link>
        <div className="w-14" />

        <Link
          to="/mobile/alert"
          className="flex flex-col items-center text-gray-600 hover:text-blue-600"
        >
          <AlertTriangle className="h-6 w-6" />
          <span className="text-xs">Alert</span>
        </Link>

        <Link
          to="/mobile/profile"
          className="flex flex-col items-center text-gray-600 hover:text-blue-600"
        >
          <User className="h-6 w-6" />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </nav>
  );
}
