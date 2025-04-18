import { Outlet } from "react-router-dom"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { CarouselImages } from "@/assets/image-carousel/carousel"

function AuthLayout() {

    return (
        <div className="min-h-screen overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <Carousel
                    plugins={[Autoplay({ delay: 3000 })]}
                    className="w-full hidden lg:block"
                >
                    <CarouselContent>
                        {CarouselImages.map((img, index) => (
                            <CarouselItem key={index} className="h-screen">
                                <div className="bg-violet-300 h-screen">
                                    <img src={img} className="size-full object-cover object-center" alt="Carousel" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout