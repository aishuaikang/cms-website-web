"use client";
import { Image as Img } from "@/apis/article/types";
import { Carousel as MantineCarousel } from "@mantine/carousel";
export interface CarouselProps {
    width?: number;
    height?: number;
    images: Img[];
}

import Image from "next/image";
import "@mantine/carousel/styles.css";

const Carousel: React.FC<CarouselProps> = ({ width, height, images }) => {
    return (
        <MantineCarousel
            withIndicators
            w={width}
            height={height}
            slideGap="md"
            loop
        >
            {images.map((item) => {
                return (
                    <MantineCarousel.Slide key={item.id}>
                        <Image
                            src={`/api/common/image/download/${item.id}`}
                            alt="Logo"
                            priority
                            width={width}
                            height={height}
                            className="rounded-md object-cover"
                            style={{
                                width,
                                height,
                            }}
                        />
                    </MantineCarousel.Slide>
                );
            })}
        </MantineCarousel>
    );
};

export default Carousel;
