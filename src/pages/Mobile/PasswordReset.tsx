import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Lock } from "lucide-react";
import { useAlert } from "../UiElements/AlertContext";
import axios from "axios";

export default function MobilePasswordReset() {
  const navigate = useNavigate();
  const location = useLocation();
  const { showAlert } = useAlert();

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  // Extract token & email from query string
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const email = queryParams.get("email");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate input
    if (!password || !passwordConfirm) {
      showAlert(
        "error",
        "Password Reset Failed",
        "Please fill in both password fields."
      );
      return;
    }

    if (password !== passwordConfirm) {
      showAlert(
        "error",
        "Password Reset Failed",
        "Passwords do not match."
      );
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/reset-password`,
        {
          email,
          token,
          password,
          password_confirmation: passwordConfirm,
        },
        { withCredentials: true }
      );

      showAlert(
        "success",
        "Password Reset Successful",
        response.data.message || "You can now log in with your new password."
      );

      navigate("/mobile/login");
    } catch (error: any) {
      if (error.response?.data?.errors) {
        const errors = Object.values(error.response.data.errors)
          .flat()
          .map((e) => String(e));

        errors.forEach((msg) => {
          showAlert("error", "Password Reset Failed", msg);
        });
      } else {
        showAlert(
          "error",
          "Password Reset Failed",
          "Something went wrong. Try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black px-4">
      <div className="w-full max-w-md bg-white dark:bg-boxdark rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-center mb-6 dark:text-white">
          Reset Your Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Password */}
          <div>
            <label className="block mb-1 text-sm dark:text-white">
              New Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full rounded-lg border border-stroke bg-transparent py-2 px-3 pr-10 text-sm text-black dark:text-white dark:border-form-strokedark dark:bg-form-input focus:border-primary outline-none"
              />
              <Lock
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                size={20}
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 text-sm dark:text-white">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                placeholder="Re-type your password"
                className="w-full rounded-lg border border-stroke bg-transparent py-2 px-3 pr-10 text-sm text-black dark:text-white dark:border-form-strokedark dark:bg-form-input focus:border-primary outline-none"
              />
              <Lock
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                size={20}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-lg bg-primary text-white py-2 font-medium transition ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-opacity-90"
            }`}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
