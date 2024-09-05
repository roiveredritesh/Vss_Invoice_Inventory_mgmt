import {
  SearchVendorMasterList,
  AddVendorMaster,
  UpdateVendorMaster,
  VendorMasterById,
} from "@/services/apiurl";

import { getRequest, postRequest, putRequest } from "@/services/http.services";

export const GetVendorMasterList = async (
  businessid,
  pagenumber,
  pagesize,
  name,
  status
) => {
  var url =
    SearchVendorMasterList +
    "?businessid=" +
    businessid +
    "&pageNumber=" +
    pagenumber +
    "&pageSize=" +
    pagesize +
    "&name=" +
    name +
    "&status=" +
    status;

  var resdata = await getRequest(url);
  console.log("@vendor_master_search", resdata);
  return resdata;
};

export const PostVendorMasterList = async (params, businessId) => {
  const data = { ...params, businessId: businessId };
  console.log("@postdata", data);
  const resdata = await postRequest(AddVendorMaster, data);
  return resdata;
};

export const PutVendorMasterList = async (id, params) => {
  const data = { ...params };
  const url = `${UpdateVendorMaster}/${id}`;
  console.log("@putdata", data);
  const resdata = await putRequest(url, data);
  console.log("@updatedata", resdata);
  return resdata;
};

export const GetVendorMasterById = async (id) => {
  const url = `${VendorMasterById}/${id}`;
  const resdata = await getRequest(url);
  console.log("Vendor_Master_Data", resdata);
  return resdata;
};
