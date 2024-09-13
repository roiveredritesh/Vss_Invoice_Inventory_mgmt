import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { GetProductCategoryList } from "@/pages/business/pages/masters/productcategory/productcategoryconfig";

export default function Product_Category_Select({ value, onChange, label }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchDataGetProductCategoryList = async () => {
      try {
        const response = await GetProductCategoryList(
          1, // businessId
          1, // pagenumber
          100, // pagesize
          "", // name
          "", // code
          "" // status
        );

        const data = response.data;

        if (Array.isArray(data)) {
          const mappedOptions = data.map((item) => ({
            id: item.id,
            label: item.productCategory_Name,
          }));

          setOptions(mappedOptions);
        } else {
          console.error("Expected data to be an array but got:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataGetProductCategoryList();
  }, []);

  return (
    <Autocomplete
      value={options.find((option) => option.id === value) || null}
      onChange={(event, newValue) => {
        onChange({
          target: {
            name: "productCategoryId",
            value: newValue ? newValue.id : "",
          },
        });
      }}
      options={options}
      getOptionLabel={(option) => option.label || ""}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label || "Product Category"}
          variant="outlined"
        />
      )}
      fullWidth
    />
  );
}
