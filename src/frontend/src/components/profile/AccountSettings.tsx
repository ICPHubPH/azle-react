import { useState, FormEvent } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Eye, EyeOff, AlertTriangle } from "lucide-react";
import UploadValidId from "@/components/provider-component/UploadValidId";

interface AccountSettingsProps {
  user: { name: string; email: string };
  setUser: React.Dispatch<React.SetStateAction<{ name: string; email: string; avatar: string }>>;
}

export default function AccountSettings({ user, setUser }: AccountSettingsProps) {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState("");

  const toggleShowPassword = (setter: React.Dispatch<React.SetStateAction<boolean>>) => () => setter(prev => !prev);

  const handleChangePassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement password change logic here
  };

  const handleDeleteAccount = () => {
    if (deleteConfirmation === user.name) {
      console.log("Account deleted");
      setIsDeleteModalOpen(false);
    } else {
      alert("Please enter your username correctly to confirm deletion.");
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
      <UploadValidId />
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" defaultValue={user.name} onChange={(e) => setUser(prev => ({ ...prev, name: e.target.value }))} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue={user.email} onChange={(e) => setUser(prev => ({ ...prev, email: e.target.value }))} />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Change Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleChangePassword} className="space-y-4">
            {['Old', 'New', 'Confirm'].map((type) => (
              <div key={type} className="space-y-2 relative">
                <Label htmlFor={`${type.toLowerCase()}Password`}>{`${type} Password`}</Label>
                <Input
                  id={`${type.toLowerCase()}Password`}
                  type={type === 'Old' ? (showOldPassword ? "text" : "password") :
                        type === 'New' ? (showNewPassword ? "text" : "password") :
                        (showConfirmPassword ? "text" : "password")}
                  required
                />
                <button
                  type="button"
                  onClick={toggleShowPassword(
                    type === 'Old' ? setShowOldPassword :
                    type === 'New' ? setShowNewPassword :
                    setShowConfirmPassword
                  )}
                  className="absolute right-3 top-8 focus:outline-none"
                >
                  {type === 'Old' ? (showOldPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />) :
                   type === 'New' ? (showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />) :
                   (showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />)}
                </button>
              </div>
            ))}
            <Button type="submit">Change Password</Button>
          </form>
        </CardContent>
      </Card>

      <Card className="mb-6 border-red-600">
        <CardHeader>
          <CardTitle className="text-lg text-red-600">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-red-600 text-white">Delete Account</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px]">
              <DialogHeader>
                <AlertTriangle className="h-6 w-6 text-red-500 mb-2" />
                <DialogTitle>Delete Account</DialogTitle>
                <DialogDescription>
                  This action is irreversible. All your data will be permanently removed.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <Input
                  value={deleteConfirmation}
                  onChange={(e) => setDeleteConfirmation(e.target.value)}
                  placeholder={`Type "${user.name}" to confirm`}
                  className="w-full"
                />
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDeleteModalOpen(false)}>
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={handleDeleteAccount}
                  disabled={deleteConfirmation !== user.name}
                >
                  Delete Account
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
}