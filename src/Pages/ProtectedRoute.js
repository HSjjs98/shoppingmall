import { useAuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  if ((requireAdmin && user && !user.isAdmin) || (requireAdmin && !user))
    return navigate("/");
  if (!user) return navigate("/");
  return <>{children}</>;
}
