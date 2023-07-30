import { createContext, useContext, useEffect, useState } from "react";
import { onUserStateChange } from "../API/Firebase";

const AuthContext = createContext()

export function AuthContextProvider({children}){
  const [user, setUser] = useState();
  const loginout = user ? "Logout": "Login";
  useEffect(() => {
    onUserStateChange((updatedUser) => {
      setUser(updatedUser);
    });
  }, []);

  return <AuthContext.Provider value={{user, loginout}}>
    {children}
  </AuthContext.Provider>
}

export function useAuthContext(){
  return useContext(AuthContext)
}