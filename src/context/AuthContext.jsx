import { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //   const navigate = useNavigate();
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || null;
  });

  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    // navigate("/");
  };
  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    // navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      if (payload.exp * 1000 < Date.now()) {
        logout(); // token expired
      }
    }
  }, []);

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
