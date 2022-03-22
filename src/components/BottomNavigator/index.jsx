import { Link } from "react-router-dom";
import { NavigatorContainerDiv } from "./style.js";

import { AiOutlineHome,AiFillDashboard } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { BiRegistered } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";


import { useLocation } from "react-router-dom";
import { useAuthenticated } from "../../providers/authenticated/index.js";
import { useState } from "react";
import { useEffect } from "react";

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
      <nav onScroll={(e)=>console.log(e)}>
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

        </ul>
      </nav>
    </NavigatorContainerDiv>
  );
};

export default BottomNavigator;
