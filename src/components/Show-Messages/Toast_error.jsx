import React from "react";
import { ToastContainer, toast } from "react-toastify";

const Toast_error = (props) => {
  const { message } = props;
  return toast.error(message, {
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

export default Toast_error;
