
import AdminUserManagement from "@/components/admin/AdminUsersTable";
import AdminPostsManagement from "@/components/admin/AdminPostsTable";
import Header from "@/components/header/UserHeader";

export default function AdminPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AdminUserManagement />
      <AdminPostsManagement/>
    </div>
  );
}
