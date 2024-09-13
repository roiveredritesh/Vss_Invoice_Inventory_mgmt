import React from "react";
import { ToastContainer, toast } from "react-toastify";

const Toast_success = (props) => {
  const { message } = props;
  console.log("@toast_success", message);
  return toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export default Toast_success;
