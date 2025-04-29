// import Link from "next/link";
// import { Button, Divider, Text, TypographyStylesProvider } from "@mantine/core";
// import { CodeHighlight } from "@mantine/code-highlight";
// import parse, { Text as T } from "html-react-parser";

// const html = `<h1>标题1</h1><h2>标题2</h2><h3><span style="color: #F03E3E">标题3</span></h3><h4>标题4</h4><blockquote><p>引用</p></blockquote><hr><ul><li><p>1</p></li><li><p>2</p></li><li><p>3</p></li></ul><ol><li><p>1</p></li><li><p>2</p></li><li><p>3</p></li></ol><p><sub>撒打算大</sub>as da苏打水<sub>得到的得到的</sub><sup><sub>撒大苏打水</sub></sup></p><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.baidu.com">百度</a></p><p style="text-align: left">左侧</p><p style="text-align: center">中间</p><p style="text-align: right">右侧</p><pre><code>import Link from "next/link";
// import { Button, Divider, Text, TypographyStylesProvider } from "@mantine/core";

// const a = 10;
// console.log(123)</code></pre>`;

// export default function Home() {
//     const parsedHtml = parse(html, {
//         replace: (domNode) => {
//             if (
//                 domNode.type === "tag" &&
//                 domNode.name === "pre" &&
//                 domNode.children &&
//                 domNode.children[0]?.type === "tag" &&
//                 domNode.children[0]?.name === "code"
//             ) {
//                 const codeContent =
//                     (domNode.children[0].children[0] as T)?.data || "";
//                 return <CodeHighlight code={codeContent} language="tsx" />;
//             }
//         },
//     });

//     return (
//         <div>
//             <Text c={"red"}>Home Page</Text>
//             <Button component={Link} href="/hello">
//                 Next link button
//             </Button>
//             <Divider my="md" />
//             <TypographyStylesProvider>
//                 <div>{parsedHtml}</div>
//             </TypographyStylesProvider>
//         </div>
//     );
// }

import Link from "next/link";
import { Button, Text } from "@mantine/core";
import Banner from "@/components/Banner";
import CompanyProfile from "@/components/Home/CorporateVision";

export default function Home() {
    return (
        <div>
            <Banner />
            <CompanyProfile />
            <Text c={"red"}>Home Page</Text>
            <Button component={Link} href="/hello">
                Next link button
            </Button>
        </div>
    );
}
