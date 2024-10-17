import { useState } from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { TrackPreviousIcon } from "@radix-ui/react-icons";
import { ArrowLeft } from "lucide-react";
// import { FormInputIcon } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

function Signup() {
  const [greeting, setGreeting] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { username, email, password } = values;

    console.log(values);
  }

  return (
    <div className="flex items-center justify-center h-full w-full relative">
      {/* //TODO: Pakihanap nalang actual size */}
      <Button asChild className="fixed top-5 left-5">
        <Link to="/"> <span><ArrowLeft size={15}/> </span>Back</Link>
      </Button>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-background p-8 rounded-lg min-w-[300px] shadow-[0px_2px_4px_rgba(0,0,0,0.02),_0px_0px_0px_1.5px_rgba(27,31,35,0.15)]"
        >
          <h1 className="text-2xl font-bold text-center mb-5">Sign up</h1>

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    autoComplete="off"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    autoComplete="off"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    autoComplete="off"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-end mt-5 justify-between">
            <Button
              className="font-bold"
              type="submit"
            >
              Submit
            </Button>
            <Link
              to="/login"
              className="bg-secondary text-foreground"
            >
              <Button variant={"outline"}>Log in</Button>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default Signup;
