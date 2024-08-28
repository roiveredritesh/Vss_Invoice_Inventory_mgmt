import AdminNavbar from "../../../../../../components/Navbars/AdminNavbar";
import Sidebar from "../../../../../../components/Sidebar/Sidebar";
import HeaderStats from "../../../../../../components/Headers/HeaderStats";
import FooterAdmin from "../../../../../../components/Footers/FooterAdmin";
import { TextField, Button } from "@mui/material";
import { NavLink } from "react-router-dom";


function VendorMasterList() {

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
                  Vendor Master List
                </h6>

                <NavLink
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  to="/masters/vendormaster"
                >
                  Add Vendor Master
                </NavLink>
              </div>
              <br />
              <div className="container">
                <div className=" grid grid-cols-1 lg:grid-cols-4 gap-4 mt-1 mb-4">
                  <TextField
                    id="search-1"
                    label="Search Vendor Name"
                    type="search"
                    size="small"
                  />
                  <TextField
                    id="search-2"
                    label="Search Vendor Contact No."
                    type="search"
                    size="small"
                  />
                  <TextField
                    id="search-3"
                    label="Search Vendor Status"
                    type="search"
                    size="small"
                  />
                  <Button variant="contained" className="button">
                    Search
                  </Button>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4">
              <table className="table-auto w-full">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border px-4 py-2 text-left">S.No</th>
                    <th className="border px-4 py-2 text-left">Vendor Name</th>
                    <th className="border px-4 py-2 text-left">Vendor Code</th>
                    <th className="border px-4 py-2 text-left">Status</th>
                    <th className="border px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
              </table>
              <br />
              <br />
            </div>
          </div>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}

export default VendorMasterList;
