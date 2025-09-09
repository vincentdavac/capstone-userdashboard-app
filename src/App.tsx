import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import Profile from './pages/Profile';
import DefaultLayout from './layout/DefaultLayout';
import Home from './pages/General/Home';
import Chat from './pages/General/Chat';
import Homepage from './pages/Homepage';
import PasswordResetLayout from './pages/Authentication/PasswordResetLayout';
import NotFound from './pages/OtherPage/NotFound';
import MobileDefaultLayout from './layout/MobileDefaultLayout';
import MobileLogin from './pages/Mobile/Login';
import MobileRegister from './pages/Mobile/Register';
import MobileRecoverAccount from './pages/Mobile/RecoverAccount';
import MobileWeatherForecastLayout from './pages/Mobile/WeatherForecast/WeatherForecastLayout';
import SampleWeatherForecast from './pages/Mobile/WeatherForecast/SampleWeatherForecast';
import ChatSupport from './pages/Mobile/ChatSupport/ChatSupport';
import MobileHome from './pages/Mobile/Home/MobileHome';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  // Define routes that should trigger loader
  const showLoaderRoutes = [
    '/',
    '/homepage',
    '/userdashboard',
    '/chat',
    '/chart',
    '/calendar',
    '/profile',
    '/mobile/login',
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (showLoaderRoutes.includes(pathname)) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [pathname]);

  if (loading && showLoaderRoutes.includes(pathname)) {
    return (
      <Loader
        title="Coastella"
        description="Stay Informed, Stay Safe, Stay Ahead"
      />
    );
  }

  return (
    <Routes>
      {/* Public routes (no DefaultLayout) */}
      <Route
        index
        path="/"
        element={
          <>
            <Homepage /> <PageTitle title="Coastella | Homepage" />
          </>
        }
      />
      <Route
        path="/homepage"
        element={
          <>
            <Homepage />
            <PageTitle title="Coastella | Homepage" />
          </>
        }
      />
      <Route
        path="/password-reset"
        element={
          <>
            <PasswordResetLayout />
            <PageTitle title="Coastella | Reset Password" />
          </>
        }
      />

      {/* Dashboard routes (inside DefaultLayout) */}
      <Route element={<DefaultLayout />}>
        <Route path="/userdashboard" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* Mobile routes (inside MobileDefaultLayout) */}
      <Route element={<MobileDefaultLayout />}>
        <Route
          path="/mobile/forecast"
          element={<MobileWeatherForecastLayout />}
        />
        <Route path="/mobile/chat-support" element={<ChatSupport />} />
        <Route path="/mobile/home" element={<MobileHome />} />

        <Route
          path="/mobile/sample-forecast"
          element={<SampleWeatherForecast />}
        />
      </Route>

      <Route path="/mobile/login" element={<MobileLogin />} />
      <Route path="/mobile/register" element={<MobileRegister />} />
      <Route
        path="/mobile/recover-account"
        element={<MobileRecoverAccount />}
      />

      {/* Fallback Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
