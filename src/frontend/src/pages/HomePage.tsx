import ResourceCard from "@/components/stories-card";
import Tab from "@/components/tab";
import Footer from "@/layout/Footer";
import Header from "@/layout/HomeLayout/Header";
import HomeContent from "@/layout/HomeLayout/Home";
import { Home, Star, Trophy } from "lucide-react";
import { useState } from "react";

type Stories = {
    storyImg: string;
    projectName: string;
    description: string;
};

const HomePage = () => {
    const [activeTab, setActiveTab] = useState<string>("Home");

    const resources: Stories[] = [
        { storyImg: "", projectName: "Project Name", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { storyImg: "", projectName: "Project Name", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    ];

    return (
        <main className="h-screen mx-[75px] flex flex-col gap-y-4">
            <Header />
            <div className="flex gap-x-6">
                <aside className="flex flex-col gap-y-2 w-1/4">
                    <nav className="flex gap-x-8">
                        <Tab label="Home" icon={Home} isActive={activeTab === "Home"} onClick={() => setActiveTab("Home")} />
                        <Tab label="Ranking" icon={Trophy} isActive={activeTab === "Ranking"} onClick={() => setActiveTab("Ranking")} />
                        <Tab label="Favorites" icon={Star} isActive={activeTab === "Favorites"} onClick={() => setActiveTab("Favorites")} />
                    </nav>
                    <section className="p-4 h-full rounded-lg bg-[#ECEDED]">
                        <h2 className="text-xl font-semibold mb-4">Stories</h2>
                        <div className="flex flex-col gap-y-4">
                            {resources.map((resource, index) => (
                                <ResourceCard
                                    key={index}
                                    storyImg={resource.storyImg}
                                    projectName={resource.projectName}
                                    description={resource.description}
                                />
                            ))}
                        </div>
                    </section>
                </aside>

                {/* CONTENT */}
                <section className="flex-1">
                    {activeTab === "Home" ? (
                        <HomeContent />
                    ) : activeTab === "Ranking" ? (
                        <p>Rankings</p>
                    ) : activeTab === "Favorites" ? (
                        <p>Favorites</p>
                    ) : null}
                </section>
            </div>
            <Footer />
        </main>
    );
};

export default HomePage;
