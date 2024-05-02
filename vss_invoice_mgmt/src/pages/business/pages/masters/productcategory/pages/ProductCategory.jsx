import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import "tailwindcss/tailwind.css";
import { Button, TextField } from "@mui/material";
import AdminNavbar from "@/components/Navbars/AdminNavbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import HeaderStats from "@/components/Headers/HeaderStats";
import FooterAdmin from "@/components/Footers/FooterAdmin";
import StatusSelect from "@/components/Status-Select/Status_Select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { PostProductCategoryList } from "../productcategoryconfig";

const productcategory_ValidationSchema = Yup.object().shape({
  productCategory_Name: Yup.string()
    .required("Please enter product category name")
    .min(5, "Product category name must be at least 5 characters")
    .max(50, "Product category name must not exceed 50 characters"),
  productCategory_Code: Yup.string()
    .required("Please enter product category code")
    .min(2, "Product category code must be at least 2 characters")
    .max(50, "Product category code must not exceed 50 characters"),
  productCategory_Status: Yup.string().required("Please select status"),
});

const ProductCategory = () => {
  const formik = useFormik({
    initialValues: {
      productCategory_Name: "",
      productCategory_Code: "",
      productCategory_Status: "",
    },
    validationSchema: productcategory_ValidationSchema,
    onSubmit: (values) => {
      console.log("@Product Category", values);
      toast.success("Submited!", {
        position: "top-right",
        autoClose: 2000,
        hideProgresBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(function () {
        window.location.replace("/masters/productcategorylist");
      }, 2000);
      formik.resetForm();
      PostProductCategoryList(values, 1);
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
                  Add Product Category
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-wrap mt-6 mb-6">
                  <div className="w-full lg:w-4/12 px-4">
                    <TextField
                      fullWidth
                      name="productCategory_Name"
                      label="Product Category"
                      variant="outlined"
                      value={formik.values.productCategory_Name}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.productCategory_Name && (
                      <p className="text-red-500 text-xs italic">
                        {formik.errors.productCategory_Name}
                      </p>
                    )}
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <TextField
                      fullWidth
                      name="productCategory_Code"
                      label="Product Category Code"
                      variant="outlined"
                      value={formik.values.productCategory_Code}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.productCategory_Code && (
                      <p className="text-red-500 text-xs italic">
                        {formik.errors.productCategory_Code}
                      </p>
                    )}
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <StatusSelect
                      name="productCategory_Status"
                      value={formik.values.productCategory_Status}
                      onChange={formik.handleChange}
                      classname="shadow appearance-none border rounded w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {formik.touched.productCategory_Status &&
                      formik.errors.productCategory_Status && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.productCategory_Status}
                        </p>
                      )}
                  </div>
                </div>
                <div className="flex items-end justify-end">
                  <Button type="submit" variant="contained" color="primary">
                    Add
                  </Button>

                  <Link
                    to={"/masters/productcategorylist"}
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

export default ProductCategory;
