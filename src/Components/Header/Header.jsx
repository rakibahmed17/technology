import { Link } from "react-router-dom";
import logo from "../Header/logo.png.avif";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user,LogOut } = useContext(AuthContext);

const handleOut=()=>{
  LogOut()
  .then()
  .catch()
}


  const links = (
    <div className=" space-x-5 font-extrabold text-white ">
      <Link to="/">Home</Link>
      <Link to="/addProducts">AddProducts</Link>
      <Link to="/myCarts">MyCarts</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
  return (
    <div>
      <div className="navbar bg-green-400 rounded-md mb-7">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  shadow bg-green-600  gap-5 "
            >
              {links}
            </ul>
          </div>
          <img className="w-12 rounded-full" src={logo} alt="" />
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal  px-1">{links}</ul>
        </div>
       
        <div className="navbar-end">
        { user ? 
          <button onClick={handleOut} className="btn">SingOut</button> :
         <Link to="/login">
              <a className="btn">Login</a>
            </Link>
          }
        
        </div>
     
      </div>
  
    </div>
  );
};

export default Header;
