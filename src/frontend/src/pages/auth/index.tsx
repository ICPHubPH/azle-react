import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/use-auth";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "./sign-in";
import SignUp from "./sign-up";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin");
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    navigate("/home");
  }

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md relative">
        <button
          onClick={handleBackClick}
          className="absolute top-4 left-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Go back to landing page"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <CardHeader className="space-y-1 pt-10">
          <div className="flex justify-center mb-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#0038a9] via-[#ce1127] to-[#f5ce31] bg-clip-text text-transparent">
              ConnectED
            </h1>
          </div>
          <CardTitle className="text-xl font-semibold text-center">
            {activeTab === "signin" ? "Welcome back" : "Create an account"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
              <SignIn />
            </TabsContent>
            <TabsContent value="signup">
              <SignUp />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500">
            {activeTab === "signin"
              ? "Don't have an account? "
              : "Already have an account? "}
            <Button
              variant="link"
              className="p-0 h-auto font-normal"
              onClick={() =>
                setActiveTab(activeTab === "signin" ? "signup" : "signin")
              }
            >
              {activeTab === "signin" ? "Sign up" : "Sign in"}
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
