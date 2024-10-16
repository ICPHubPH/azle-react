import Profile from "@/components/avatar";
import Footer from "@/layout/Footer";
import Header from "@/layout/HomeLayout/Header";
import { Pencil, UserRoundPen } from "lucide-react";
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
        setUserProfile(reader.result as string);
      };
      reader.readAsDataURL(file); // Convert the image file to base64
    }
  };

  return (
    <div className="mx-[75px] flex flex-col gap-y-4">
      <Header />
      <div className="flex flex-col gap-y-4">
        <h1 className="text-3xl font-bold text-lime-700">My Profile</h1>

        <div className="border border-gray-200 shadow-lg h-64 rounded-xl bg-white flex items-center gap-x-6 px-6 py-4">
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

        {/* User Information */}
        <div className="relative border border-gray-200 shadow-lg h-64 rounded-xl p-6 bg-white">
          <h1 className="text-2xl font-bold text-lime-700 mb-6">User Information</h1>

          <div className="grid grid-cols-2 gap-x-8 items-center">
            {/* first column */}
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">Full Name</span>
                <span className="text-lg font-medium text-gray-800">John Doe</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">Email Address</span>
                <span className="text-lg font-medium text-gray-800">Darvey234244@gmail.com</span>
              </div>
            </div>

            {/* second column */}
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">Country</span>
                <span className="text-lg font-medium text-gray-800">Third World Country</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">City/State</span>
                <span className="text-lg font-medium text-gray-800">San Jose Arthur Robes</span>
              </div>
            </div>

            {/* Edit Button */}
            <button className="absolute right-3 top-3 bg-lime-700 text-white font-medium flex items-center justify-center gap-x-2 px-4 py-2 rounded-lg hover:bg-lime-600 transition-transform transform hover:scale-[1.05] focus:ring focus:ring-lime-400">
              <UserRoundPen className="w-4 h-4" />
              <span>Edit</span>
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="border border-gray-200 shadow-lg h-96 rounded-xl p-6 bg-white">
           <h1 className="text-2xl font-bold text-lime-700 mb-6">Timeline</h1>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
