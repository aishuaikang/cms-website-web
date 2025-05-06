"use client";
import Image from "next/image";
import Link from "next/link";
import { Flex } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { Dict } from "@/apis/dict/types";
export interface BannerProps {
  value: Dict[];
}
const Banner: React.FC<BannerProps> = ({ value }) => {
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
      {value.length ? (
        value.map((item) => {
          return (
            <Carousel.Slide key={item.id}>
              <Flex
                component={Link}
                href={item.extra}
                target="_blank"
                w={"100%"}
                h={"100%"}
                justify={"center"}
                align={"center"}
              >
                <Image
                  src={`/api/common/image/download/${item.imageId}`}
                  alt="Banner1"
                  className="w-full h-[950px] object-fill"
                  width={1920}
                  height={950}
                />
              </Flex>
            </Carousel.Slide>
          );
        })
      ) : (
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
              src={"https://dummyimage.com/1920x950/000000/ffffff&text=Banner1"}
              alt="Banner1"
              className="w-full h-[950px] object-fill"
              width={1920}
              height={950}
            />
          </Flex>
        </Carousel.Slide>
      )}
      {/* <Carousel.Slide>
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
            src={"https://dummyimage.com/1920x950/000000/ffffff&text=Banner1"}
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
            src={"https://dummyimage.com/1920x950/000000/ffffff&text=Banner1"}
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
            src={"https://dummyimage.com/1920x950/000000/ffffff&text=Banner1"}
            alt="Banner1"
            className="w-full h-[950px] object-fill"
            width={1920}
            height={950}
          />
        </Flex>
      </Carousel.Slide> */}
    </Carousel>
  );
};
export default Banner;
