import React, { useEffect, useState } from "react";
import AdminNavbar from "../../../../../../components/Navbars/AdminNavbar";
import Sidebar from "../../../../../../components/Sidebar/Sidebar";
import HeaderStats from "../../../../../../components/Headers/HeaderStats";
import FooterAdmin from "../../../../../../components/Footers/FooterAdmin";
import { NavLink } from "react-router-dom";
import { GetProductCategoryList } from "../productcategoryconfig";
import { TextField, Button } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CircularProgres from "@/components/Circular-Progress/CircularProgress";

const ProductCategoryList = () => {
  const [productcategorylist, setProductCategoryList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalpages, settotalpages] = useState(1);
  const itemsPerPage = 10;

  const tableHead = {
    col: [
      "Sr No",
      "Product Category Name",
      "Product category code",
      "Status",
      "Edit",
      "Block",
    ],
  };

  const getproductlist = async (page) => {
    setLoading(true); //setloading true when data is fetching
    const users = await GetProductCategoryList(1, page, itemsPerPage); //id, number of page, number of page items
    setProductCategoryList(users.data);
    settotalpages(Math.ceil(users.totalCount / itemsPerPage));
    setLoading(false); //setloading false when data is fetched
  };

  useEffect(() => {
    getproductlist(currentPage);
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
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
                  Product Category List
                </h6>

                <NavLink
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  to="/masters/productcategory"
                >
                  Add Product Category
                </NavLink>
              </div>
              <br />
              <div className="container ">
                <div className="wrapper search-container grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4 mb-4">
                  <TextField
                    id="search-1"
                    label="Search Category Name"
                    type="search"
                    size="small"
                  />
                  <TextField
                    id="search-2"
                    label="Search Category Code"
                    type="search"
                    size="small"
                  />
                  <TextField
                    id="search-3"
                    label="Search Category Status"
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
              {loading ? (
                <div className="flex justify-center mt-4">
                  <CircularProgres />
                </div>
              ) : (
                Array.isArray(productcategorylist) && (
                  <table className="table-auto w-full">
                    <thead className="bg-gray-200">
                      <tr>
                        {tableHead.col.map((item, index) => (
                          <th
                            key={index}
                            className="border px-4 py-2 text-left"
                          >
                            {item}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {productcategorylist.map((item, index) => (
                        <tr key={index} className="bg-white">
                          <td className="border px-4 py-2">
                            {(currentPage - 1) * itemsPerPage + index + 1}
                          </td>
                          <td className="border px-4 py-2">
                            {item.productCategory_Name}
                          </td>
                          <td className="border px-4 py-2">
                            {item.productCategory_Code}
                          </td>
                          <td className="border px-4 py-2">
                            {item.productCategory_Status}
                          </td>
                          <td className="border px-4 py-2">
                            <button
                              onClick={() => handleEdit(index)}
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                              Edit
                            </button>
                          </td>

                          <td className="border px-4 py-2">
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                              Block
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )
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

export default ProductCategoryList;
