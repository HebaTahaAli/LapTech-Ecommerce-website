import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./login.css";
import { AuthProvider } from "../../../component/context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthProvider);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      toast.error("Please fill all fields");
      return;
    }

    const result = login(formData.email, formData.password);

    if (!result.success) {
      toast.error(result.message);
      return;
    }

    toast.success(result.message);

    setFormData({
      email: "",
      password: "",
    });

    navigate("/");
  }

  return (
    <section className="login-page">
      <div className="container">
        <div className="login-box">
          <h1>Welcome Back</h1>

          <p>Login to your account</p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <button type="submit" className="btn">
              Login
            </button>
          </form>

          <div className="register-link">
            Don't have an account?
            <Link to="/register"> Register </Link>
          </div>
        </div>
      </div>
    </section>
  );
}