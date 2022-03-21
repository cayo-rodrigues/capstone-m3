import { Link } from "react-router-dom";
import { NavigatorContainerDiv } from "./style.js";

import { AiOutlineHome,AiFillDashboard } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { BiRegistered } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";


import { useLocation } from "react-router-dom";
import { useAuthenticated } from "../../providers/authenticated/index.js";

const BottomNavigator = () => {
  const location = useLocation();
  const { authenticated } = useAuthenticated()

  const menuAuthenticated = [
    {
      title:"Home",
      path:"/",
      Icon:AiOutlineHome,
    },
    {
      title:"Serviços",
      path:"/services",
      Icon:MdWorkOutline,
    },
    {
      title:"Sobre nós",
      path:"/aboutus",
      Icon:IoIosPeople,
    },    
    {
      title:"Dashboard",
      path:"/dashboard",
      Icon:AiFillDashboard,
    },
    
  ]
  const menuNotAuthenticated = [
    {
      title:"Home",
      path:"/",
      Icon:AiOutlineHome,
    },
    {
      title:"Serviços",
      path:"/services",
      Icon:MdWorkOutline,
    },
    {
      title:"Login",
      path:"/login",
      Icon:FiLogIn,
    },
    {
      title:"Cadastro",
      path:"/register",
      Icon:BiRegistered
    },
    {
      title:"Sobre nós",
      path:"/aboutus",
      Icon:IoIosPeople,
    },
  ]

  return (
    <NavigatorContainerDiv>
      <nav>
        <ul>
          {
            authenticated ? (
              menuAuthenticated.map(({title,Icon,path})=>(
              <li key={title}>
                <Link to={path} onClick={()=>window.scrollTo(0,0)} className={location.pathname === path ? "selected" : "" }>
                  <div>
                    <p>
                      <Icon/>
                    </p>
                  </div>
                  <span>{title}</span>
                </Link>
              </li>
              ))
            ) :(
              menuNotAuthenticated.map( ({title,Icon,path})=>(
                <li key={title}>
                  <Link  onClick={()=>window.scrollTo(0,0)}  to={path} className={location.pathname === path ? "selected" : ""}>
                    <div>
                      <p>
                        <Icon/>
                      </p>
                    </div>
                    <span>{title}</span>
                  </Link>
                </li>
                )) 
            )
          }

          {/* <li>
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
              to={"/services"}
              className={location.pathname === "/services" && "selected"}
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
              to={"/dashboard"}
              className={location.pathname === "/dashboard" && "selected"}
            >
              <div>
                <p>
                  <AiFillDashboard />
                </p>
              </div>
              <span>Dashboard</span>
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
          </li> */}
        </ul>
      </nav>
    </NavigatorContainerDiv>
  );
};

export default BottomNavigator;
