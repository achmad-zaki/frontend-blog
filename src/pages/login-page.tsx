import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function LoginPage() {
    return (
        <div className="h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="hidden md:block">thumbnail</div>
                <div className="min-h-screen flex items-center justify-center bg-white px-4">
                    <div className="w-full max-w-sm">
                        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>

                        <div className="space-y-5">
                            {/* Mobile Number */}
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <Input />
                            </div>

                            {/* Password */}
                            <div className="space-y-2">
                                <Label>Password</Label>
                                <Input type="password" />
                            </div>
                        </div>


                        {/* Login button */}
                        <Button variant="default" size="lg" className="mt-5">Login</Button>

                        {/* Sign up */}
                        <p className="text-center text-sm mt-4">
                            Don’t have an account?{" "}
                            <a href="#" className="font-semibold hover:underline">
                                Sign Up
                            </a>
                        </p>

                        {/* OR Divider */}
                        <div className="flex items-center my-4">
                            <div className="flex-grow border-t" />
                            <span className="mx-2 text-sm text-gray-400">or</span>
                            <div className="flex-grow border-t" />
                        </div>

                        {/* Continue as Guest */}
                        <p className="text-center text-sm text-gray-500 mt-4">
                            <a href="#" className="hover:underline">
                                Continue as Guest
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage