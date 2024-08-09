import {
  SearchProductCategoryList,
  AddProductCategory,
  UpdateProductCategory,
  ProductCategoryById,
} from "@/services/apiurl";

import { getRequest, postRequest, putRequest } from "@/services/http.services";

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
    pagesize +
    "&name=" +
    name +
    "&code=" +
    code +
    "&status=" +
    status;
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

export const PutProductCategoryList = async (id, params) => {
  const data = { ...params };
  const url = `${UpdateProductCategory}/${id}`;
  console.log("@putdata", data);
  const resdata = await putRequest(url, data);
  console.log("@updateData", resdata);
  return resdata;
};

export const GetProductCategoryById = async (id) => {
  const url = `${ProductCategoryById}/${id}`;
  const resdata = await getRequest(url);
  console.log("@Product_Category_Data", resdata);
  return resdata;
};
