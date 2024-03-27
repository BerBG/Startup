import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);

  const updateUser = async (userData) => {
    try {
      const response = await axios.put("/api/users", userData); // Adapte a rota da API se necessário
      setUser(response.data);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao atualizar dados do usuário");
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}
