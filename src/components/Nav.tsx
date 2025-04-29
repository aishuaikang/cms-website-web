// "use client";

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
    Image as Img,
} from "@mantine/core";
// function getScrollTop() {
//     let scroll_top = 0;
//     if (document.documentElement && document.documentElement.scrollTop) {
//         scroll_top = document.documentElement.scrollTop;
//     } else if (document.body) {
//         scroll_top = document.body.scrollTop;
//     }
//     return scroll_top;
// }

const navs = [
    { name: "产品", href: "/products/1" },
    { name: "解决方案", href: "/solutions/1" },
    { name: "新闻中心", href: "/news/1" },
];

const Nav = () => {
    // const navRef = useRef<HTMLDivElement>(null);

    // const [isFixed, setIsFixed] = useState(false);

    // const onScroll = () => {
    //     const scrollTop = getScrollTop();
    //     if (scrollTop >= 48) {
    //         setIsFixed(true);
    //     } else {
    //         setIsFixed(false);
    //     }
    // };

    // useEffect(() => {
    //     onScroll();
    //     document.addEventListener("scroll", onScroll);
    //     return () => {
    //         document.removeEventListener("scroll", onScroll);
    //     };
    // }, []);

    // const pathname = usePathname();

    // const isActived = (href: string) => {
    //     if (pathname === "/") {
    //         return href === pathname
    //             ? "var(--mantine-primary-color-filled)"
    //             : undefined;
    //     } else {
    //         return href === "/"
    //             ? undefined
    //             : pathname.startsWith(href)
    //             ? DEFAULT_THEME.primaryColor
    //             : undefined;
    //     }
    // };

    return (
        <Container
            // ref={navRef}
            size={"xl"}
            w={1200}
            h={60}
            className="fixed z-50 top-12 rounded-lg bg-white/50 backdrop-blur-lg left-1/2 transform -translate-x-1/2 transition-width duration-200 ease-linear"
            style={
                {
                    // width: isFixed ? "100vw !important" : "calc(100% - 48px)",
                    // top: isFixed ? 0 : "3rem",
                    // borderRadius: isFixed ? "0 0 0.5rem 0.5rem" : "0.5rem",
                }
            }
        >
            <Container size={"xl"} h={"100%"}>
                <Group w={"100%"} h={"100%"}>
                    {/* className="w-[136px] h-full flex justify-center items-center ml-[24px]" */}
                    <Center w={136} h={"100%"}>
                        <UnstyledButton
                            component={Link}
                            href="/"
                            title="飞诺门阵"
                            w={"100%"}
                            h={"100%"}
                            className="flex justify-center items-center"
                        >
                            <Img
                                radius="md"
                                component={Image}
                                src={`https://dummyimage.com/133x28/000000/ffffff&text=logo`}
                                alt="Logo"
                                priority
                                width={133}
                                height={28}
                            />
                        </UnstyledButton>
                    </Center>
                    <Group
                        w={"calc(100% - 152px)"}
                        h={"100%"}
                        justify="flex-end"
                        align="center"
                        wrap="nowrap"
                    >
                        <Group>
                            <UnstyledButton
                                component={Link}
                                href={"/"}
                                // style={{
                                //     color: isActived("/"),
                                // }}
                            >
                                首页
                            </UnstyledButton>
                            {navs.map((item) => {
                                return (
                                    <UnstyledButton
                                        key={item.name}
                                        component={Link}
                                        href={item.href}
                                        // style={{
                                        //     color: isActived(item.href),
                                        // }}
                                    >
                                        {item.name}
                                    </UnstyledButton>
                                );
                            })}
                            <UnstyledButton
                                component={Link}
                                href={"/about"}
                                // style={{
                                //     color: isActived("/about"),
                                // }}
                            >
                                关于我们
                            </UnstyledButton>
                        </Group>
                        <Group gap={4}>
                            <IconPhoneCall stroke={2} />
                            <Text>010-53321858</Text>
                        </Group>
                    </Group>
                </Group>
            </Container>
        </Container>
    );
};
export default Nav;
