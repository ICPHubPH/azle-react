import FeaturedCard from "@/components/featured-tutorial";

const HomeContent = () => {

    const featured = {
        image : 'plants-being-planted-greenhouse.png', title : "lorem Ipsum ", description : "lLorem ipsum dolor sit, amet consectetur adipisicing elit. Iure repellendus modi deleniti dolores? Explicabo quisquam nihil tempore dolor vel facere odit voluptates. Deserunt modi atque reprehenderit non ratione. Corporis, molestiae"
    }

    return (
        <div className="flex flex-col">
            <FeaturedCard
                title={featured.title}
                description={featured.description}
                image={featured.image}
            />
            <div>

            </div>
        </div>
    )
}

export default HomeContent