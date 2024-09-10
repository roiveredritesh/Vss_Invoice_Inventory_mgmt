import React from "react";
import { ToastContainer, toast } from "react-toastify";

const Toast_warning = (props) => {
  const { message } = props;
  return toast.warn(message, {
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

export default Toast_warning;
