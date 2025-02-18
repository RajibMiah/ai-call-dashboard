import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/thunks/authThunks";

const useRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      alert("Please accept the Terms and Conditions");
      return;
    }

    dispatch(registerUser(formData));
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    error,
    user,
  };
};

export default useRegister;
