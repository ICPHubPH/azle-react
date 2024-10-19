import { useUnverifiedProviders, useUserByProviders } from "@/hooks/useUserData";
import { useState } from "react";
import { DataTable } from "../tables/data-table";
import { providersColumns } from "../tables/ProvidersColumnDef";


const VerfiedProvidersTable = () => {
  const [page, setPage] = useState(0);

  const take = 10; 
  const skip = page * take;

  const { data } = useUserByProviders(skip, take);
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
const UnverifiedProvidersTable = () => {
  const [page, setPage] = useState(0);

  const take = 10; 
  const skip = page * take;

  const { data } = useUnverifiedProviders(skip, take);
  console.log("Unverified Providers:", data); 
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

export { VerfiedProvidersTable, UnverifiedProvidersTable }

