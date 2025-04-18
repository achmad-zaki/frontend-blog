import FadeTransition from "@/components/fade-transition"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Link } from "react-router-dom"

function RegisterPage() {
    return (
        <FadeTransition>
            <div className="min-h-screen flex items-center justify-center bg-white px-4">
                <div className="w-full max-w-sm">
                    <h1 className="text-3xl font-semibold text-center mb-8">Register</h1>

                    <div className="space-y-5">
                        <div className="space-y-2">
                            <Label>Username</Label>
                            <Input type="text" />
                        </div>

                        <div className="space-y-2">
                            <Label>Email</Label>
                            <Input type="email" />
                        </div>

                        <div className="space-y-2">
                            <Label>Password</Label>
                            <Input type="password" />
                        </div>
                    </div>

                    <Button variant="default" size="lg" className="mt-5 w-full">Daftar</Button>

                    <p className="text-center text-sm mt-4">
                        Sudah punya akun? silahkan{" "}
                        <Link to="/auth/login" className="font-semibold hover:underline">
                            Login
                        </Link>
                    </p>

                </div>
            </div>
        </FadeTransition>
    )
}

export default RegisterPage