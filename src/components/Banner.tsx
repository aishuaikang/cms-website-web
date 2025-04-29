"use client";
import Image from "next/image";
// import Banner1 from "@/assets/images/banner1.jpg";
// import Banner2 from "@/assets/images/banner2.jpg";
// import Banner3 from "@/assets/images/banner3.jpg";
import Link from "next/link";
import { Flex } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
const Banner = () => {
    return (
        <Carousel
            // slideSize="70%"
            slideGap="md"
            // controlsOffset="md"
            controlSize={40}
            loop
            // dragFree
            withIndicators
        >
            <Carousel.Slide>
                <Flex
                    component={Link}
                    href="/about"
                    target="_blank"
                    w={"100%"}
                    h={"100%"}
                    justify={"center"}
                    align={"center"}
                >
                    <Image
                        src={
                            "https://dummyimage.com/1920x950/000000/ffffff&text=Banner1"
                        }
                        alt="Banner1"
                        className="w-full h-[950px] object-fill"
                        width={1920}
                        height={950}
                    />
                </Flex>
            </Carousel.Slide>
            <Carousel.Slide>
                <Flex
                    component={Link}
                    href="/about"
                    target="_blank"
                    w={"100%"}
                    h={"100%"}
                    justify={"center"}
                    align={"center"}
                >
                    <Image
                        src={
                            "https://dummyimage.com/1920x950/000000/ffffff&text=Banner1"
                        }
                        alt="Banner1"
                        className="w-full h-[950px] object-fill"
                        width={1920}
                        height={950}
                    />
                </Flex>
            </Carousel.Slide>
            <Carousel.Slide>
                <Flex
                    component={Link}
                    href="/about"
                    target="_blank"
                    w={"100%"}
                    h={"100%"}
                    justify={"center"}
                    align={"center"}
                >
                    <Image
                        src={
                            "https://dummyimage.com/1920x950/000000/ffffff&text=Banner1"
                        }
                        alt="Banner1"
                        className="w-full h-[950px] object-fill"
                        width={1920}
                        height={950}
                    />
                </Flex>
            </Carousel.Slide>
        </Carousel>
    );
};
export default Banner;
