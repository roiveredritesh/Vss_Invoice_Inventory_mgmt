import React, { useEffect, useState } from "react";
import AdminNavbar from "../../../../../../components/Navbars/AdminNavbar";
import Sidebar from "../../../../../../components/Sidebar/Sidebar";
import HeaderStats from "../../../../../../components/Headers/HeaderStats";
import FooterAdmin from "../../../../../../components/Footers/FooterAdmin";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { GetProductCategoryList } from "../productcategoryconfig";

const ProductCategoryList = () => {
  const [productcategorylist, setproductcategorylist] = useState([]);

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

  const getproductlist = async () => {
    const users = await GetProductCategoryList(1, 1, 10);
    setproductcategorylist(users);
  };

  useEffect(() => {
    getproductlist();
  }, []);

  // const handleEdit = () => {
  //   console.log("yesss");
  //   // const editData = setproductcategorylist[index]; //Set the values from stored data to the registrartion form
  //   // setRegist({ ...editData });
  //   // seteditIndex(index);
  // };

  // console.log()

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
            </div>
            <div className="container mx-auto px-4">
              {Array.isArray(productcategorylist) && (
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
                    {productcategorylist.map((item, index) => (
                      <tr key={index} className="bg-white">
                        <td className="border px-4 py-2">{index + 1}</td>
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
              )}
            </div>
          </div>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
};

export default ProductCategoryList;
