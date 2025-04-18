import GoogleIcon from "@/assets/icons/google"
import FadeTransition from "@/components/fade-transition"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

function LoginPage() {
    return (
        <FadeTransition>
            <div className="min-h-screen flex items-center justify-center bg-white px-4">
                <div className="w-full max-w-sm">
                    <h1 className="text-3xl font-semibold text-center mb-8">Login</h1>

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

                    <Button variant="default" size="lg" className="mt-5 w-full">Login</Button>

                    <p className="text-center text-sm mt-4">
                        Belum punya akun?{" "}
                        <Link to="/auth/register" className="font-semibold hover:underline">
                            Daftar
                        </Link>
                    </p>

                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t" />
                        <span className="mx-2 text-sm text-gray-400">or</span>
                        <div className="flex-grow border-t" />
                    </div>

                    <Button variant="outline" className="w-full" size="lg">
                        <GoogleIcon />
                        Login dengan Google
                    </Button>
                </div>
            </div>
        </FadeTransition>
    )
}

export default LoginPage