import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import AdminNavbar from "@/components/Navbars/AdminNavbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import HeaderStats from "@/components/Headers/HeaderStats";
import FooterAdmin from "@/components/Footers/FooterAdmin";
import Status_Select from "@/components/Status-Select/Status_Select";
import Product_Measureunits from "@/components/Product-Measures/Product_Measureunits";
import { Link } from "react-router-dom";

const product_ValidationSchema = Yup.object().shape({
  productCategory: Yup.string().required("Please select product category"),
  productCode: Yup.string().required("Please enter product code"),
  productName: Yup.string().required("Please enter product name"),
  productPrice: Yup.number().required("Please enter product price"),
  productMeasureUnit: Yup.string().required("Please select measure unit"),
  productMinimumQty: Yup.number()
    .required("Please enter product minimum quantity")
    .positive("Please enter a positive number"),
  productIGST: Yup.number()
    .required("Please enter product IGST")
    .positive("Please enter a positive number"),
  productSGST: Yup.number()
    .required("Please enter product SGST")
    .positive("Please enter a positive number"),
  productCGST: Yup.number()
    .required("Please enter product CGST")
    .positive("Please enter a positive number"),
  productStatus: Yup.string().required("Please select product status"),
});

const ProductMaster = () => {
  const [addProduct, setAddProduct] = useState([]);

  const formik = useFormik({
    initialValues: {
      productCategory: "",
      productCode: "",
      productName: "",
      productPrice: "",
      productMeasureUnit: "",
      productMinimumQty: "",
      productIGST: "",
      productSGST: "",
      productCGST: "",
      productStatus: "",
    },
    validationSchema: product_ValidationSchema,
    onSubmit: (values) => {
      setAddProduct([...addProduct, values]);
      formik.resetForm();
    },
  });

  useEffect(() => {
    localStorage.setItem("addProduct", JSON.stringify(addProduct));
  }, [addProduct]);

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        <HeaderStats />

        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Add Product
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={formik.handleSubmit}>
                {/* Product Category Select */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 mb-6">
                  <div>
                    <TextField //product category
                      fullWidth
                      name="productCategory"
                      label="Product Category"
                      variant="outlined"
                      value={formik.values.productCategory}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.productCategory && (
                      <p className="text-red-500 text-xs italic">
                        {formik.errors.productCategory}
                      </p>
                    )}
                  </div>
                  {/* Product Code */}
                  <div>
                    <TextField
                      fullWidth
                      name="productCode"
                      label="Product Code"
                      variant="outlined"
                      value={formik.values.productCode}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.productCode && (
                      <p className="text-red-500 text-xs italic">
                        {formik.errors.productCode}
                      </p>
                    )}
                  </div>
                  {/* Product Name */}
                  <div>
                    <TextField
                      fullWidth
                      name="productName"
                      label="Product Name"
                      variant="outlined"
                      value={formik.values.productName}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.productName && (
                      <p className="text-red-500 text-xs italic">
                        {formik.errors.productName}
                      </p>
                    )}
                  </div>
                  {/* Product Price */}
                  <div>
                    <TextField
                      fullWidth
                      name="productPrice"
                      label="Product Price"
                      variant="outlined"
                      value={formik.values.productPrice}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.productPrice && (
                      <p className="text-red-500 text-xs italic">
                        {formik.errors.productPrice}
                      </p>
                    )}
                  </div>
                  {/* Product Measure Unit Select */}
                  <div>
                    <Product_Measureunits
                      name="productMeasureUnit"
                      value={formik.values.productMeasureUnit}
                      onChange={formik.handleChange}
                      className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {formik.touched.productMeasureUnit &&
                      formik.errors.productMeasureUnit && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.productMeasureUnit}
                        </p>
                      )}
                  </div>

                  {/* Product Minimum Quantity */}
                  <div>
                    <TextField
                      fullWidth
                      name="productMinimumQty"
                      label="Product Minimum Qty"
                      variant="outlined"
                      value={formik.values.productMinimumQty}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.productMinimumQty && (
                      <p className="text-red-500 text-xs italic">
                        {formik.errors.productMinimumQty}
                      </p>
                    )}
                  </div>
                  {/* Product IGST */}
                  <div>
                    <TextField
                      fullWidth
                      name="productIGST"
                      label="Product IGST"
                      variant="outlined"
                      value={formik.values.productIGST}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.productIGST && (
                      <p className="text-red-500 text-xs italic">
                        {formik.errors.productIGST}
                      </p>
                    )}
                  </div>
                  {/* Product SGST */}
                  <div>
                    <TextField
                      fullWidth
                      name="productSGST"
                      label="Product SGST"
                      variant="outlined"
                      value={formik.values.productSGST}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.productSGST && (
                      <p className="text-red-500 text-xs italic">
                        {formik.errors.productSGST}
                      </p>
                    )}
                  </div>
                  {/* Product CGST */}
                  <div>
                    <TextField
                      fullWidth
                      name="productCGST"
                      label="Product CGST"
                      variant="outlined"
                      value={formik.values.productCGST}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.productCGST && (
                      <p className="text-red-500 text-xs italic">
                        {formik.errors.productCGST}
                      </p>
                    )}
                  </div>
                  {/* Product Status Select */}
                  <div>
                    <Status_Select
                      name="productStatus"
                      value={formik.values.productStatus}
                      onChange={formik.handleChange}
                      classname="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {formik.touched.productStatus &&
                      formik.errors.productStatus && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.productStatus}
                        </p>
                      )}
                  </div>
                </div>

                <div className="flex items-end justify-end">
                  <Button type="submit" variant="contained" color="primary">
                    Add
                  </Button>

                  <Link
                    to={"/master/productmasterlist"}
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

export default ProductMaster;
