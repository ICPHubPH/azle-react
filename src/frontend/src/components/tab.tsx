type TabProps = {
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    isActive: boolean;
    onClick: () => void;
};

const Tab: React.FC<TabProps> = ({ label, icon: Icon, isActive, onClick }) => {

    return (
        <div
            className="group flex flex-col items-center cursor-pointer"
            role="button"
            aria-pressed={isActive}
            onClick={onClick}
        >
            <div className="flex items-center">
                {isActive && <Icon className="mr-2" />}
                <span className={`font-medium text-lg ${isActive ? "text-black" : "text-gray-500"}`}>{label}</span>
            </div>
            {isActive && (
                <span className="block h-1 w-full bg-lime-500 mt-2"></span>
            )}
        </div>
    );
}

export default Tab;