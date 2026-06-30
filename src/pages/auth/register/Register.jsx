import { useContext, useState } from "react";
import { AuthProvider } from "../../../component/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./register.css";

export default function Register() {
  const { register } = useContext(AuthProvider);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.password.trim() ||
      !formData.confirmPassword.trim()
    ) {
      toast.error("Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const result = register({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });

    if (!result.success) {
      toast.error(result.message);
      return;
    }

    toast.success(result.message);

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    navigate("/");
  }

  return (
    <section className="register-page">
      <div className="container">
        <div className="register-box">

          <h1>Create Account</h1>

          <p>Join us and start shopping today.</p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <button type="submit" className="btn">
              Register
            </button>

          </form>

          <div className="login-link">
            Already have an account?
            <Link to="/login"> Login </Link>
          </div>

        </div>
      </div>
    </section>
  );
}