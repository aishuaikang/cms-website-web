"use client";
import { Image as Img } from "@/apis/article/types";
import { Carousel as MantineCarousel } from "@mantine/carousel";
export interface CarouselProps {
    width?: number | string;
    height?: number | string;
    images: Img[];
}

import Image from "next/image";
import "@mantine/carousel/styles.css";

const Carousel: React.FC<CarouselProps> = ({ width, height, images }) => {
    return (
        <MantineCarousel
            withIndicators
            w={width}
            height={height} // slideSize="70%"
            slideGap="md"
            // controlsOffset="md"
            // controlSize={40}
            loop
            // dragFree
        >
            {images.map((item) => {
                return (
                    <MantineCarousel.Slide key={item.id}>
                        <Image
                            // radius="md"
                            // component={Image}
                            // src={`https://dummyimage.com/293x220/000000/ffffff&text=logo`}
                            src={`/api/common/image/download/${item.id}`}
                            alt="Logo"
                            priority
                            width={293}
                            height={220}
                            // w={293}
                            // h={220}
                            className="w-[293px] h-[220px] rounded-md object-cover"
                        />
                    </MantineCarousel.Slide>
                );
            })}
            {/* <MantineCarousel.Slide>1</MantineCarousel.Slide>
            <MantineCarousel.Slide>2</MantineCarousel.Slide>
            <MantineCarousel.Slide>3</MantineCarousel.Slide> */}
            {/* ...other slides */}
        </MantineCarousel>
    );
};

export default Carousel;
