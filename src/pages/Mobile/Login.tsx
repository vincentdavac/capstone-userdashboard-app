import { Mail, Lock } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../api/axios"; 
import { useAlert } from "../UiElements/AlertContext"; 

const MobileLogin: React.FC = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 NEW STATES
  const [lockoutTime, setLockoutTime] = useState<number>(0); // countdown in seconds
  const [isLocked, setIsLocked] = useState(false);

  // 🔹 Handle countdown effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLocked && lockoutTime > 0) {
      timer = setInterval(() => {
        setLockoutTime((prev) => prev - 1);
      }, 1000);
    } else if (isLocked && lockoutTime === 0) {
      setIsLocked(false); // unlock
    }
    return () => clearInterval(timer);
  }, [isLocked, lockoutTime]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLocked) return; // ⛔ Prevent login while locked
    setLoading(true);

    if (!email || !password) {
      showAlert("error", "Missing Fields", "Email and password are required.");
      setLoading(false);
      return;
    }

    try {
      const res = await api.post("/login", { email, password });
      localStorage.setItem("token", res.data.token);

      showAlert("success", "Login Successful", "Welcome!");
      navigate("/mobile/forecast");
    } catch (err: any) {
      const status = err.response?.status;
      const errorMessage = err.response?.data?.message || "Login failed.";

      if (status === 429) {
        // 🚨 Too many attempts
        const retryAfter = err.response?.data?.retry_after || 60;
        setLockoutTime(retryAfter);
        setIsLocked(true);

        showAlert(
          "error",
          "Too Many Attempts",
          `Login disabled. Try again in ${retryAfter} seconds.`
        );
      } else if (typeof errorMessage === "object") {
        Object.values(errorMessage as string[]).forEach((msg) => {
          showAlert("error", "Login Error", msg);
        });
      } else {
        showAlert("error", "Login Error", errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 px-4 dark:bg-boxdark">
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

      <div className="flex-1 items-center justify-center">
        <div className="rounded-sm dark:border-strokedark dark:bg-boxdark">
          <div className="flex flex-wrap items-center">
            <div className="w-screen p-6 sm:p-12.5 xl:p-17.5">
              <h2 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                Login to Your Account
              </h2>

              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label className="mb-2 block text-sm text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-2 px-2 sm:px-6 pr-10 text-sm text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                    />
                    <Mail
                      className="absolute right-2 top-1/2 -translate-y-1/2 sm:right-4 text-gray-400 dark:text-gray-500"
                      size={20}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2 block text-sm text-black dark:text-white">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="6+ Characters, 1 Capital letter"
                      className="w-full rounded-lg border border-stroke bg-transparent py-2 px-2 sm:px-6 pr-10 text-sm text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                    />
                    <Lock
                      className="absolute right-2 top-1/2 -translate-y-1/2 sm:right-4 text-gray-400 dark:text-gray-500"
                      size={20}
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <button
                    type="submit"
                    disabled={loading || isLocked}
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-2 text-white transition hover:bg-opacity-90 disabled:opacity-50"
                  >
                    {loading
                      ? "Logging in..."
                      : isLocked
                      ? `Try again in ${lockoutTime}s`
                      : "Login"}
                  </button>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm">
                    Don’t have any account?{" "}
                    <Link to="/mobile/register" className="text-primary">
                      Register
                    </Link>
                  </p>
                  <p className="text-sm">
                    Forgot your password?{" "}
                    <Link to="/mobile/recover-account" className="text-primary">
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
  );
};

export default MobileLogin;
