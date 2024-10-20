import {
  resendOtp,
  verifyLoginOtp,
  verifyRegistrationOtp,
} from "@/api/authService";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";

const FormSchema = z.object({
  otp: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export function OtpVerification() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate("/home");
  }

  const location = useLocation();
  const [otpToken, setOtpToken] = useState<string>(
    location.state.token as string
  );
  const [isLoading, setIsLoading] = useState(false); // Loading state for OTP verification

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      otp: "",
    },
  });
  const { toast } = useToast();

  useEffect(() => {
    form.reset();
  }, [otpToken]);

  const handleResendOTP = async () => {
    try {
      const result = await resendOtp(location.state.email, otpToken);
      if (result.success == 1) {
        setOtpToken(result.token);
        navigate("/otp-verification", {
          state: {
            token: otpToken,
            email: result.user.email,
            origin: location.state.origin,
          },
        });
      }
      console.log(result.message);
    } catch (error) {
      toast({
        title: "Resend OTP Error",
        description: "Something went wrong!",
      });
    }
  };

  const handleVerifyOtp = async ({ otp }: z.infer<typeof FormSchema>) => {
    setIsLoading(true); // Set loading state to true
    try {
      let result;
      if (location.state.origin == "register") {
        result = await verifyRegistrationOtp({
          token: otpToken,
          email: location.state.email,
          otp,
        });

        console.log("OTP: ", otp);

        if (result.success == 1) {
          login(result.accessToken);
          navigate("/home");
        }
      } else {
        result = await verifyLoginOtp({
          token: otpToken,
          email: location.state.email,
          otp,
        });

        if (result.success == 1) {
          login(result.accessToken);
          navigate("/home");
        }
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Verification Error",
        description: "There was an issue verifying your OTP.",
      });
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full h-full max-w-md rounded-lg shadow-lg p-6 border">
        <div className="flex justify-center mb-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#0038a9] via-[#ce1127] to-[#f5ce31] bg-clip-text text-transparent">
            ConnectED
          </h1>
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Verify Your Account</h2>
        <p className="text-center text-sm text-gray-400 mb-6">
          Enter the 6-digit code sent to your email.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleVerifyOtp)}
            className="w-full h-full flex flex-col justify-center items-center"
          >
            <div className="flex justify-center items-center space-x-2">
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot
                            index={0}
                            className="border rounded-md"
                          />
                          <InputOTPSlot
                            index={1}
                            className="border rounded-md"
                          />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                          <InputOTPSlot
                            index={2}
                            className="border rounded-md"
                          />
                          <InputOTPSlot
                            index={3}
                            className="border rounded-md"
                          />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                          <InputOTPSlot
                            index={4}
                            className="border rounded-md"
                          />
                          <InputOTPSlot
                            index={5}
                            className="border rounded-md"
                          />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full flex justify-center mb-4 pt-5">
              <Button
                className="text-sm border rounded-md p-2 w-full transition duration-150"
                type="submit"
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? "Verifying..." : "Verify OTP"} {/* Change button text */}
              </Button>
            </div>
          </form>
        </Form>
        <div className="text-center">
          <p className="text-gray-500 mb-2 text-sm">Didn't receive the code?</p>
          <button
            className="hover:underline focus:outline-none text-sm"
            onClick={handleResendOTP}
          >
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
}
