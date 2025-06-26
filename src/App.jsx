// App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css"; // Import your CSS file for styling
import "./index.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HomePage from "./pages/HomePage";
import DashboardHome from "./pages/DashboardHome";
import WalletOverview from "./components/Dashboard/WalletOverview";
import WalletLayout from "./pages/WalletLayout";
import DashboardLayout from "./pages/DashboardLayout";

// ProtectedRoute wrapper
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            {/* <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          /> */}
            <Route path="/dashboard" element={<DashboardHome />}>
              <Route index element={<DashboardLayout />} />
              <Route path="wallet" element={<WalletLayout />} />
              {/* other child routes */}
            </Route>
            {/* Optional: Redirect unknown routes */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </Provider>
    </AuthProvider>
  );
}
