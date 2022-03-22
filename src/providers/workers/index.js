import { createContext, useState, useContext, useEffect } from "react";
import { proWorkingApi } from "../../services/api";

const WorkersContext = createContext();

export const WorkersProvider = ({ children }) => {
  const [workers, setWorkers] = useState(
    JSON.parse(localStorage.getItem("@ProWorking:workers")) || []
  );

  const pathUser = "/users" // "/workers/?_expand=user"
  //const pathWorkers = "/workers?_expand=user"  "/workers/?_expand=user"


  useEffect(() => {
    //if (!!localStorage.getItem("@ProWorking:workers") === false) {



      proWorkingApi.get(pathUser).then(({ data }) => {
        console.log(data)
        setWorkers(data);
        localStorage.setItem("@ProWorking:workers", JSON.stringify(data));
        

      });




    //}
  }, []);



  const refreshWorkers = () => {
    proWorkingApi.get(pathUser).then(({ data }) => {
      setWorkers(data);
      localStorage.setItem("@ProWorking:workers", JSON.stringify(data));
    });
  };




  return (
    <WorkersContext.Provider value={{ workers, refreshWorkers }}>
      {children}
    </WorkersContext.Provider>
  );
};

export const useWorkers = () => useContext(WorkersContext);
