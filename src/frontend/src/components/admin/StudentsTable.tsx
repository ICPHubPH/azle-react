import { useUserByStudents } from "@/hooks/useUserData";
import { useState } from "react";
import { DataTable } from "../tables/data-table";
import { studentsColumns } from "../tables/StudentsColumnDef";

const StudentsTable = () => {
  const [pages, setPages] = useState(0);

  const take = 10; 
  const page = pages * take;

  const { data, isLoading } = useUserByStudents(page, take);
  const totalRows = data?.count || 0;

  return (
    <>
      <DataTable
        columns={studentsColumns}
        data={data?.students || []}
        page={page}
        pageSize={take}
        totalRows={totalRows}
        onPageChange={setPages}
        loading={isLoading} // Pass the loading state to the DataTable component
      />
    </>
  );
};

export default StudentsTable;
