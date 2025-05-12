"use client";

import Image from "next/image";

import Link from "next/link";
// import { usePathname } from "next/navigation";
import { IconPhoneCall } from "@tabler/icons-react";
import {
  Center,
  Container,
  // DEFAULT_THEME,
  Group,
  Text,
  UnstyledButton,
  AspectRatio,
} from "@mantine/core";
import NavButton from "./NavButton";
import { CommonResponse } from "@/apis/types";
import { Category } from "@/apis/category/types";
import { Dict } from "@/apis/dict/types";
import { useWindowScroll } from "@mantine/hooks";
import { useMemo } from "react";

export interface NavProps {
  title: CommonResponse<string>;
  logo: CommonResponse<Dict>;
  categoryList: CommonResponse<Category[]>;
  contactPhoneNumber: CommonResponse<string>;
}

const Nav: React.FC<NavProps> = ({
  title,
  logo,
  categoryList,
  contactPhoneNumber,
}) => {
  const [scroll] = useWindowScroll();

  const isFixed = useMemo(() => scroll.y > 48, [scroll.y]);

  return (
    <Center
      component="header"
      h={60}
      className="fixed z-50 top-12 rounded-lg bg-white/50 backdrop-blur-lg left-1/2 transform -translate-x-1/2 transition-width duration-200 ease-linear max-w-full"
      style={{
        width: isFixed ? "100vw" : 1200,
        top: isFixed ? 0 : "3rem",
        borderRadius: isFixed ? "0" : "0.5rem",
      }}
    >
      <Container size={"xl"} h={"100%"} w={1200}>
        <Group w={"100%"} h={"100%"}>
          <Center component="h1" w={136} h={"100%"} m={0}>
            <UnstyledButton
              component={Link}
              href="/"
              title={
                title.code === 200 && title.data
                  ? title.data
                  : process.env.NEXT_PUBLIC_TITLE || "标题"
              }
              w={"100%"}
              h={"100%"}
              className="flex justify-start items-center"
            >
              <AspectRatio
                ratio={3 / 1}
                maw={136}
                flex="0 0 136px"
                className="flex justify-center items-center"
              >
                <Image
                  src={
                    logo.code === 200 && logo.data.imageId
                      ? `/api/common/image/download/${logo.data.imageId}`
                      : `https://dummyimage.com/136x46/000000/ffffff&text=logo`
                  }
                  className="!object-contain"
                  alt="Logo"
                  priority
                  width={136}
                  height={46}
                />
              </AspectRatio>
              {/* <Img
                                radius="md"
                                component={Image}
                                src={
                                    logo.code === 200 && logo.data.imageId
                                        ? `/api/common/image/download/${logo.data.imageId}`
                                        : `https://dummyimage.com/133x28/000000/ffffff&text=logo`
                                }
                                alt="Logo"
                                priority
                                width={133}
                                height={28}
                            /> */}
            </UnstyledButton>
          </Center>
          <Group
            w={"calc(100% - 152px)"}
            h={"100%"}
            justify="flex-end"
            align="center"
            wrap="nowrap"
            gap={25}
          >
            <Group component="nav">
              <NavButton
                href="/"
                name="首页"
                rel="noopener noreferrer nofollow"
              />
              {categoryList.code === 200
                ? categoryList.data.map((category) => {
                    return (
                      <NavButton
                        key={category.id}
                        href={"/category/" + category.alias}
                        name={category.name}
                      />
                    );
                  })
                : null}
              <NavButton
                href="/about"
                name="关于我们"
                rel="noopener noreferrer nofollow"
              />
            </Group>
            {contactPhoneNumber.code === 200 && contactPhoneNumber.data ? (
              <Group gap={4}>
                <IconPhoneCall stroke={2} />
                <Text>{contactPhoneNumber.data}</Text>
              </Group>
            ) : null}
          </Group>
        </Group>
      </Container>
    </Center>
  );
};

export default Nav;
