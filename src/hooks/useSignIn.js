import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/thunks/authThunks";

const useSignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [keepMeLogIn, setKeepMeLogIn] = useState(true);
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  const handleStayLogIn = () => {
    setKeepMeLogIn(!keepMeLogIn);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    keepMeLogIn,
    handleStayLogIn,
    loading,
    error,
    user,
  };
};

export default useSignIn;
