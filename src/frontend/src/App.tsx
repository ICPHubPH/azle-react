import { useEffect, useState } from "react";
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
import { User } from "../../types/UserTypes";

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
  const [data, setData] = useState<User[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_CANISTER_URL}/get_users`
      );
      const data: User[] = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>): Promise<void> {
    const user: User = values;

    const url = "https://bkyz2-fmaaa-aaaaa-qaaaq-cai/add_user";
    // const response = await fetch(url, {
    const response = await fetch(
      `${import.meta.env.VITE_CANISTER_URL}/add_user`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    if (response.ok) {
      const data = await response.json();
      
      console.log(data);
    }
    window.location.reload();

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
      <div>
        {/* <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
        <h1>{data ? JSON.stringify(data) : "No data available"}</h1>
      </div>
    </main>
  );
}

export default App;
