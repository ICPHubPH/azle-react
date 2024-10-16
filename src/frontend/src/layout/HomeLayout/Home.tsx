import FeaturedCard from "@/components/featured-card";
import TutorialCard from "@/components/tutorial-card";
import { ScrollArea } from "@/components/ui/scroll-area";

const HomeContent = () => {

    const featured = {
        image: 'plants-being-planted-greenhouse.png', title: "lorem Ipsum ", description: "lLorem ipsum dolor sit, amet consectetur adipisicing elit. Iure repellendus modi deleniti dolores? Explicabo quisquam nihil tempore dolor vel facere odit voluptates. Deserunt modi atque reprehenderit non ratione. Corporis, molestiae"
    }

    return (
        <div className="flex flex-col gap-y-4 h-full">
            <div className="h-72 ">
                <FeaturedCard
                    title={featured.title}
                    description={featured.description}
                    image={featured.image}
                />
            </div>

            <div className="flex flex-col h-full gap-y-2">
                <h1 className="font-bold text-3xl">Tutorials</h1>
                <ScrollArea className="h-[40rem]">
                    <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6 overflow-y-auto px-2">
                        {
                            [
                                {
                                    id: 1,
                                    tutorialImage: "https://oneacrefund.org/sites/default/files/styles/banner_large_desktop/public/2024-04/TZN_0819.jpg?h=2e5cdddf&itok=ExHuaX_n",
                                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybsd7cw9VxpeBObuBE90Al3a1OB0kgPhyHg&s",
                                    profileName: "John Doe",
                                    title: "Intro to Urban Farming",
                                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboriosam ut eos labore sit in sint."
                                },
                                {
                                    id: 2,
                                    tutorialImage: "https://oneacrefund.org/sites/default/files/styles/banner_large_desktop/public/2024-04/TZN_0819.jpg?h=2e5cdddf&itok=ExHuaX_n",
                                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybsd7cw9VxpeBObuBE90Al3a1OB0kgPhyHg&s",
                                    profileName: "John Doe",
                                    title: "Intro to Urban Farming",
                                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboriosam ut eos labore sit in sint."
                                },
                                {
                                    id: 3,
                                    tutorialImage: "https://oneacrefund.org/sites/default/files/styles/banner_large_desktop/public/2024-04/TZN_0819.jpg?h=2e5cdddf&itok=ExHuaX_n",
                                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybsd7cw9VxpeBObuBE90Al3a1OB0kgPhyHg&s",
                                    profileName: "John Doe",
                                    title: "Intro to Urban Farming",
                                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboriosam ut eos labore sit in sint."
                                },
                                {
                                    id: 4,
                                    tutorialImage: "https://oneacrefund.org/sites/default/files/styles/banner_large_desktop/public/2024-04/TZN_0819.jpg?h=2e5cdddf&itok=ExHuaX_n",
                                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybsd7cw9VxpeBObuBE90Al3a1OB0kgPhyHg&s",
                                    profileName: "John Doe",
                                    title: "Intro to Urban Farming",
                                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboriosam ut eos labore sit in sint."
                                },
                                {
                                    id: 5,
                                    tutorialImage: "https://oneacrefund.org/sites/default/files/styles/banner_large_desktop/public/2024-04/TZN_0819.jpg?h=2e5cdddf&itok=ExHuaX_n",
                                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybsd7cw9VxpeBObuBE90Al3a1OB0kgPhyHg&s",
                                    profileName: "John Doe",
                                    title: "Intro to Urban Farming",
                                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboriosam ut eos labore sit in sint."
                                },
                                {
                                    id: 6,
                                    tutorialImage: "https://oneacrefund.org/sites/default/files/styles/banner_large_desktop/public/2024-04/TZN_0819.jpg?h=2e5cdddf&itok=ExHuaX_n",
                                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybsd7cw9VxpeBObuBE90Al3a1OB0kgPhyHg&s",
                                    profileName: "John Doe",
                                    title: "Intro to Urban Farming",
                                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboriosam ut eos labore sit in sint."
                                },
                                {
                                    id: 7,
                                    tutorialImage: "https://oneacrefund.org/sites/default/files/styles/banner_large_desktop/public/2024-04/TZN_0819.jpg?h=2e5cdddf&itok=ExHuaX_n",
                                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybsd7cw9VxpeBObuBE90Al3a1OB0kgPhyHg&s",
                                    profileName: "John Doe",
                                    title: "Intro to Urban Farming",
                                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboriosam ut eos labore sit in sint."
                                },
                                {
                                    id: 8,
                                    tutorialImage: "https://oneacrefund.org/sites/default/files/styles/banner_large_desktop/public/2024-04/TZN_0819.jpg?h=2e5cdddf&itok=ExHuaX_n",
                                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybsd7cw9VxpeBObuBE90Al3a1OB0kgPhyHg&s",
                                    profileName: "John Doe",
                                    title: "Intro to Urban Farming",
                                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboriosam ut eos labore sit in sint."
                                },
                            ].map(value => (
                                <TutorialCard
                                    key={value.id}
                                    tutorialImage={value.tutorialImage}
                                    profileImage={value.profileImage}
                                    profileName={value.profileName}
                                    title={value.title}
                                    description={value.description}
                                />
                            ))
                        }
                    </div>
                </ScrollArea>
            </div>

        </div>
    )
}

export default HomeContent