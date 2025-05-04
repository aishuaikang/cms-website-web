import Banner from "@/components/Banner";
import CompanyProfile from "@/components/Home/CorporateVision";

export default function Home() {
    return (
        <div>
            <Banner />
            <CompanyProfile />
            {/* <Text c={"red"}>Home Page</Text>
            <Button component={Link} href="/hello">
                Next link button
            </Button> */}
        </div>
    );
}
