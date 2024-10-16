// src/components/admin/AdminPostsTable.tsx

import { DataTable } from "@/components/tables/data-table";
import { dummyPosts } from "@/pages/landing/dummy-data";
import { postsColumnDefs } from "../tables/PostsColumnDef";

export default function AdminPostsManagement() {
  return (
    <div className="container mx-auto p-4 space-y-4 flex-grow">
      <h1 className="text-2xl font-bold mb-4">Admin Post Management</h1>
      <DataTable columns={postsColumnDefs} data={dummyPosts} />
    </div>
  );
}
