// add functions for put,get and post request
import {
  GetDataApi,
  SearchProductList,
  AddProduct,
  UpdateProduct,
  ProductById,
} from "@/services/apiurl";
import { getRequest, postRequest, putRequest } from "@/services/http.services";

//manage passed data here
export const GetProductList = async (
  businessid,
  pagenumber,
  pagesize,
  name,
  code,
  status,
  productCategory
) => {
  var url =
    SearchProductList +
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
    status +
    "&productCategory=1" +
    productCategory;
  var resdata = await getRequest(url);
  return resdata;
};

export const SearchProductMasterList = async (
  businessid,
  pagenumber,
  pagesize,
  name,
  code,
  status,
  productCategory
) => {
  var url =
    // "https://invoice.ask4tech.co.in/api/Product/search?businessid=1&pageNumber=1&pageSize=10&name=string&productCategory=0";
    SearchProductList +
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
    status +
    "&productCategory=1" +
    productCategory;

  var resdata = await getRequest(url);
  return resdata;
};

export const PostProductList = async (params, businessId) => {
  const data = { ...params, businessId: businessId };
  const resdata = await postRequest(AddProduct, data);
  return resdata;
};

export const PutProductList = async (id, params) => {
  const data = { ...params };
  const url = `${UpdateProduct}/${id}`;
  const resdata = await putRequest(url, data);
  return resdata;
};

export const GetProductById = async (id) => {
  const url = `${ProductById}/${id}`;
  const resdata = await getRequest(url);
  return resdata;
};
