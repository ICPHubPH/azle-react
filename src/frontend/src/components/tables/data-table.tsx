import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Skeleton } from "@/components/ui/skeleton"; // Import the Skeleton component

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  page: number;
  pageSize: number;
  totalRows: number;
  loading: boolean; // New loading prop
  onPageChange: (newPage: number) => void;
  renderRowSkeleton?: () => JSX.Element;

}

export function DataTable<TData, TValue>({
  columns,
  data,
  page,
  pageSize,
  totalRows,
  loading, // Include the loading state
  onPageChange,
  renderRowSkeleton
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = React.useState<string>("");
  const [rowSelection, setRowSelection] = React.useState({});
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    state: {
      columnFilters,
      globalFilter,
      rowSelection,
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "includesString",
    onRowSelectionChange: setRowSelection,
  });


  if (loading) {
    return (
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2">
              <Skeleton className="h-4 w-16" /> {/* Skeleton for "Select" header */}
            </th>
            <th className="px-4 py-2">
              <Skeleton className="h-4 w-48" /> {/* Skeleton for "Post Title" header */}
            </th>
            <th className="px-4 py-2">
              <Skeleton className="h-4 w-32" /> {/* Skeleton for "Type" header */}
            </th>
            <th className="px-4 py-2">
              <Skeleton className="h-4 w-32" /> {/* Skeleton for "Date Posted" header */}
            </th>
            <th className="px-4 py-2">
              <Skeleton className="h-4 w-32" /> {/* Skeleton for "Thumbnail" header */}
            </th>
            <th className="px-4 py-2">
              <Skeleton className="h-4 w-32" /> {/* Skeleton for "Status" header */}
            </th>
            <th className="px-4 py-2">
              <Skeleton className="h-4 w-32" /> {/* Skeleton for "Actions" header */}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {Array.from({ length: pageSize }).map((_, index) => (
            <tr key={index}>
              <td className="px-4 py-2">
                <Skeleton className="h-6 w-6 rounded-full" /> {/* Skeleton for checkbox */}
              </td>
              <td className="px-4 py-2">
                <Skeleton className="h-6 w-full" /> {/* Skeleton for title */}
              </td>
              <td className="px-4 py-2">
                <Skeleton className="h-6 w-1/4" /> {/* Skeleton for type */}
              </td>
              <td className="px-4 py-2">
                <Skeleton className="h-6 w-1/3" /> {/* Skeleton for date */}
              </td>
              <td className="px-4 py-2">
                <Skeleton className="h-6 w-1/4" /> {/* Skeleton for thumbnail */}
              </td>
              <td className="px-4 py-2">
                <Skeleton className="h-6 w-1/4" /> {/* Skeleton for status */}
              </td>
              <td className="px-4 py-2">
                <Skeleton className="h-6 w-1/4" /> {/* Skeleton for actions */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <Input
          placeholder="Search...."
          value={globalFilter}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="px-2 py-3 first:pl-4 last:pr-4">
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {loading ? (
              // Render skeleton rows when loading
              Array.from({ length: pageSize }).map((_, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <TableCell key={column.id} className="px-2 py-3 first:pl-4 last:pr-4">
                      <Skeleton className="h-4 w-full" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="px-2 py-3 first:pl-4 last:pr-4">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(page - 1)}
          disabled={page === 0}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(page + 1)}
          disabled={(page + 1) * pageSize >= totalRows}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
