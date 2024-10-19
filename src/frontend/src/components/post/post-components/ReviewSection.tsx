import Feedback from "@/components/review/Feedback";
import { Feedback as FeedbackModel } from "@/types/model";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ReviewSectionProps {
  feedbacks: FeedbackModel[];
}

export default function ReviewSection({ feedbacks }: ReviewSectionProps) {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Reviews</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-200px)] pr-4">
          {feedbacks.length > 0 ? (
            <div className="space-y-4">
              {feedbacks.map((feedback) => (
                <Feedback key={feedback.id} user={feedback.user} feedback={feedback} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No reviews yet.</p>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}