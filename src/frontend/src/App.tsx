import { useState } from "react";
import { Button } from "./components/ui/button";
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
import { FormInputIcon } from "lucide-react";

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

function App() {
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
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const { username, email, password } = values;
    fetch(`${import.meta.env.VITE_CANISTER_URL}/greet?name=${username}`)
      .then((response) => response.json())
      .then((json) => {
        setGreeting(json.greeting);
      });
    console.log(values);
  }

  // function handleSubmit(event: any) {
  //   event.preventDefault();
  //   const name = event.target.elements.name.value;
  //   fetch(`${import.meta.env.VITE_CANISTER_URL}/greet?name=${name}`)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setGreeting(json.greeting);
  //     });
  // }

  return (
    <main className="flex flex-col justify-center items-center h-screen w-screen">
      {/* <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <Button type="submit" className="bg-red-500">
          Hey hey!
        </Button>
      </form>
      <section id="greeting">{greeting}</section> */}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" bg-secondary p-8 rounded-lg min-w-[300px]"
        >
          <h1 className="text-xl font-bold font-mono text-center mb-5">
            Welcome to DFINITY
          </h1>

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} autoComplete="off" />
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
                  <Input {...field} type="email" autoComplete="off" />
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
                  <Input {...field} type="password" autoComplete="off" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-end mt-5">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </main>
  );
}

export default App;
