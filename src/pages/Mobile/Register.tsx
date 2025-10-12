import { Lock, User, Phone, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha"; // ✅ reCAPTCHA
import api from "../../api/axios";
import { useAlert } from "../UiElements/AlertContext"; // ✅ alert context

const MobileRegister: React.FC = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    contact_number: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null); // ✅ captcha state
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 🔍 Blank field validations
    if (!formData.first_name.trim()) {
      showAlert("error", "Validation Error", "First name is required");
      setLoading(false);
      return;
    }
    if (!formData.last_name.trim()) {
      showAlert("error", "Validation Error", "Last name is required");
      setLoading(false);
      return;
    }
    if (!formData.contact_number.trim()) {
      showAlert("error", "Validation Error", "Contact number is required");
      setLoading(false);
      return;
    }
    if (!formData.email.trim()) {
      showAlert("error", "Validation Error", "Email is required");
      setLoading(false);
      return;
    }
    if (!formData.password.trim()) {
      showAlert("error", "Validation Error", "Password is required");
      setLoading(false);
      return;
    }
    if (!formData.password_confirmation.trim()) {
      showAlert("error", "Validation Error", "Password confirmation is required");
      setLoading(false);
      return;
    }

    // 🔍 Password mismatch
    if (formData.password !== formData.password_confirmation) {
      showAlert("error", "Password Mismatch", "Passwords do not match");
      setLoading(false);
      return;
    }

    // 🔒 reCAPTCHA validation
    if (!captchaToken) {
      showAlert("error", "reCAPTCHA Error", "Please complete the captcha");
      setLoading(false);
      return;
    }

    try {
      // ✅ send data to backend
      await api.post("/register", {
        ...formData,
      "g-recaptcha-response": captchaToken, // ✅ matches backend validation
      });

      showAlert(
        "success",
        "Registration Successful",
        "We sent you an email to verify your account"
      );
      navigate("/mobile/login");
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message ||
        err.response?.data?.errors ||
        "Registration failed. Please try again.";

      if (typeof errorMessage === "object") {
        // Handle multiple backend validation messages
        (Object.values(errorMessage).flat() as string[]).forEach((msg) => {
          showAlert("error", "Validation Error", msg);
        });
      } else {
        showAlert("error", "Registration Failed", errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 px-4 dark:bg-boxdark">
      {/* Logo + tagline */}
      <div className="flex flex-col items-center text-center p-6">
        <img src="/logo/Logo_light_mode.svg" alt="Logo" className="h-12 mb-2" />
        <p className="text-sm text-gray-700 max-w-md dark:text-white">
          Stay Informed, Stay Safe, Stay Ahead
        </p>
      </div>

      {/* Main content */}
      <div className="flex items-center justify-center">
        <div className="rounded-sm shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex flex-wrap items-center">
            <div className="w-full border-stroke dark:border-strokedark xl:border-l-2">
              <div className="w-screen p-6 sm:p-12.5 xl:p-17.5">
                <h2 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                  Register Your Account
                </h2>

                <form onSubmit={handleRegister}>
                  {/* First Name */}
                  <div className="mb-3">
                    <label className="mb-2 block text-sm text-black dark:text-white">
                      First Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        className="w-full rounded-lg border border-stroke bg-transparent py-2 px-2 sm:px-6 pr-10 text-sm text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                      />
                      <User
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="mb-3">
                    <label className="mb-2 block text-sm text-black dark:text-white">
                      Last Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        className="w-full rounded-lg border border-stroke bg-transparent py-2 px-2 sm:px-6 pr-10 text-sm text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                      />
                      <User
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                    </div>
                  </div>

                  {/* Contact Number */}
                  <div className="mb-3">
                    <label className="mb-2 block text-sm text-black dark:text-white">
                      Contact Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="contact_number"
                        value={formData.contact_number}
                        onChange={handleChange}
                        placeholder="Enter your contact number"
                        className="w-full rounded-lg border border-stroke bg-transparent py-2 px-2 sm:px-6 pr-10 text-sm text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                      />
                      <Phone
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label className="mb-2 block text-sm text-black dark:text-white">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-stroke bg-transparent py-2 px-2 sm:px-6 pr-10 text-sm text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                      />
                      <Mail
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label className="mb-2 block text-sm text-black dark:text-white">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className="w-full rounded-lg border border-stroke bg-transparent py-2 px-2 sm:px-6 pr-10 text-sm text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                      />
                      <Lock
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="mb-4">
                    <label className="mb-2 block text-sm text-black dark:text-white">
                      Re-type Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        placeholder="Re-enter your password"
                        className="w-full rounded-lg border border-stroke bg-transparent py-2 px-2 sm:px-6 pr-10 text-sm text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                      />
                      <Lock
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                    </div>
                  </div>

                  {/* ✅ reCAPTCHA widget */}
                  <div className="mb-4 flex justify-center">
                    <ReCAPTCHA
                      sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY as string}
                      onChange={(token) => setCaptchaToken(token)}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="mb-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full cursor-pointer rounded-lg border border-primary bg-primary py-2 text-sm sm:text-base text-white transition hover:bg-opacity-90 disabled:opacity-50"
                    >
                      {loading ? "Creating account..." : "Create account"}
                    </button>
                  </div>

                  {/* Links */}
                  <div className="mt-3 text-center space-y-2">
                    <p className="text-sm">
                      Already have an account?{" "}
                      <Link to="/mobile/login" className="text-primary">
                        Login
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
    </div>
  );
};

export default MobileRegister;
