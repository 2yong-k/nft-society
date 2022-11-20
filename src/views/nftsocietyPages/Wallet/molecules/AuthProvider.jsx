import { AuthContext } from "../contexts/AuthContext";
import { useState } from "react";
export default function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  const [walletType, setWalletType] = useState("");
  return (
    <AuthContext.Provider value={{ user, setUser, walletType, setWalletType }}>
      {children}
    </AuthContext.Provider>
  );
}
