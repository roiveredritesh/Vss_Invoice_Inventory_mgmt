import Sidebar from "@/components/Sidebar/Sidebar";
import HeaderStats from "@/components/Headers/HeaderStats";
import FooterAdmin from "@/components/Footers/FooterAdmin";
import AdminNavbar from "@/components/Navbars/AdminNavbar";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import Vendor_Statedropdown from "@/components/Vendor-State/Vendor_Statedropdown";
import StatusSelect from "@/components/Status-Select/Status_Select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const vendormaster_ValidationSchema = Yup.object().shape({
  vendorMasterName: Yup.string()
    .required("Please enter vendor master name")
    .min(3, "Vendor master name must be at least 3 characters")
    .max(30, "Vendor master name must not exceed 30 characters")
    .matches(/^[A-Za-z\s]+$/, "Name must contain letters"),
  vendorMasterContactNumber: Yup.string()
    .required("Please enter vendor master contact No.")
    .matches(/^[0-9]{10}$/, "Contact No. must be exactly 10 digits")
    .length(10, "Enter 10 digits contact no."),
  vendorMasterAlternateContactNumber: Yup.string()
    .required("Please enter vendor master alternate contact no.")
    .matches(/^[0-9]{10}$/, "Enter 10 digits contact no.")
    .length(10, "Contact No. must be exactly 10 digits"),
  vendorMasterEmailId: Yup.string()
    .required("Please enter vendor master email id")
    .matches(/[A-Za-z0-9]{4}@gmail.com/, "Please enter a valid email address"),
  vendorMasterAddress: Yup.string()
    .required("Please enter vendor master address")
    .min(5, "Address must be at least 5 characters"),
  vendorMasterPinCode: Yup.string()
    .required("Please enter vendor master pincode")
    .matches(/^[0-9]+$/, "Must be only number")
    .min(6, "Please enter a valid pincode")
    .max(6, "Please enter a valid pincode"),
  vendorMasterGSTIN: Yup.string()
    .required("Please enter vendor master GST No.")
    .matches(
      /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/,
      "Invalid GST Number"
    ),
});

function VendorMaster() {
  const formik = useFormik({
    initialValues: {
      vendorMasterName: "",
      vendorMasterContactNumber: "",
      vendorMasterAlternateContactNumber: "",
      vendorMasterEmailId: "",
      vendorMasterAddress: "",
      vendorMasterState: "",
      vendorMasterPinCode: "",
      vendorMasterGSTIN: "",
      vendorMasterStatus: "",
    },
    validationSchema: vendormaster_ValidationSchema,
    onSubmit: (values) => {
      console.log("@Vendor Master", values);
      try {
        toast.success("Vendor master added successfully!");
      } catch (error) {
        toast.error("Failed to add vendor master. Please try again.");
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
                        name="vendorMasterName"
                        label="Enter Vendor Name"
                        variant="outlined"
                        notched
                        value={formik.values.vendorMasterName}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.vendorMasterName && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.vendorMasterName}
                        </p>
                      )}
                    </div>
                    {/* Vendor Contact No. */}
                    <div>
                      <TextField
                        fullWidth
                        name="vendorMasterContactNumber"
                        label="Enter Vendor Contact No."
                        variant="outlined"
                        value={formik.values.vendorMasterContactNumber}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.vendorMasterContactNumber && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.vendorMasterContactNumber}
                        </p>
                      )}
                    </div>
                    {/* Vendor Alternate Contact No. */}
                    <div>
                      <TextField
                        fullWidth
                        name="vendorMasterAlternateContactNumber"
                        label="Enter Vendor Alternate Contact No."
                        variant="outlined"
                        value={formik.values.vendorMasterAlternateContactNumber}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.vendorMasterAlternateContactNumber && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.vendorMasterAlternateContactNumber}
                        </p>
                      )}
                    </div>
                    {/* Vendor Email id */}
                    <div>
                      <TextField
                        fullWidth
                        name="vendorMasterEmailId"
                        label="Enter Vendor Email Id"
                        variant="outlined"
                        value={formik.values.vendorMasterEmailId}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.vendorMasterEmailId && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.vendorMasterEmailId}
                        </p>
                      )}
                    </div>
                    {/* Vendor Address   */}
                    <div>
                      <TextField
                        fullWidth
                        name="vendorMasterAddress"
                        label="Enter Vendor Address"
                        variant="outlined"
                        multiline
                        value={formik.values.vendorMasterAddress}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.vendorMasterAddress && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.vendorMasterAddress}
                        </p>
                      )}
                    </div>
                    {/* Vendor State */}
                    <div>
                      <Vendor_Statedropdown
                        name="vendorMasterState"
                        value={formik.values.vendorMasterState}
                        onChange={formik.handleChange}
                        className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {formik.touched.vendorMasterState &&
                        formik.errors.vendorMasterState && (
                          <p className="text-red-500 text-xs italic">
                            {formik.errors.vendorMasterState}
                          </p>
                        )}
                    </div>
                    {/* Vendor Pincode */}
                    <div>
                      <TextField
                        fullWidth
                        name="vendorMasterPinCode"
                        label="Enter Vendor State Pincode"
                        variant="outlined"
                        value={formik.values.vendorMasterPinCode}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.vendorMasterPinCode && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.vendorMasterPinCode}
                        </p>
                      )}
                    </div>
                    {/* Vendor GSTIN */}
                    <div>
                      <TextField
                        fullWidth
                        name="vendorMasterGSTIN"
                        label="Enter Vendor GST No."
                        variant="outlined"
                        value={formik.values.vendorMasterGSTIN}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.vendorMasterGSTIN && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.vendorMasterGSTIN}
                        </p>
                      )}
                    </div>
                    {/* Vendor Status */}
                    <div>
                      <StatusSelect
                        name="vendorMasterStatus"
                        value={formik.values.vendorMasterStatus}
                        onChange={formik.handleChange}
                        className="shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {formik.errors.vendorMasterStatus && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.vendorMasterStatus}
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
}

export default VendorMaster;
