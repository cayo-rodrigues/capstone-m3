import { Link } from "react-router-dom";
import { NavigatorContainerDiv } from "./style.js";

import { AiOutlineHome } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { BiRegistered } from "react-icons/bi";
import { useLocation } from "react-router-dom";

const BottomNavigator = () => {
  const location = useLocation();
  console.log(location);
  return (
    <NavigatorContainerDiv>
      <nav>
        <ul>
          <li>
            <Link to={"/"} className={location.pathname === "/" && "selected"}>
              <div>
                <p>
                  <AiOutlineHome />
                </p>
              </div>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/dashboard"}
              className={location.pathname === "/dashboard" && "selected"}
            >
              <div>
                <p>
                  <MdWorkOutline />
                </p>
              </div>
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/login"}
              className={location.pathname === "/login" && "selected"}
            >
              <div>
                <p>
                  <FiLogIn />
                </p>
              </div>
              <span>Login</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/register"}
              className={location.pathname === "/register" && "selected"}
            >
              <div>
                <p>
                  <BiRegistered />
                </p>
              </div>
              <span>Cadastro</span>
            </Link>
          </li>
        </ul>
      </nav>
    </NavigatorContainerDiv>
  );
};

export default BottomNavigator;
