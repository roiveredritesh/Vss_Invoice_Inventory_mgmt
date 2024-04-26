import React, { useEffect, useState } from "react";

const ProductCategoryList = () => {
  const [productcategorylist, setproductcategorylist] = useState([]);

  const tableHead = {
    col: ["Product Name", "Product Id", "Status", "Edit", "Block"],
  };

  useEffect(() => {
    setproductcategorylist(
      JSON.parse(localStorage.getItem("addProduct") || "[]")
    );
  }, []);

  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mt-8 mb-4">Product List</h1>
        {Array.isArray(productcategorylist) && (
          <table className="table-fixed w-full">
            <thead className="bg-gray-200">
              <tr>
                {tableHead.col.map((item, index) => (
                  <th key={index} className="border px-2 py-2 w-1/5">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {productcategorylist.map((item, index) => (
                <tr key={index}>
                  <td className="border px-2 py-2 w-1/5">{item.productname}</td>
                  <td className="border px-2 py-2 w-1/5">{item.productcode}</td>
                  <td className="border px-2 py-2 w-1/5">
                    {item.productstatus}
                  </td>
                  <td className="border px-2 py-2 w-1/5">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                      Edit
                    </button>
                  </td>
                  <td className="border px-2 py-2 w-1/5">
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
    </>
  );
};

export default ProductCategoryList;
