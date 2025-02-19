import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import FixedPlugin from "components/fixedPlugin/FixedPlugin";
import InputField from "components/fields/InputField";
// import { FcGoogle } from "react-icons/fc";

import useRegister from "../../hooks/useRegister";

export default function Register() {
  const { formData, handleChange, handleSubmit, loading, error } =
    useRegister();
  const { isAdmin } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate("/admin");
    }
  }, [isAdmin, navigate]);

  return (
    <div className="relative float-right h-full min-h-screen w-full !bg-white dark:!bg-navy-900">
      <FixedPlugin />
      <main className="mx-auto min-h-screen">
        <div className="relative flex">
          <div className="mx-auto flex min-h-full w-full flex-col items-center justify-start pt-12 md:max-w-[75%] lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:min-h-[100vh] xl:max-w-full xl:px-0">
            <div className="w-100 mb-auto flex flex-col pl-5 pr-5 md:pl-12 md:pr-0 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
              <Link to="/admin" className="mt-0 w-max lg:pt-10">
                <div className="mx-auto flex h-fit w-fit items-center hover:cursor-pointer">
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.70994 2.11997L2.82994 5.99997L6.70994 9.87997C7.09994 10.27 7.09994 10.9 6.70994 11.29C6.31994 11.68 5.68994 11.68 5.29994 11.29L0.709941 6.69997C0.319941 6.30997 0.319941 5.67997 0.709941 5.28997L5.29994 0.699971C5.68994 0.309971 6.31994 0.309971 6.70994 0.699971C7.08994 1.08997 7.09994 1.72997 6.70994 2.11997V2.11997Z"
                      fill="#A3AED0"
                    />
                  </svg>
                  <p className="ml-3 text-sm text-gray-600">
                    Back to Dashboard
                  </p>
                </div>
              </Link>

              <div className="mb-16  flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
                <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
                  <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
                    Create an Account
                  </h4>
                  <p className="mb-9 ml-1 text-base text-gray-600">
                    Enter customer details to create your account!
                  </p>
                  {/* GOOGLE SIGN UP OPTION */}
                  {/* <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
                    <div className="rounded-full text-xl">
                      <FcGoogle />
                    </div>
                    <h5 className="text-sm font-medium text-navy-700 dark:text-white">
                      Sign Up with Google
                    </h5>
                  </div> */}

                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
                    <p className="text-base text-gray-600 dark:text-white">
                      {" "}
                      or{" "}
                    </p>
                    <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
                  </div>

                  {error && (
                    <p className="mb-3 text-sm text-red-500">{error.message}</p>
                  )}

                  {[
                    {
                      label: "First Name*",
                      name: "firstName",
                      placeholder: "John",
                      type: "text",
                    },
                    {
                      label: "Last Name*",
                      name: "lastName",
                      placeholder: "Doe",
                      type: "text",
                    },
                    {
                      label: "Phone*",
                      name: "phone",
                      placeholder: "+1234567890",
                      type: "tel",
                    },
                    {
                      label: "Email*",
                      name: "email",
                      placeholder: "john.doe@example.com",
                      type: "email",
                    },
                    {
                      label: "Password*",
                      name: "password",
                      placeholder: "Min. 8 characters",
                      type: "password",
                    },
                  ].map((field) => (
                    <InputField
                      key={field.name}
                      variant="auth"
                      extra="mb-3"
                      label={field.label}
                      placeholder={field.placeholder}
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                    />
                  ))}

                  <button
                    onClick={handleSubmit}
                    className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                    disabled={loading}
                  >
                    {loading ? "Signing Up..." : "Sign Up"}
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
