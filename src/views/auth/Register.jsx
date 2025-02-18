import { useEffect } from "react";
import { Link, replace, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";

import useRegister from "../../hooks/useRegister";
import Admin from "layouts/admin";

export default function Register() {
  const { formData, handleChange, handleSubmit, loading, error } =
    useRegister();

  const { isAdmin } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!Admin) {
      navigate("/admin", (replace = true));
    }
  }, [isAdmin, navigate]);

  return (
    <div className="mb-16 mt-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Registration Section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Create an Account
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your details to create your account!
        </p>

        {/* Sign Up with Google */}
        <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign Up with Google
          </h5>
        </div>

        {/* Divider */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div>

        {/* Error Message */}
        {error && <p className="mb-3 text-sm text-red-500">{error.message}</p>}

        {/* First Name */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="First Name*"
          placeholder="John"
          id="firstName"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        {/* Last Name */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Last Name*"
          placeholder="Doe"
          id="lastName"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        {/* Phone */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Phone*"
          placeholder="+1234567890"
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email*"
          placeholder="john.doe@example.com"
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Password*"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        {/* Terms & Conditions */}
        <div className="mb-4 flex items-center px-2">
          <Checkbox
            checked={formData.termsAccepted}
            onChange={handleChange}
            name="termsAccepted"
          />
          <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
            I agree to the Terms and Conditions
          </p>
        </div>

        {/* Register Button */}
        <button
          onClick={handleSubmit}
          className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>

        {/* Already Have an Account? */}
        <div className="mt-4">
          <span className="text-sm font-medium text-navy-700 dark:text-gray-600">
            Already have an account?
          </span>
          <Link
            to="/auth/sign-in"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
