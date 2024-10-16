import Header from "@/components/student-component/Header";

import AdminUserManagement from "@/components/admin/AdminUsersTable";
import AdminPostsManagement from "@/components/admin/AdminPostsTable";

export default function AdminPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AdminUserManagement />
      <AdminPostsManagement/>
    </div>
  );
}
