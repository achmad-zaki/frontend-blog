const images = import.meta.glob<{ default: string }>("/src/assets/image-carousel/*.(png|jpg|jpeg)", { eager: true });

export const CarouselImages = Object.values(images).map((img) => img.default);