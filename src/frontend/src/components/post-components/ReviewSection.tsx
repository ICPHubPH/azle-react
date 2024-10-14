import { dummyFeedbacks, dummyUsers } from "@/pages/landing/dummy-data";
import Feedback from "../review/Feedback";

export default function ReviewSection() {
  return (
    <div className="min-h-96 h-full w-96 flex flex-col gap-2">
      <h1 className="text-xl tracking-tight font-semibold">Reviews</h1>
      <div className="flex flex-col justify-start items-center gap-2">
        <Feedback user={dummyUsers[0]} feedback={dummyFeedbacks[0]} />
        <Feedback user={dummyUsers[1]} feedback={dummyFeedbacks[1]} />
      </div>
    </div>
  );
}
