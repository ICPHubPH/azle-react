import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type StoriesCardProps = {
    storyImg : string;
    projectName: string;
    description: string;
};

const StoriesCard: React.FC<StoriesCardProps> = ({ ...params }) => {
    return (
        <Card className="rounded-lg shadow-lg overflow-hidden">
            <CardHeader>
                <img
                    className="bg-slate-400 rounded-t-lg object-cover"
                    height={500}
                    width={800}
                    src={params.storyImg}
                    alt="story"
                /> 
            </CardHeader>
            <CardContent className="text-center p-2">
                <CardTitle className="font-bold text-lg text-gray-800 mb-2">{params.projectName}</CardTitle>
                <CardDescription className="text-gray-600 text-ellipsis">{params.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-4 border-t flex justify-center">
                <a
                    href="/"
                    aria-label="more"
                    className="inline-flex items-center text-lima-600 hover:text-lima-500 transition-colors duration-200"
                >  
                    <span className="underline">More</span>
                    <span className="ml-1">&rarr;</span> 
                </a>
            </CardFooter>
        </Card>
    );
}

export default StoriesCard;
