import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { ToastAction } from "@/components/ui/toast";    
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";


export function OtpVerification() {
    const { toast } = useToast();
    const navigate = useNavigate() 


    const handleResendOTP = () => {
        toast({
            title: "Wait",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
        });
    };

    const handleVerifyOtp = () => {
        navigate('/auth')
    }

    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-md rounded-lg shadow-lg p-6 border">
                <h2 className="text-2xl font-semibold text-center mb-4">Enter OTP</h2>
                <p className="text-center mb-6">
                    Please enter the 6-digit code sent to your email.
                </p>
                <div className="flex justify-center items-center space-x-2">
                    <InputOTP maxLength={6}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} className="border rounded-md" />
                            <InputOTPSlot index={1} className="border rounded-md" />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={2} className="border rounded-md" />
                            <InputOTPSlot index={3} className="border rounded-md" />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={4} className="border rounded-md" />
                            <InputOTPSlot index={5} className="border rounded-md" />
                        </InputOTPGroup>
                    </InputOTP>
                </div>
                <div className="flex justify-center mb-4 pt-10">
                    <button className="text-sm border rounded-md p-2 w-full transition duration-150"
                    onClick={handleVerifyOtp}>
                        Verify OTP
                    </button>
                </div>
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
