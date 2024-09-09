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
  return resdata;
};

export const PostVendorMasterList = async (params, businessId) => {
  const data = { ...params, businessId: businessId };
  const resdata = await postRequest(AddVendorMaster, data);
  return resdata;
};

export const PutVendorMasterList = async (id, params) => {
  const data = { ...params };
  const url = `${UpdateVendorMaster}/${id}`;
  const resdata = await putRequest(url, data);
  return resdata;
};

export const GetVendorMasterById = async (id) => {
  const url = `${VendorMasterById}/${id}`;
  const resdata = await getRequest(url);
  return resdata;
};
