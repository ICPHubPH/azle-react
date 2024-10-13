import PostSection from "@/components/post-components/PostSection";
import ReviewSection from "@/components/post-components/ReviewSection";
import ProviderHeader from "@/components/provider-component/Header";
import StudentHeader from "@/components/student-component/Header";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { toast } from "sonner";

export default function PostPage() {
  return (
    <div className="min-h-screen h-full w-full flex flex-col gap-x-10 gap-y-5">
      {false ? <ProviderHeader /> : <StudentHeader />}
      <div className="pl-36">
        <Button
          variant={null}
          size={"lg"}
          className="flex gap-2 px-0"
          onClick={(e) => {
            e.preventDefault();
            toast.info("Back to feed");
          }}
        >
          <MoveLeft />
          Back to feed
        </Button>
      </div>
      <div className="h-full flex justify-center items-start gap-4 w-[80%] mx-auto pb-10">
        <PostSection />
        <ReviewSection />
      </div>
    </div>
  );
}

// components:
// Post Section
// Reviews Section
