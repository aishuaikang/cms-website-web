import { getCategoryList } from "@/apis/category";
import { DICT_CODE, getSubDictsByCode } from "@/apis/dict";
import Banner from "@/components/Banner";
import CompanyProfile from "@/components/Home/CorporateVision";
import ProductCenter from "@/components/Home/ProductCenter";
import Solution from "@/components/Home/Solution";
import { Stack } from "@mantine/core";
import { Fragment } from "react";

export default async function Home() {
    const homeCarouselList = await getSubDictsByCode(DICT_CODE.HOME_CAROUSEL);
    const categoryList = await getCategoryList();

    return (
        <Stack gap={0}>
            <Banner
                value={
                    homeCarouselList.code === 200 ? homeCarouselList.data : []
                }
            />
            <CompanyProfile />
            {categoryList.code === 200 && categoryList.data.length
                ? categoryList.data.map((category) => {
                      switch (category.alias) {
                          case "solution":
                              return (
                                  <Fragment key={category.id}>
                                      <Solution
                                          categoryAlias={category.alias}
                                      />
                                  </Fragment>
                              );
                          case "product_center":
                              return (
                                  <Fragment key={category.id}>
                                      <ProductCenter
                                          categoryAlias={category.alias}
                                      />
                                  </Fragment>
                              );
                      }
                  })
                : null}

            {/* <Text c={"red"}>Home Page</Text>
            <Button component={Link} href="/hello">
                Next link button
            </Button> */}
        </Stack>
    );
}
