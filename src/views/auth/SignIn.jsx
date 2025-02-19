import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import InputField from "components/fields/InputField";
import Checkbox from "components/checkbox";
import useSignIn from "../../hooks/useSignIn";

export default function SignIn() {
  const {
    formData,
    handleChange,
    handleSubmit,
    keepMeLogIn,
    handleStayLogIn,
    loading,
    error,
  } = useSignIn();
  const { isAuthorized } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthorized) {
      navigate("/admin");
    }
  }, [isAuthorized, navigate]);

  return (
    <div className="relative float-right h-full min-h-screen w-full !bg-white dark:!bg-navy-900">
      <main className="mx-auto min-h-screen">
        <div className="relative flex">
          <div className="mx-auto flex min-h-full w-full flex-col items-center justify-start pt-12 md:max-w-[75%] lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:min-h-[100vh] xl:max-w-full xl:px-0">
            <div className="w-100 mb-auto flex flex-col pl-5 pr-5 md:pl-12 md:pr-0 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
              <div className="mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
                <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
                  <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
                    Sign In
                  </h4>
                  <p className="mb-9 ml-1 text-base text-gray-600">
                    Enter your email and password to sign in!
                  </p>
                  {error && (
                    <p className="mb-3 text-sm text-red-500">{error.message}</p>
                  )}
                  <InputField
                    variant="auth"
                    extra="mb-3"
                    label="Email*"
                    placeholder="mail@simmmple.com"
                    id="email"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
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
                  <div className="mb-4 flex items-center justify-between px-2">
                    <div className="flex items-center">
                      <Checkbox
                        value={keepMeLogIn}
                        onChange={handleStayLogIn}
                      />
                      <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                        Keep me logged In
                      </p>
                    </div>
                    <a
                      className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                      href="/forget-password"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                    disabled={loading}
                  >
                    {loading ? "Signing In..." : "Sign In"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
