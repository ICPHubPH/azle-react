import { useUserByProviders } from "@/hooks/useUserData";
import { useState } from "react";
import { DataTable } from "../tables/data-table";
import { providersColumns } from "../tables/ProvidersColumnDef";

const ProvidersTable = () => {
  const [page, setPage] = useState(0);

  const take = 10; 
  const skip = page * take;

  const { data, isLoading, isError } = useUserByProviders(skip, take);
  const totalRows = data?.count || 0;

  return (
    <>
      <DataTable
        columns={providersColumns}
        data={data?.providers || []}
        page={page}
        pageSize={take}
        totalRows={totalRows}
        onPageChange={setPage}
      />
    </>
  );
};

export default ProvidersTable;
