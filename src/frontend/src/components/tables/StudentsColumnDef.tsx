import { User } from "@/types/model";
import { ColumnDef } from "@tanstack/react-table";
import {
  Archive,
  CircleCheckBig,
  LoaderCircle,
  MoreHorizontal,
  SquareArrowOutUpRight,
  Trash,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  useArchiveUser,
  useDeleteUserById,
} from "@/hooks/useUserData";
import { Link } from "react-router-dom";
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
import { Separator } from "@radix-ui/react-select";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "@/hooks/use-toast";

export const studentsColumns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "Account",
    cell: ({ row }) => (
      <div className="flex flex-row items-center gap-2 sm:gap-3">
        <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
          <AvatarImage src={row.original.avatarUrl} />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
        <p className="text-sm sm:text-base">{row.original.name}</p>
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <p className="text-sm sm:text-base truncate max-w-[150px] sm:max-w-none">
        {row.original.email}
      </p>
    ),
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const queryClient = useQueryClient();
      const { mutate: archiveUser } = useArchiveUser();
      const { mutate: deleteUser } = useDeleteUserById();
      const [isPending, setIsPending] = React.useState(false); // Single loading state
      const [open, setOpen] = React.useState(false);

      const handleMutation = (action: () => void) => {
        setIsPending(true);
        action();
      };

      const mutationHandlers = {
        archiveUser: (id: string) =>
          handleMutation(() =>
            archiveUser(id, {
              onSuccess: () => {
                toast({
                  title: "Success",
                  description: "User archived successfully",
                  variant: "default",
                });
                queryClient.invalidateQueries({ queryKey: ["users"] });
              },
              onSettled: () => setIsPending(false),
            })
          ),
        deleteUser: (id: string) =>
          handleMutation(() =>
            deleteUser(id, {
              onSuccess: () => {
                toast({
                  title: "Success",
                  description: "User deleted successfully",
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

              <DropdownMenuItem
                className="px-2 flex gap-2 items-center"
                onClick={mutationHandlers.archiveUser.bind(
                  null,
                  row.original.id!.toString()
                )}
              >
                <Archive className="w-4 text-blue-500" />{" "}
                <span className="text-blue-500">Archive User</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="px-2 flex gap-2 items-center"
                asChild
              >
                <DialogTrigger>
                  <div className="flex items-center gap-2">
                    <Trash className="w-4 text-red-500" />
                    <span className="text-red-500">Delete User</span>
                  </div>
                </DialogTrigger>
              </DropdownMenuItem>
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
                variant="destructive"
                onClick={() =>
                  mutationHandlers.deleteUser(row.original.id!.toString())
                }
              >
                Delete User
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    },
  },
];
