import { useState } from 'react'
import { Button } from "../ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { ChevronDown, ChevronUp, MoreHorizontal } from "lucide-react"
import { Input } from '../ui/input'

// Mock user data
const mockProviders = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  account: `provider${i + 1}`,
  email: `provider${i + 1}@example.com`,
  suspended: false,
}))

const mockStudents = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  account: `student${i + 1}`,
  email: `student${i + 1}@example.com`,
}))

type SortConfig = {
  key: string;
  direction: 'asc' | 'desc';
}

export default function AdminUserManagement() {
  const [activeTab, setActiveTab] = useState('providers')
  const [providers, setProviders] = useState(mockProviders)
  const [students, setStudents] = useState(mockStudents)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: '', direction: 'asc' })

  const handleSort = (key: string) => {
    setSortConfig((prevConfig) => ({
      key,
      direction:
        prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc',
    }))
  }

  const sortData = (data: any[]) => {
    if (!sortConfig.key) return data

    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1
      }
      return 0
    })
  }

  // Filter and paginate users
  const filterData = (data: any[]) => {
    return data.filter(item => 
      item.account.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  const paginateData = (data: any[]) => {
    const filteredData = filterData(data)
    const sortedData = sortData(filteredData)
    const totalPages = Math.ceil(sortedData.length / itemsPerPage)
    return {
      paginatedData: sortedData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      ),
      totalPages,
      totalItems: sortedData.length,
    }
  }

  const { paginatedData: paginatedProviders, totalPages: providerTotalPages, totalItems: totalProviders } = paginateData(providers)
  const { paginatedData: paginatedStudents, totalPages: studentTotalPages, totalItems: totalStudents } = paginateData(students)

  // Action handlers
  const handleSuspend = (userId: number) => {
    setProviders(providers.map(provider => 
      provider.id === userId ? { ...provider, suspended: !provider.suspended } : provider
    ))
  }

  const handleDelete = (userId: number) => {
    if (activeTab === 'providers') {
      setProviders(providers.filter(provider => provider.id !== userId))
    } else {
      setStudents(students.filter(student => student.id !== userId))
    }
  }

  const renderSortIcon = (key: string) => {
    if (sortConfig.key !== key) return null
    return sortConfig.direction === 'asc' ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />
  }

  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Admin User Management</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="providers">Providers</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
        </TabsList>
        <TabsContent value="providers">
          <DataTable
            data={paginatedProviders}
            columns={[
              { key: 'account', label: 'Account' },
              { key: 'email', label: 'Email' },
              { key: 'actions', label: 'Actions' },
            ]}
            onSort={handleSort}
            sortConfig={sortConfig}
            onSuspend={handleSuspend}
            onDelete={handleDelete}
            renderSortIcon={renderSortIcon}
          />
        </TabsContent>
        <TabsContent value="students">
          <DataTable
            data={paginatedStudents}
            columns={[
              { key: 'account', label: 'Account' },
              { key: 'email', label: 'Email' },
              { key: 'actions', label: 'Actions' },
            ]}
            onSort={handleSort}
            sortConfig={sortConfig}
            onDelete={handleDelete}
            renderSortIcon={renderSortIcon}
          />
        </TabsContent>
      </Tabs>

      {/* Search and items per page */}
      <div className="flex justify-between items-center">
        <Input
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
        <Select
          value={itemsPerPage.toString()}
          onValueChange={(value) => setItemsPerPage(Number(value))}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Items per page" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5 per page</SelectItem>
            <SelectItem value="10">10 per page</SelectItem>
            <SelectItem value="20">20 per page</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <div>
          Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, activeTab === 'providers' ? totalProviders : totalStudents)} of {activeTab === 'providers' ? totalProviders : totalStudents} users
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, activeTab === 'providers' ? providerTotalPages : studentTotalPages))}
            disabled={currentPage === (activeTab === 'providers' ? providerTotalPages : studentTotalPages)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

type Column = {
  key: string;
  label: string;
}

type DataTableProps = {
  data: any[];
  columns: Column[];
  onSort: (key: string) => void;
  sortConfig: SortConfig;
  onSuspend?: (id: number) => void;
  onDelete: (id: number) => void;
  renderSortIcon: (key: string) => React.ReactNode;
}

function DataTable({ data, columns, onSort, sortConfig, onSuspend, onDelete, renderSortIcon }: DataTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead key={column.key} onClick={() => onSort(column.key)} className="cursor-pointer">
              <div className="flex items-center">
                {column.label}
                {renderSortIcon(column.key)}
              </div>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            {columns.map((column) => (
              <TableCell key={`${item.id}-${column.key}`}>
                {column.key === 'actions' ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      {onSuspend && (
                        <DropdownMenuItem onClick={() => onSuspend(item.id)}>
                          {item.suspended ? 'Unsuspend' : 'Suspend'}
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => onDelete(item.id)}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  item[column.key]
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}