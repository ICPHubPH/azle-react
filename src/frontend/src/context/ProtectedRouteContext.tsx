import { useAuth } from "@/hooks/use-auth";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type PermittedRole = "student" | "provider" | "admin" | "*";

export default function ProtectedRouteContext({
  children,
  allow,
}: {
  children: ReactNode;
  allow: PermittedRole[];
}) {
  const auth = useAuth();

  if (
    allow.includes("*") ||
    auth.isAuthenticated ||
    allow.includes(auth?.data?.role! as PermittedRole)
  ) {
    return <>{children}</>;
  }

  return <Navigate to={"/auth"} />;
}
