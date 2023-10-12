import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.userState.user);

  const handleLogout = () => {
    navigate('/');
    dispatch(clearCart());
    dispatch(logoutUser());
  }

  console.log(user);

  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
            // User
            <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="test-xs sm:text-sm">Hello, {user.username}</p>
            <button className="btn btn-xs btn-outline btn-primary" onClick={handleLogout}>
              logout
            </button>
            
          </div>
        ) : (
            // Links
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="login" className="link link-hover text-xs sm:text-sm">
              Sign in / Guest
            </Link>
            <Link to="register" className="link link-hover text-xs sm:text-sm">
              Create Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
