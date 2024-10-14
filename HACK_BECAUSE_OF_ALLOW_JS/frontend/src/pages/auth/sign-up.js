import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormMessage, } from "@/components/ui/form";
import { signUpSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
const SignUp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const signUpForm = useForm({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
    });
    const onSignUp = async (values) => {
        setIsLoading(true);
        // TODO: Implement sign-in logic
        console.log("Sign in", values);
        setIsLoading(false);
    };
    return (<Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          Welcome to Iskolar PH! <br />
          Create a new account to get started.
        </CardDescription>
      </CardHeader>
      <Form {...signUpForm}>
        <form onSubmit={signUpForm.handleSubmit(onSignUp)}>
          <CardContent className="space-y-2">
            <FormField control={signUpForm.control} name="email" render={({ field }) => (<FormItem>
                  <Label>Email</Label>
                  <FormControl>
                    <Input placeholder="m@example.com" {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>)}/>
            <FormField control={signUpForm.control} name="password" render={({ field }) => (<FormItem>
                  <Label>Password</Label>
                  <FormControl>
                    <Input type="password" {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>)}/>
            <FormField control={signUpForm.control} name="confirmPassword" render={({ field }) => (<FormItem>
                  <Label>Confirm Password</Label>
                  <FormControl>
                    <Input type="password" {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>)}/>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing up..." : "Sign Up"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>);
};
export default SignUp;
