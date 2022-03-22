import { createContext, useState, useContext, useEffect } from "react";
import { proWorkingApi } from "../../services/api";

const WorkersContext = createContext();

export const WorkersProvider = ({ children }) => {
  const [workers, setWorkers] = useState(
    JSON.parse(localStorage.getItem("@ProWorking:workers")) || []
  );

  useEffect(() => {
    if (!!localStorage.getItem("@ProWorking:workers") === false) {
      proWorkingApi
        .get("/workers?_expand=user&_embed=ratings")
        .then(({ data }) => {
          setWorkers(data);
          localStorage.setItem("@ProWorking:workers", JSON.stringify(data));
        });
    }
  }, []);

  const refreshWorkers = () => {
    proWorkingApi
      .get("/workers?_expand=user&_embed=ratings")
      .then(({ data }) => {
        localStorage.setItem("@ProWorking:workers", JSON.stringify(data));
        setWorkers(data);
      });
  };

  return (
    <WorkersContext.Provider value={{ workers, refreshWorkers }}>
      {children}
    </WorkersContext.Provider>
  );
};

export const useWorkers = () => useContext(WorkersContext);
