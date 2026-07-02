import { useContext, useState } from "react";
import toast from "react-hot-toast";
import "./profile.css";

import { AuthProvider } from "../../component/context/AuthContext";

export default function Profile() {
  const { user, updateProfile } = useContext(AuthProvider);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    password: user?.password || "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.password.trim()
    ) {
      toast.error("Please fill all fields");
      return;
    }

    updateProfile(formData);

    toast.success("Profile Updated Successfully");
  }

  return (
    <section className="profile-page">

      <div className="container">

        <div className="profile-box">

          <h1>My Profile</h1>

          <p>Manage your account information</p>

          <form onSubmit={handleSubmit}>

            <label>Full Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label>Password</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <button className="btn">
              Save Changes
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}