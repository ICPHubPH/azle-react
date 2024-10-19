import Feedback from "@/components/review/Feedback";
import { Feedback as FeedbackModel, User } from "@/types/model";

interface ReviewSectionProps {
  feedbacks: FeedbackModel[]; // Accept feedbacks as a prop
}

export default function ReviewSection({ feedbacks }: ReviewSectionProps) {
  return (
    <div className="min-h-96 h-full w-full md:w-full lg:w-96 flex flex-col gap-2">
      <h1 className="text-xl tracking-tight font-semibold">Reviews</h1>
      <div className="flex flex-col justify-start items-center gap-2">
        {feedbacks.map((feedback) => (
          <Feedback key={feedback.id} user={feedback.user} feedback={feedback} />
        ))}
      </div>
    </div>
  );
}
