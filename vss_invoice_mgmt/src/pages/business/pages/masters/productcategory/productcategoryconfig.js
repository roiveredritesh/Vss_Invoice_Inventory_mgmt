import {
  SearchProductCategoryList,
  AddProductCategory,
} from "@/services/apiurl";
import { getRequest, postRequest } from "@/services/http.services";

//manage passed data here
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
  console.log("@product_category_search", resdata);
  return resdata;
};

export const PostProductCategoryList = async (params, businessId) => {
  const data = { ...params, businessId: businessId };
  console.log("@postdata", data);
  const resdata = await postRequest(AddProductCategory, data);
  return resdata;
};
