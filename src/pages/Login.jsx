import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validate = () => {
    let valid = true;
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    }

    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        // Send login request to the API
        const response = await fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (data.success) {
          // Store user role in local storage
          localStorage.setItem('role', data.role);
          // Redirect based on user role
          if (data.role === "Admin") {
            navigate("/admin");
          } else {
            navigate("/guest");
          }
        } else {
          // Handle login error
          setErrors({ ...errors, form: data.message });
        }
      } catch (error) {
        // Handle fetch error
        setErrors({ ...errors, form: 'An error occurred. Please try again later.' });
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white-snow px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-lg">
        <div className="flex justify-center mb-4 font-plusJakarta">
          <div className="text-blue-500 text-2xl font-bold">
            <span className="text-gray-800">Dashboard </span>
            <span className="text-blue-500">Kit</span>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-4 text-center font-plusJakarta">
          Log In to Dashboard Kit
        </h2>
        <p className="text-gray-600 mb-6 text-center font-plusJakarta">
          Enter your email and password below
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 font-plusJakarta">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email address"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-6 font-plusJakarta relative">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              PASSWORD
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <FaEyeSlash className="text-gray-600" />
              ) : (
                <FaEye className="text-gray-600" />
              )}
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
            <a
              href="#"
              className="inline-block align-baseline font-light text-sm text-blue-500 hover:text-blue-700 ml-2"
            >
              Forgot password?
            </a>
          </div>
          <div className="flex items-center justify-center font-plusJakarta">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-24 shadow-md rounded focus:outline-none focus:shadow-outline"
            >
              Log In
            </button>
          </div>
          {errors.form && (
            <div className="text-center mt-4 text-red-500">
              {errors.form}
            </div>
          )}
          <div className="text-center mt-4 font-plusJakarta">
            <p className="text-gray-600">
              Don't have an account?
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
