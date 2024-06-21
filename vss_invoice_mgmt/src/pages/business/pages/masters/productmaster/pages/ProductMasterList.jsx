import React, { useEffect, useState } from "react";
import AdminNavbar from "../../../../../../components/Navbars/AdminNavbar";
import Sidebar from "../../../../../../components/Sidebar/Sidebar";
import HeaderStats from "../../../../../../components/Headers/HeaderStats";
import FooterAdmin from "../../../../../../components/Footers/FooterAdmin";
import { NavLink } from "react-router-dom";

const ProductMasterList = () => {
  const [productlist, setproductlist] = useState([]);

  const tableHead = {
    col: [
      "Sr No",
      "Product Category",
      "Product Name",
      "Product code",
      "Status",
      "Edit",
      "Block",
    ],
  };

  useEffect(() => {
    setproductlist(JSON.parse(localStorage.getItem("addProduct") || "[]"));
  }, []);

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
            </div>
            <div className="container mx-auto px-4">
              {Array.isArray(productlist) && (
                <table className="table-auto w-full">
                  <thead className="bg-gray-200">
                    <tr>
                      {tableHead.col.map((item, index) => (
                        <th key={index} className="border px-4 py-2 text-left">
                          {item}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {productlist.map((item, index) => (
                      <tr key={index} className="bg-white">
                        <td className="border px-4 py-2">{index + 1}</td>
                        <td className="border px-4 py-2">
                          {item.productCategory}
                        </td>
                        <td className="border px-4 py-2">{item.productName}</td>
                        <td className="border px-4 py-2">{item.productCode}</td>
                        <td className="border px-4 py-2">
                          {item.productStatus}
                        </td>
                        <td className="border px-4 py-2">
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
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
              )}
            </div>
          </div>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
};

export default ProductMasterList;
