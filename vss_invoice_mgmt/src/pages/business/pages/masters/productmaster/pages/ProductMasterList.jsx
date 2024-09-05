import React, { useEffect, useState } from "react";
import AdminNavbar from "@/components/Navbars/AdminNavbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import HeaderStats from "@/components/Headers/HeaderStats";
import FooterAdmin from "@/components/Footers/FooterAdmin";
import { TextField, Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import {
  GetProductList,
  SearchProductMasterList,
} from "../productmasterconfig";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CircularProgres from "@/components/Circular-Progress/CircularProgress";
import Status_Select from "@/components/Status-Select/Status_Select";
import Product_Category_Select from "@/components/Product-Category-Select/Product_Category_Select";

function ProductMasterList() {
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchCode, setSearchCode] = useState("");
  const [searchStatus, setSearchStatus] = useState("");

  const [productmasterlist, setProductMasterList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalpages, settotalpages] = useState(1);
  const itemsPerPage = 10;

  const navigate = useNavigate();

  const tableHead = {
    col: [
      "Sr. No.",
      "Product Category name ",
      "Product code",
      "Product name",
      "Product price",
      "Product min qty",
      "Status",
      "Edit",
      "Block",
    ],
  };

  const getproductlist = async (page, name, code, status, productCategory) => {
    setLoading(true);
    const users = await GetProductList(
      1,
      page,
      itemsPerPage,
      name,
      code,
      status,
      productCategory
    );
    setProductMasterList(users.data);
    settotalpages(Math.ceil(users.totalCount / itemsPerPage));
    setLoading(false);
  };

  useEffect(() => {
    getproductlist(
      currentPage,
      searchName,
      searchCode,
      searchStatus,
      searchCategory
    );
  }, []);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    getproductlist(value, searchCategory, searchName, searchCode, searchStatus);
  };

  const handleEdit = (id) => {
    navigate(`/master/productmaster/${id}`);
  };

  const handleBlock = (id) => {
    navigate(`/master/productmaster/${id}`);
  };

  const handleSearch = () => {
    getproductlist(
      currentPage,
      searchName,
      searchCategory,
      searchCode,
      searchStatus
    );
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
                  Product List
                </h6>
                <NavLink
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  to="/master/productmaster"
                >
                  Add Product
                </NavLink>
              </div>
              <div className="container ">
                <div className="wrapper search-container grid grid-cols-1 lg:grid-cols-5 gap-4 mt-4 mb-4">
                  <TextField
                    id="search-1"
                    label="Search Product Name"
                    type="search"
                    onChange={(e) => setSearchName(e.target.value)}
                  />

                  <Product_Category_Select
                    id="search-2"
                    label="Search Product Catagory"
                    type="search"
                    onChange={(e) => setSearchCategory(e.target.value)}
                  />

                  <TextField
                    id="search-3"
                    label="Search Product Code"
                    type="search"
                    onChange={(e) => setSearchCode(e.target.value)}
                  />

                  <Status_Select
                    id="search-4"
                    label="Search Product Status"
                    type="search"
                    onChange={(e) => setSearchStatus(e.target.value)}
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
              ) : (
                Array.isArray(productmasterlist) && (
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
                      {productmasterlist.map((item, index) => (
                        <tr key={index} className="bg-white">
                          <td className="border px-4 py-2">
                            {(currentPage - 1) * itemsPerPage + index + 1}
                          </td>
                          <td className="border px-4 py-2">
                            {item.productCategoryId}
                          </td>
                          <td className="border px-4 py-2">
                            {item.productCode}
                          </td>
                          <td className="border px-4 py-2">
                            {item.productName}
                          </td>
                          <td className="border px-4 py-2">
                            {item.productPrice}
                          </td>
                          <td className="border px-4 py-2">
                            {item.productMinimumQty}
                          </td>

                          <td className="border px-4 py-2">
                            {item.productStatus}
                          </td>

                          <td className="border px-4 py-2">
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                              onClick={() => handleEdit(item.id)}
                            >
                              Edit
                            </button>
                          </td>

                          <td className="border px-4 py-2">
                            <button
                              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                              onClick={() => handleBlock(item.id)}
                            >
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
}
export default ProductMasterList;
