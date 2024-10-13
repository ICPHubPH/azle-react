import Profile from "@/components/avatar";
import Header from "@/layout/Header";
import { Pencil } from "lucide-react";
import { FC, useState } from "react";

const ProfilePage: FC = () => {
  const [userProfile, setUserProfile] = useState("https://github.com/shadcn.png");
  const [preview, setPreview] = useState<string | null>(null);

  const handleChangeProfile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string); // Set the preview state to the uploaded image
        setUserProfile(reader.result as string); // Update the userProfile state
      };
      reader.readAsDataURL(file); // Convert the image file to base64
    }
  };

  return (
    <div className="mx-[75px] flex flex-col gap-y-4">
      <Header />
      <div className="flex flex-col gap-y-4">
        <h1 className="text-3xl font-bold text-lime-700">My Profile</h1>
        <div className="border border-gray-300 shadow-md h-60 rounded-lg flex items-center gap-x-6 px-6 py-4">
          <div className="relative">
            <Profile userProfile={preview || userProfile} style="size-40" />
            <span className="absolute right-2 bottom-2 bg-slate-300 rounded-full p-2 hover:bg-slate-400 transition-colors duration-150 cursor-pointer">
              <label htmlFor="profile-upload" aria-label="Change Profile Picture">
                <Pencil size={15} aria-hidden="true" />
              </label>
              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleChangeProfile} 
              />
            </span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-2xl font-bold">Gian Carlo Villar</span>
            <span className="text-slate-600">San Jose Del Monte, Bulacan</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
