import {
  SearchProductCategoryList,
  AddProductCategory,
} from "@/services/apiurl";
import { getRequest, postRequest } from "@/services/http.services";

export const GetProductCategoryList = async (
  businessid,
  pagenumber,
  pagesize,
  name,
  code,
  status
) => {
  var url =
    SearchProductCategoryList +
    "?businessid=" +
    businessid +
    "&pageNumber=" +
    pagenumber +
    "&pageSize=" +
    pagesize;
  var resdata = await getRequest(url);
  console.log("@product_category_search", resdata.data);
  return resdata.data;
};

export const PostProductCategoryList = async (params, businessId) => {
  const data = { ...params, businessId: businessId };
  console.log("@postdata", data);
  const resdata = await postRequest(AddProductCategory, params);
  console.log("@postapiresposne", resdata);
};
