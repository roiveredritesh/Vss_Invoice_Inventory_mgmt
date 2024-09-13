import React, { useEffect, useState } from "react";
import AdminNavbar from "@/components/Navbars/AdminNavbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import HeaderStats from "@/components/Headers/HeaderStats";
import FooterAdmin from "@/components/Footers/FooterAdmin";
import { TextField, Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { GetProductList } from "../productmasterconfig";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CircularProgress from "@/components/Circular-Progress/CircularProgress";
import Status_Select from "@/components/Status-Select/Status_Select";
import Product_Category_Select from "@/components/Product-Category-Select/Product_Category_Select";

function ProductMasterList() {
  const [filters, setFilters] = useState({
    name: "",
    category: "",
    code: "",
    status: "",
  });

  const [productmasterlist, setProductMasterList] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalpages: 1,
    itemsPerPage: 10,
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const tableHead = [
    "Sr. No.",
    "Product Category Name",
    "Product Code",
    "Product Name",
    "Product Price",
    "Product Min Qty",
    "Status",
    "Edit",
    "Block",
  ];

  const getproductlist = async (page) => {
    setLoading(true);
    const { name, category, code, status } = filters;
    const { itemsPerPage } = pagination;

    const users = await GetProductList(
      1,
      page,
      itemsPerPage,
      name,
      code,
      status,
      category
    );
    setProductMasterList(users.data);
    setPagination((prev) => ({
      ...prev,
      totalpages: Math.ceil(users.totalCount / itemsPerPage),
    }));
    setLoading(false);
  };

  useEffect(() => {
    getproductlist(pagination.currentPage);
  }, []);

  const handlePageChange = (event, value) => {
    setPagination((prev) => ({ ...prev, currentPage: value }));
    getproductlist(value);
  };

  const handleEdit = (id) => navigate(`/master/productmaster/${id}`);
  const handleBlock = (id) => navigate(`/master/productmaster/${id}`);

  const handleSearch = () => getproductlist(pagination.currentPage);

  const updateFilter = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
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
              <div className="container">
                <div className="wrapper search-container grid grid-cols-1 lg:grid-cols-5 gap-4 mt-4 mb-4">
                  <TextField
                    id="search-1"
                    label="Search Product Name"
                    name="name"
                    type="search"
                    onChange={updateFilter}
                  />

                  <Product_Category_Select
                    id="search-2"
                    label="Search Product Category"
                    name="category"
                    type="search"
                    onChange={updateFilter}
                  />

                  <TextField
                    id="search-3"
                    label="Search Product Code"
                    name="code"
                    type="search"
                    onChange={updateFilter}
                  />

                  <Status_Select
                    id="search-4"
                    label="Search Product Status"
                    name="status"
                    type="search"
                    onChange={updateFilter}
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
                  <CircularProgress />
                </div>
              ) : (
                Array.isArray(productmasterlist) && (
                  <table className="table-auto w-full">
                    <thead className="bg-gray-200">
                      <tr>
                        {tableHead.map((item, index) => (
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
                      {productmasterlist.map((product, index) => (
                        <tr key={index} className="bg-white">
                          <td className="border px-4 py-2">
                            {(pagination.currentPage - 1) *
                              pagination.itemsPerPage +
                              index +
                              1}
                          </td>
                          <td className="border px-4 py-2">
                            {product.productCategoryId}
                          </td>
                          <td className="border px-4 py-2">
                            {product.productCode}
                          </td>
                          <td className="border px-4 py-2">
                            {product.productName}
                          </td>
                          <td className="border px-4 py-2">
                            {product.productPrice}
                          </td>
                          <td className="border px-4 py-2">
                            {product.productMinimumQty}
                          </td>
                          <td className="border px-4 py-2">
                            {product.productStatus}
                          </td>
                          <td className="border px-4 py-2">
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                              onClick={() => handleEdit(product.id)}
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
                    count={pagination.totalpages}
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
