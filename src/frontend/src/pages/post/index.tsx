import PostSection from "@/components/post-components/PostSection";
import ReviewSection from "@/components/post-components/ReviewSection";
import ProviderHeader from "@/components/provider-component/Header";
import StudentHeader from "@/components/student-component/Header";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function PostPage() {
  const navigate = useNavigate(); // Initialize navigate

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
    toast.info("Back to feed"); // Show toast notification
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex justify-start w-full px-36 mb-4">
        <Button
          variant={null}
          size={"lg"}
          className="flex gap-2 px-0"
          onClick={handleBack} // Call handleBack on button click
        >
          <MoveLeft />
          Back to feed
        </Button>
      </div>
      <div className="flex justify-center items-start gap-4 w-[80%] pb-10 flex-col md:flex-col lg:flex-row">
        <PostSection />
        <ReviewSection />
      </div>
    </div>
  );
}
