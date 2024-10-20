// src/components/admin/AdminPostsTable.tsx

import { DataTable } from "@/components/tables/data-table";
import { useAllPost, useGetAllArchivedPosts } from "@/hooks/usePostData";
import { useState } from "react";
import { postsColumnDefs } from "../tables/PostsColumnDef";

const  Active = () => {
  const [page, setPage] = useState(0);

  const take = 10; // Number of items per page
  const skip = page * take;

  const { data, isLoading, isError } = useAllPost(skip, take);
  const totalRows = data?.count || 0;

  return (
    <>
      <DataTable
        columns={postsColumnDefs}
        data={data?.posts || []}
        page={page}
        pageSize={take}
        totalRows={totalRows}
        onPageChange={setPage}
        loading={isLoading} // Pass the loading state to the DataTable component
      />
    </>
  );
}
const  Archived = () => {
  const [page, setPage] = useState(0);

  const take = 10; // Number of items per page
  const skip = page * take;

  const { data, isLoading, isError } = useGetAllArchivedPosts(skip, take);
  console.log("Archived Posts Data:", data); // Add this line to log the data
  const totalRows = data?.count || 0;

  return (
    <>
      <DataTable
        columns={postsColumnDefs}
        data={data?.posts || []}
        page={page}
        pageSize={take}
        totalRows={totalRows}
        onPageChange={setPage}
        loading={isLoading} // Pass the loading state to the DataTable component
      />
    </>
  );
}


export { Active, Archived }