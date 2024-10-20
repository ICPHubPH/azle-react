import {
  useApproveProvider,
  useArchiveUser,
  useDeleteUserById,
  useUnArchiveUser,
} from "@/hooks/useUserData";
import { User } from "@/types/model";
import { ColumnDef } from "@tanstack/react-table";
import {
  Archive,
  ArrowUpDown,
  
  CircleCheckBig,
  LoaderCircle,
  MoreHorizontal,
  OctagonAlert,
  SquareArrowOutUpRight,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";

export const providersColumns: ColumnDef<User>[] = [
  // CHECKBOX
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
  // END CHECKBOX
  //ACCOUNT

  {
    accessorKey: "id",
    header: "Account",
    cell: ({ row }) => (
      <div className="flex flex-row items-center gap-2 sm:gap-3 max-w-64">
        <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
          <AvatarImage src={row.original.avatarUrl} />
          <AvatarFallback>P</AvatarFallback>
        </Avatar>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="truncate max-w-[150px] text-sm sm:text-base">
              {row.original.name}
            </TooltipTrigger>
            <TooltipContent>
              <p>{row.original.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  },

  // END ACCOUNT
  // EMAIL
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0 hover:bg-none"
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    sortingFn: "alphanumeric",
    cell: ({ row }) => (
      <p className="text-sm min-w-[100px] sm:min-w-none ">
        {row.original.email}
      </p>
    ),
  },
  //END EMAIL
  // DATE JOINED
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
          Date Joined
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
  // END DATE JOINED
  // VALID ID
  {
    accessorKey: "validIdUrl",
    header: "Valid Id",
    cell: ({ row }) => {
      const [isImageLoading, setIsImageLoading] = useState(true); // Loading state for the image

      return (
        <Dialog>
          <DialogTrigger className="text-sm sm:text-base">
            <Badge
              variant={"outline"}
              className="font-medium py-1 px-1.5 text-blue-500 gap-1.5 "
            >
              <SquareArrowOutUpRight className="w-4" />
              View ID
            </Badge>
          </DialogTrigger>
          <DialogContent className="w-full max-w-lg">
            {isImageLoading && (
              <Skeleton className="h-96 w-full" /> // Show skeleton while image is loading
            )}
            <img
              className={`w-full ${isImageLoading ? "hidden" : "block"}`} // Hide image until loaded
              src={row.original.validIdUrl}
              alt="Thumbnail"
              onLoad={() => setIsImageLoading(false)} // Once the image is loaded, hide the skeleton
            />
          </DialogContent>
        </Dialog>
      );
    },
  },
  // END VALID ID

  // STATUS
  {
    accessorKey: "providerVerifiedAt",
    header: "Status",
    cell: ({ row }) => {
      const isVerified = row.original.providerVerifiedAt;
      const isArchived = row.original.archivedAt; // Check if provider is archived
  
      return (
        <Badge variant={isArchived ? "blue" : isVerified ? "green" : "destructive"}>
          {isArchived ? "Archived" : isVerified ? "Verified" : "Pending"}
        </Badge>
      );
    },
  },
  // END STATUS
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const status = row.original.archivedAt;
      const isVerified = row.original.providerVerifiedAt;
      const queryClient = useQueryClient();
      const { mutate: archiveUser } = useArchiveUser();
      const { mutate: unarchiveUser } = useUnArchiveUser();
      const { mutate: deletePost } = useDeleteUserById();
      const { mutate: approveProvider } = useApproveProvider();
      const [isPending, setIsPending] = React.useState(false); // Single loading state
      const [open, setOpen] = React.useState(false);

      const handleMutation = (action: () => void) => {
        setIsPending(true);
        action();
      };

      const mutationHandlers = {
        approve: (id: string) =>
          handleMutation(() =>
            approveProvider(id, {
              onSuccess: () => {
                toast({
                  title: "Success",
                  description: "Provider approved successfully",
                  variant: "default",
                });
                setOpen(false);
                queryClient.invalidateQueries({ queryKey: ["users"] });
              },
              onSettled: () => setIsPending(false),
            })
          ),
        archive: (id: string) =>
          handleMutation(() =>
            archiveUser(id, {
              onSuccess: () => {
                toast({
                  title: "Success",
                  description: "Post archived successfully",
                  variant: "default",
                });
                queryClient.invalidateQueries({ queryKey: ["users"] });
              },
              onSettled: () => setIsPending(false),
            })
          ),
        unarchive: (id: string) =>
          handleMutation(() =>
            unarchiveUser(id, {
              onSuccess: () => {
                toast({
                  title: "Success",
                  description: "Post Removed from archived successfully",
                  variant: "default",
                });
                queryClient.invalidateQueries({ queryKey: ["users"] });
              },
              onSettled: () => setIsPending(false),
            })
          ),
        delete: (id: string) =>
          handleMutation(() =>
            deletePost(id, {
              onSuccess: () => {
                toast({
                  title: "Success",
                  description: "Post deleted successfully",
                  variant: "default",
                });
                setOpen(false);
                queryClient.invalidateQueries({ queryKey: ["users"] });
              },
              onSettled: () => setIsPending(false),
              onError: (error: Error) => {
                toast({
                  title: "Error!",
                  description: "Failed to delete post!!",
                  variant: "destructive",
                });
                setOpen(false);
              },
            })
          ),
      };

      if (isPending) {
        return (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="ml-1.5">
                <LoaderCircle className="animate-spin h-5 w-5 text-gray-600 " />
              </DropdownMenuTrigger>
            </DropdownMenu>
          </>
        ); // Replace the skeleton with the animated loader
      }
      return (
        <Dialog open={open} onOpenChange={setOpen}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>
                <Link
                  to={`/provider-profile/${row.original.id}`}
                  className=" flex gap-2 items-center"
                >
                  <SquareArrowOutUpRight className="w-4" />
                  View Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {isVerified !== null ? (
                <DropdownMenuItem
                  className="px-2 flex gap-2 items-center"
                  onClick={mutationHandlers.archive.bind(
                    null,
                    row.original.id!.toString()
                  )}
                >
                  <Archive className="w-4 text-blue-500" />{" "}
                  <span className="text-blue-500">Archive</span>
                </DropdownMenuItem>
              ) : (
                <>
                  <DropdownMenuItem
                    className="px-2 flex gap-2 items-center"
                    onClick={mutationHandlers.archive.bind(
                      null,
                      row.original.id!.toString()
                    )}
                  >
                    <Archive className="w-4 text-blue-500" />{" "}
                    <span className="text-blue-500">Archive Provider</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="px-2 flex gap-2 items-center"
                    asChild 
                  >
                    <DialogTrigger>
                      <div className="flex items-center gap-2">
                        <CircleCheckBig className="w-4 text-green-500" />
                        <span className="text-green-500">Approve Provider</span>
                      </div>
                    </DialogTrigger>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Dialog for confirming post deletion */}
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Approve Provider</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              Confirm approval for this provider. They will gain access to your
              services. Ensure you trust them before proceeding.
            </DialogDescription>
            <Separator />
            <DialogFooter>
              <DialogClose>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button
                disabled={isPending} // Disable the button while the mutation is pending
                variant="success"
                onClick={() =>
                  mutationHandlers.approve(row.original.id!.toString())
                }
              >
                Approve Provider
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    },
  },
];
