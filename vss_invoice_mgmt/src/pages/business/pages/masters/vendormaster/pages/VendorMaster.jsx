import { useFormik } from "formik";
import Sidebar from "@/components/Sidebar/Sidebar";
import HeaderStats from "@/components/Headers/HeaderStats";
import FooterAdmin from "@/components/Footers/FooterAdmin";
import AdminNavbar from "@/components/Navbars/AdminNavbar";
import { Button, TextField } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import Vendor_Statedropdown from "@/components/Vendor-State/Vendor_Statedropdown";
import StatusSelect from "@/components/Status-Select/Status_Select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  PostVendorMasterList,
  GetVendorMasterById,
  PutVendorMasterList,
} from "../vendormasterconfig.js";
import Textarea from "@mui/joy/Textarea";

const vendormaster_ValidationSchema = Yup.object().shape({
  vendorName: Yup.string()
    .required("Please enter vendor master name")
    .min(3, "Vendor master name must be at least 3 characters")
    .max(30, "Vendor master name must not exceed 30 characters")
    .matches(/^[A-Za-z\s]+$/, "Name must contain letters"),
  vendorContactNo: Yup.string()
    .required("Please enter vendor master contact No.")
    .matches(/^[0-9]{10}$/, "Contact No. must be exactly 10 digits")
    .length(10, "Enter 10 digits contact no."),
  vendorAltContactNo: Yup.string()
    .required("Please enter vendor master alternate contact no.")
    .matches(/^[0-9]{10}$/, "Enter 10 digits contact no.")
    .length(10, "Contact No. must be exactly 10 digits"),
  vendorEmailId: Yup.string()
    .required("Please enter vendor master email id")
    .email("Please enter a valid email id"),
  vendorAddress: Yup.string()
    .required("Please enter vendor master address")
    .min(5, "Address must be at least 5 characters"),
  vendorPincode: Yup.string()
    .required("Please enter vendor master pincode")
    .matches(/^[0-9]+$/, "Must be only number")
    .min(6, "Please enter a valid pincode")
    .max(6, "Please enter a valid pincode"),
  vendorGSTNo: Yup.string()
    .required("Please enter vendor master GST No.")
    .matches(
      /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/,
      "Invalid GST Number"
    ),
});

const VendorMaster = () => {
  const { id } = useParams();
  const [masterData, setMasterData] = useState(null);

  const getVendorMaster = async (id) => {
    const data = await GetVendorMasterById(id);
    setMasterData(data);
  };

  useEffect(() => {
    if (id !== undefined) {
      getVendorMaster(id);
    }
  }, [id]);

  useEffect(() => {
    if (masterData !== null) {
      formik.setValues({
        vendorName: masterData.data[0].vendorName || "",
        vendorContactNo: masterData.data[0].vendorContactNo || "",
        vendorAltContactNo: masterData.data[0].vendorAltContactNo || "",
        vendorEmailId: masterData.data[0].vendorEmailId || "",
        vendorAddress: masterData.data[0].vendorAddress || "",
        vendorState: masterData.data[0].vendorState || "",
        vendorPincode: masterData.data[0].vendorPincode || "",
        vendorGSTNo: masterData.data[0].vendorGSTNo || "",
        vendorStatus: masterData.data[0].vendorStatus || "",
      });
    }
  }, [masterData]);

  const formik = useFormik({
    initialValues: {
      vendorName: "",
      vendorContactNo: "",
      vendorAltContactNo: "",
      vendorEmailId: "",
      vendorAddress: "",
      vendorState: "",
      vendorPincode: "",
      vendorGSTNo: "",
      vendorStatus: "",
    },
    validationSchema: vendormaster_ValidationSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        window.location.replace("/master/vendormasterlist");
      }, 2000);
      if (id == undefined) {
        PostVendorMasterList(values, 1);
        toast.success("Vendor Master Added", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        PutVendorMasterList(id, values);
        toast.success("Updated!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    },
  });

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Add Vendor Master
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-wrap mt-6 mb-6">
                  {/* Vendor Master Name */}
                  <div className="w-full grid lg:grid-cols-3 gap-4 mt-4 mb-4">
                    <div>
                      <TextField
                        fullWidth
                        name="vendorName"
                        label="Enter Vendor Name"
                        type="search"
                        variant="outlined"
                        value={formik.values.vendorName}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.vendorName && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.vendorName}
                        </p>
                      )}
                    </div>
                    {/* Vendor Contact No. */}
                    <div>
                      <TextField
                        fullWidth
                        name="vendorContactNo"
                        label="Enter Vendor Contact No."
                        type="search"
                        variant="outlined"
                        value={formik.values.vendorContactNo}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.vendorContactNo && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.vendorContactNo}
                        </p>
                      )}
                    </div>
                    {/* Vendor Alternate Contact No. */}
                    <div>
                      <TextField
                        fullWidth
                        name="vendorAltContactNo"
                        label="Enter Vendor Alternate Contact No."
                        type="search"
                        variant="outlined"
                        value={formik.values.vendorAltContactNo}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.vendorAltContactNo && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.vendorAltContactNo}
                        </p>
                      )}
                    </div>
                    {/* Vendor Email id */}
                    <div>
                      <TextField
                        fullWidth
                        name="vendorEmailId"
                        label="Enter Vendor Email Id"
                        type="search"
                        variant="outlined"
                        value={formik.values.vendorEmailId}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.vendorEmailId && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.vendorEmailId}
                        </p>
                      )}
                    </div>
                    {/* Vendor Address */}
                    <div>
                      <Textarea
                        name="vendorAddress"
                        placeholder="Enter Vendor Address"
                        size="lg"
                        className="custom-textarea"
                        style={{
                          backgroundColor:
                            "rgba(241, 245, 249, var(--tw-bg-opacity))",
                        }}
                        value={formik.values.vendorAddress}
                        onChange={formik.handleChange}
                      />

                      {formik.errors.vendorAddress && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.vendorAddress}
                        </p>
                      )}
                    </div>
                    {/* Vendor State */}
                    <div>
                      <Vendor_Statedropdown
                        name="vendorState"
                        value={formik.values.vendorState}
                        onChange={formik.handleChange}
                        className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {formik.touched.vendorState &&
                        formik.errors.vendorState && (
                          <p className="text-red-500 text-xs italic">
                            {formik.errors.vendorState}
                          </p>
                        )}
                    </div>
                    {/* Vendor Pincode */}
                    <div>
                      <TextField
                        fullWidth
                        name="vendorPincode"
                        label="Enter Vendor State Pincode"
                        type="search"
                        variant="outlined"
                        value={formik.values.vendorPincode}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.vendorPincode && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.vendorPincode}
                        </p>
                      )}
                    </div>
                    {/* Vendor GSTIN */}
                    <div>
                      <TextField
                        fullWidth
                        name="vendorGSTNo"
                        label="Enter Vendor GST No."
                        type="search"
                        variant="outlined"
                        value={formik.values.vendorGSTNo}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.vendorGSTNo && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.vendorGSTNo}
                        </p>
                      )}
                    </div>
                    {/* Vendor Status */}
                    <div>
                      <StatusSelect
                        name="vendorStatus"
                        value={formik.values.vendorStatus}
                        onChange={formik.handleChange}
                        className="shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {formik.errors.vendorStatus && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.vendorStatus}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-end justify-end">
                  <Button type="submit" variant="contained" color="primary">
                    Add
                  </Button>
                  <Link
                    to="/master/vendormasterlist"
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Back
                  </Link>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </form>
            </div>
          </div>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
};

export default VendorMaster;
