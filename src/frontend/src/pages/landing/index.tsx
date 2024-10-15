import React from "react";
import { Separator } from "@/components/ui/separator";
import Testimonies from "@/components/landing/testimonies/Testimonies";
import Providers from "@/components/landing/donor/Providers";
import Header from "@/components/landing/Header";
import {
  dummyFeedbacks,
  dummyPosts,
  dummyTopProviders,
  dummyUsers,
} from "./dummy-data";
import CreatePost from "@/components/post-form/CreatePost";
import TopProviderCard from "@/components/provider-component/top-providers/TopProviderCard";
import PostSummaryCard from "@/components/post-summary/PostSummaryCard";
import Feedback from "@/components/review/Feedback";
import Footer from "@/components/footer/Footer";
import { useNavigate } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Users, Smile, Zap, TrendingUp, UserPlus } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="scroll-smooth">
      <Header />
      <div
        className="flex flex-col items-center justify-center h-screen"
        id="home"
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold">
          Welcome to{" "}
          <span className="text-7xl font-bold dark:text--200 bg-gradient-to-r from-[#0038a9] via-[#ce1127] to-[#f5ce31] bg-clip-text text-transparent">
            ConnectED
          </span>
        </h1>
        <p className="text-lg text-gray-800 dark:text-gray-200">
          Your Trusted Gateway to Scholarships and Internships.
        </p>
      </div>
      <Separator />
      
      {/** TEST POST ONLY */}
      <div className="flex flex-col gap-4 items-center container mx-auto">
      <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center py-20">
              What&apos;s different about ConnectEd?
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Centralized Platform for Scholarships and Internships</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>ConnectED brings together a wide range of scholarships and internships 
                    in one place, making it easier than ever to explore, compare, and discover 
                    the opportunities that are right for you.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Verified Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                  Focus on applying with confidence, knowing that every opportunity 
                  on our platform is authentic.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Empowering Organizations to Reach the Right Candidates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p> ConnectED makes it easy to reach qualified candidates. 
                    With verified student profiles and a targeted user base, 
                    your opportunities will get in front of the people who matter.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Supports remote work policies while improving team collaboration.</p>
                </CardContent>
              </Card>
            </div>
          </div>
      </div>

      {/* test only for top providers */}

      <div className="flex flex-col gap-4 items-center container mx-auto mt-6">
      <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center py-20">
              What We Have to Offer?
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Briefcase, title: "Flexibility at Your Fingertips" },
                { icon: Users, title: "Boosted Collaboration" },
                { icon: Smile, title: "Employee Satisfaction" },
                { icon: Zap, title: "Technology-Driven Process" },
                { icon: TrendingUp, title: "Improved Productivity" },
                { icon: UserPlus, title: "Efficient Onboarding Process" },
              ].map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <item.icon className="h-6 w-6 mb-2" />
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
      </div>

      <CreatePost />

      {/* TEST FEEDBACKS */}
      <div className="flex flex-col gap-4 items-center container mx-auto mt-6 pb-10">
        <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center py-20">
              Still have questions?
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {[
                { question: "What is ConnectEd?", answer: "ConnectEd is a workspace management system designed to facilitate flexible and efficient use of office spaces." },
                { question: "How does ConnectEd work?", answer: "ConnectEd allows employees to book desks, meeting rooms, and other resources through an intuitive interface, while providing administrators with tools to manage and optimize workspace utilization." },
                { question: "Can I customize my workspace?", answer: "Yes, ConnectEd offers customization options to tailor the system to your organization's specific needs and branding." },
                { question: "Is ConnectEd free?", answer: "ConnectEd offers various pricing tiers, including a free trial. Please contact our sales team for detailed pricing information." },
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
      </div>
      <Separator />

      {/*test footer */}

      <Footer />
    </div>
  );
};

export default Home;
