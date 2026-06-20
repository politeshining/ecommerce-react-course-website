import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [mode, setMode] = useState("signup");

    function signUp(email, password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]");

        if (users.find(u => u.email === email)) {
            return { success: false, error: "Email already exists" };
        }
        const newUser = { email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        // Don't auto-login after sign up; user should login explicitly.
        return { success: true };
    }

    function login(email, password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const found = users.find(u => u.email === email && u.password === password);
        if (!found) return { success: false, error: 'Invalid credentials' };

        setUser({ email });
        localStorage.setItem("currentUserEmail", email);
        return { success: true };
    }

    function logout() {
        setUser(null);
        localStorage.removeItem("currentUserEmail");
    }

    return <AuthContext.Provider value={{ signUp, login, logout, user, mode, setMode }}>{children}</AuthContext.Provider>;
}