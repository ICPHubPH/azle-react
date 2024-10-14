import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormMessage, } from "@/components/ui/form";
import { signInSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
const SignIn = () => {
    const [isLoading, setIsLoading] = useState(false);
    const signInForm = useForm({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const onSignIn = async (values) => {
        setIsLoading(true);
        // TODO: Implement sign-in logic
        console.log("Sign in", values);
        setIsLoading(false);
    };
    return (<Card>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Enter your credentials to access your account.
        </CardDescription>
      </CardHeader>
      <Form {...signInForm}>
        <form onSubmit={signInForm.handleSubmit(onSignIn)}>
          <CardContent className="space-y-2">
            <FormField control={signInForm.control} name="email" render={({ field }) => (<FormItem>
                  <Label>Email</Label>
                  <FormControl>
                    <Input placeholder="m@example.com" {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>)}/>
            <FormField control={signInForm.control} name="password" render={({ field }) => (<FormItem>
                  <Label>Password</Label>
                  <FormControl>
                    <Input type="password" {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>)}/>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>);
};
export default SignIn;
