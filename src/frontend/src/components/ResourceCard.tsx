type ResourceCardProps = {
    description: string;
    date: string;
  };
  
const ResourceCard: React.FC<ResourceCardProps> = ({ description, date }) => {
    return (
    <div className="p-4 border-b border-gray-300">
      <div className="flex justify-between">
        <p>{description}</p>
        <span className="text-lime-600 font-medium cursor-pointer hover:underline">View</span>
      </div>
      <p className="text-sm text-gray-500 mt-2">published: {date}</p>
    </div>
   );
}
   
export default ResourceCard;
  