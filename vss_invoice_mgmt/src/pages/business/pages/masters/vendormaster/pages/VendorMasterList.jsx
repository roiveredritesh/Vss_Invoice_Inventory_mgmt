import React, { useEffect, useState } from "react";
import AdminNavbar from "@/components/Navbars/AdminNavbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import HeaderStats from "@/components/Headers/HeaderStats";
import FooterAdmin from "@/components/Footers/FooterAdmin";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import {
  GetVendorMasterList,
  PutVendorMasterList,
} from "../vendormasterconfig.js";
import Stack from "@mui/material/Stack";
import CircularProgres from "@/components/Circular-Progress/CircularProgress";
import Pagination from "@mui/material/Pagination";
import StatusSelect from "@/components/Status-Select/Status_Select";

const VendorMasterList = () => {
  const [searchName, setSearchName] = useState("");
  const [searchContactNo, setSearchContactNo] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  const [vendormasterlist, setVendorMasterList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalpages, settotalpages] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const tableHead = {
    col: [
      "Sr No",
      "Vendor Name",
      "Vendor Contact No.",
      "Status",
      "Edit",
      "Block",
    ],
  };

  const getVendorList = async (page, name, contactNo, status) => {
    setLoading(true);
    try {
      const users = await GetVendorMasterList(
        1,
        page,
        itemsPerPage,
        name,
        contactNo,
        status
      );
      setVendorMasterList(users.data);
      settotalpages(Math.ceil(users.totalCount / itemsPerPage));
    } catch (error) {
      setVendorMasterList([]);
      settotalpages(1);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (searchName === "" && searchStatus === "") {
      getVendorList(currentPage, searchName, searchStatus);
    }
  }, [searchName, searchStatus]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    getVendorList(value, searchName, searchStatus);
  };

  const handleEdit = (id) => {
    navigate(`/masters/vendormaster/${id}`);
  };

  const handleBlock = (id) => {
    navigate(`/masters/vendormaster/${id}`);
  };

  const handleSearch = () => {
    setCurrentPage(currentPage);
    getVendorList(1, searchName, searchStatus);
  };

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
                  Vendor List
                </h6>

                <NavLink
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  to="/masters/vendormaster"
                >
                  Add Vendor
                </NavLink>
              </div>
              <br />
              <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-1 mb-4">
                  <TextField
                    id="search-1"
                    label="Search Vendor Name"
                    type="search"
                    onChange={(e) => setSearchName(e.target.value)}
                  />
                  <StatusSelect
                    id="search-2"
                    label="Search Vendor Status"
                    onChange={(e) => setSearchStatus(e.target.value)}
                    value={searchStatus || ""}
                  />
                  <Button
                    variant="contained"
                    className="button"
                    onClick={handleSearch}
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4">
              {loading ? (
                <div className="flex justify-center mt-4">
                  <CircularProgres />
                </div>
              ) : Array.isArray(vendormasterlist) &&
                vendormasterlist.length > 0 ? (
                <table className="table-auto w-full">
                  <thead className="bg-gray-200">
                    <tr>
                      {tableHead.col.map((vendor, index) => (
                        <th key={index} className="border px-4 py-2 text-left">
                          {vendor}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {vendormasterlist.map((vendor, index) => (
                      <tr key={vendor.id} className="bg-white">
                        <td className="border px-4 py-2">
                          {(currentPage - 1) * itemsPerPage + index + 1}
                        </td>
                        <td className="border px-4 py-2">
                          {vendor.vendorName}
                        </td>
                        <td className="border px-4 py-2">
                          {vendor.vendorContactNo}
                        </td>
                        <td className="border px-4 py-2">
                          {vendor.vendorStatus}
                        </td>
                        <td className="border px-4 py-2">
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => handleEdit(vendor.id)}
                          >
                            Edit
                          </button>
                        </td>
                        <td className="border px-4 py-2">
                          <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => handleBlock(vendor.id)}
                          >
                            Block
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div>No vendors found.</div>
              )}
              <br />
              <div className="flex justify-center mt-4">
                <Stack spacing={2}>
                  <Pagination
                    count={totalpages}
                    color="primary"
                    onChange={handlePageChange}
                  />
                </Stack>
              </div>
              <br />
            </div>
          </div>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
};

export default VendorMasterList;
