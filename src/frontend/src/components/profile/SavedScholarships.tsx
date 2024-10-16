import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const savedScholarships = [
  {
    id: 4,
    title: "Environmental Studies Award",
    provider: "Green Earth Foundation",
    deadline: "2024-10-15",
  },
  {
    id: 5,
    title: "Future Entrepreneurs Scholarship",
    provider: "Business Leaders of Tomorrow",
    deadline: "2024-11-30",
  },
];

export default function SavedScholarships() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Saved Scholarships</h2>
      {savedScholarships.map((scholarship) => (
        <Card key={scholarship.id} className="mb-4">
          <CardHeader>
            <CardTitle>{scholarship.title}</CardTitle>
            <CardDescription>{scholarship.provider}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Deadline: {scholarship.deadline}
            </p>
          </CardContent>
          <CardFooter>
            <Button>View Details</Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}