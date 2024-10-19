// src/components/admin/AdminPostsTable.tsx

import { DataTable } from "@/components/tables/data-table";
import { useAllPost } from "@/hooks/usePostData";
import { useState } from "react";
import { postsColumnDefs } from "../tables/PostsColumnDef";

export default function AdminPostsManagement() {
  const [page, setPage] = useState(0);

  const take = 10; // Number of items per page
  const skip = page * take;

  const { data, isLoading, isError } = useAllPost(skip, take);
  console.log("Posts Data:", data); // Add this line to log the data
  const totalRows = data?.count || 0;

  return (
    <div className="container mx-auto p-4 space-y-4 flex-grow">
      <h1 className="text-2xl font-bold mb-4">Admin Post Management</h1>
      <DataTable
        columns={postsColumnDefs}
        data={data?.posts || []}
        page={page}
        pageSize={take}
        totalRows={totalRows}
        onPageChange={setPage}
      />
    </div>
  );
}
