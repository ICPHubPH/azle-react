import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";

const icons = [
  {
    icon: "https://cdn-icons-png.flaticon.com/128/17389/17389629.png",
    name: "Real-Time Collaboration",
    description:
      "Work together with your group in real-time to ensure everyone is on the same page.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/3790/3790039.png",
    name: "Role-Based Access",
    description:
      "Assign roles and permissions to manage your events effectively.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/2139/2139551.png",
    name: "Seamless Event Management",
    description:
      "Keep track of everything with intuitive event management tools.",
  },
];
const FrontPage = () => {
  // TODO: Replace with actual value
  let isSignedIn = false;

  return (
    <div className="min-h-screen ">
      <nav className="w-full py-4 flex gap-4 items-center px-8 bg-card">
        <div className="text-xl font-bold text-card-foreground">TokCards</div>
        <div className="space-x-4">
          {isSignedIn ? (
            <>
              <Button
                variant={"default"}
                asChild
              >
                <Link to="/class">Home</Link>
              </Button>
            </>
          ) : (
            <>
              <Button
                variant={"outline"}
                asChild
              >
                <Link to="/signup">Sign Up</Link>
              </Button>
              <Button
                variant={"default"}
                asChild
              >
                <Link to="/login">Login</Link>
              </Button>

              {/* Dummy for testing */}
              {/* Delete AFTER */}
              <Button
                variant={"default"}
                asChild
              >
                <Link to="/class">Class</Link>
              </Button>
            </>
          )}
        </div>
      </nav>

      <header className="flex-grow flex flex-col justify-center items-center text-center p-8 mb-10">
        <br />
        <br />
        <h1 className="text-5xl font-bold mb-4">
          Lorem ipsum dolor, sit amet consectetur 
        </h1>
        <p className="text-lg mb-8 max-w-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate placeat deserunt et at ipsa assumenda optio enim dignissimos quam dolorem consectetur harum, asperiores quis fugiat praesentium labore deleniti alias delectus.
        </p>
        <div className="flex space-x-4">
          {isSignedIn ? (
            <Button
              variant={"default"}
              asChild
            >
              <Link to="/class">Go to Dashboard</Link>
            </Button>
          ) : (
            <Button
              variant={"default"}
              asChild
            >
              <Link to="/signup">Get Started</Link>
            </Button>
          )}
        </div>

        {/* //TODO: Add Image */}
        {/* <Image
        src={"/samples/preview.png"}
        width={1000}
        height={1000}
        alt="Demo Image"
        className="shadow-lg rounded-md border my-14"
      /> */}
      </header>

      <section className="bg-accent py-10 px-8 flex flex-col">
        <div className="flex  justify-center mb-10">
          <h1 className="text-5xl font-bold">Features</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {icons.map((icon) => (
            <div
              key={icon.name}
              className="flex flex-col items-center"
            >
              <div>
                <img
                  src={icon.icon}
                  alt={icon.name}
                  width={64}
                  height={64}
                />
              </div>
              <h2 className="text-xl font-bold mt-4">{icon.name}</h2>
              <p className="text-center">{icon.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-card text-card-foreground text-center py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8">
            Join us today and never miss an event again.
          </p>
          {/* //TODO: Redundant kaya isip ka ng iba heehhehe */}
          {isSignedIn ? (
            <Button
              variant={"default"}
              asChild
            >
              <Link to="/class">Go to Dashboard</Link>
            </Button>
          ) : (
            <Button
              variant={"default"}
              asChild
            >
              <Link to="/login">Login</Link>
            </Button>
          )}
          <div className="mt-12">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Event++. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FrontPage;
