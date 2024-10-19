import { Post } from "@/types/model";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import { useArchivePost } from "@/hooks/usePostData";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";

export const postsColumnDefs: ColumnDef<Post>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  // {
  //   accessorKey: "id",
  //   header: "Provider",
  //   cell: ({ row }) => (
  //     <div className="flex flex-row items-center gap-2 sm:gap-3">
  //       <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
  //         <AvatarImage src={row.original.user.avatarUrl} />
  //         <AvatarFallback>
  //           {row.original.user.name ? row.original.user.name.charAt(0) : "A"}
  //         </AvatarFallback>
  //       </Avatar>
  //       <div>
  //         <p className="text-sm truncate max-w-[150px] md:max-w-none">
  //           {row.original.user.name}
  //         </p>
  //         <p className="text-xs truncate max-w-[150px] sm:max-w-none text-muted-foreground">
  //           {row.original.user.email}
  //         </p>
  //       </div>
  //     </div>
  //   ),
  // },
  {
    accessorKey: "title",
    header: "Post Title",
    cell: ({ row }) => (
      <p
        dangerouslySetInnerHTML={{ __html: row.original.title }}
        className="truncate "
      ></p>
    ),
  },
  {
    accessorKey: "archivedAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0 hover:bg-none"
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    sortingFn: "alphanumeric",
    cell: ({ row }) => {
      const status = row.original.archivedAt;
      return (
        <Badge variant={status === null ? "default" : "blue"}>
          {status === null ? "Active" : "Archived"}
        </Badge>
      );
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0 hover:bg-none"
        >
          Type
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    sortingFn: "alphanumeric",
    cell: ({ row }) => {
      const status = row.original.type;
      return <Badge variant={"outline"}>{row.original.type}</Badge>;
    },
  },
  {
    accessorKey: "createdAt",
    sortingFn: "datetime",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0"
        >
          Date Posted
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.original.createdAt); // Convert to Date object
      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const formattedTime = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });

      return (
        <div className="truncate">
          {formattedDate} {formattedTime}
        </div>
      );
    },
  },
  {
    accessorKey: "postThumbnailSource",
    header: "Thumbnail",
    cell: ({ row }) => (
      <Dialog>
        <DialogTrigger className="text-sm sm:text-base underline text-blue-600">
          View Thumbnail
        </DialogTrigger>
        <DialogContent className="w-full max-w-lg">
          <img className="w-full" src={row.original.thumbnail} alt="id" />
        </DialogContent>
      </Dialog>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const { mutate: archivePost } = useArchivePost();
      const queryClient  = useQueryClient();
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>View</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                archivePost(row.original.id!.toString(),{
                  onSuccess: () => {
                    toast({
                      title: "Post Archived",
                      description: "The post has been successfully archived.",
                      duration: 3000, // Optional: Set duration for how long the toast stays
                    });
                    queryClient.invalidateQueries({ queryKey: ["posts"] });
                  },
                });
              }}
            >
              Archive
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
