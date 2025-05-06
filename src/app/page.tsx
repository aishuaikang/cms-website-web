import { DICT_CODE, getSubDictsByCode } from "@/apis/dict";
import Banner from "@/components/Banner";
import CompanyProfile from "@/components/Home/CorporateVision";

export default async function Home() {
  const homeCarouselList = await getSubDictsByCode(DICT_CODE.HOME_CAROUSEL);
  return (
    <div>
      <Banner
        value={homeCarouselList.code === 200 ? homeCarouselList.data : []}
      />
      <CompanyProfile />
      {/* <Text c={"red"}>Home Page</Text>
            <Button component={Link} href="/hello">
                Next link button
            </Button> */}
    </div>
  );
}
