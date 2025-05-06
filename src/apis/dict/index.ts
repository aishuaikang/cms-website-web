import { CommonResponse } from "../types";
import { Dict } from "./types";

export enum DICT_CODE {
  LOGO = "Logo",
  HOME_CAROUSEL = "HomeCarousel",

  COMPANY_PROFILE = "CompanyProfile",

  CONTACT_PHONE_NUMBER = "ContactPhoneNumber",
  CONTACT_WECHAT = "ContactWeChat",
  CONTACT_EMAIL = "ContactEmail",
  CONTACT_NOTICE = "ContactNotice",
}

// 根据code获取子字典列表
export const getSubDictsByCode = async (code: Dict["code"]) => {
  const data = await fetch(
    process.env.BASE_API + "/common/dict/getSubDictsByCode/" + code,
  );
  return (await data.json()) as CommonResponse<Dict[]>;
};

// 根据code获取字典的extra
export const getDictExtraByCode = async (code: Dict["code"]) => {
  const data = await fetch(
    process.env.BASE_API + "/common/dict/getDictExtraByCode/" + code,
  );
  return (await data.json()) as CommonResponse<Dict["extra"]>;
};

// 根据code获取字典
export const getDictByCode = async (code: Dict["code"]) => {
  const data = await fetch(
    process.env.BASE_API + "/common/dict/getDictByCode/" + code,
  );
  return (await data.json()) as CommonResponse<Dict>;
};
