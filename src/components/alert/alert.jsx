import React from "react";

function Alert(props) {
  const alertClasses = {
    success: "bg-green-100 text-green-800",
    error: "bg-error text-white",
    warning: "bg-warning text-black",
  };

  return (
    props.alert && (
       <>
        <div
          id="alert-border-1"
          className={`flex items-center p-4 mb-4 justify-center w-full max-w-[400px] mx-auto absolute left-0 right-0 top-5  ${alertClasses.success} `}
          role="alert"
        >
          <div className="ml-3 text-sm font-medium">
            {props.alert.type} : {props.alert.message}
          </div>
          
        </div>
      </>
    )
  );
}

export default Alert;
