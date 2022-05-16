import React from "react";

export function Notification({
  errorMessage,
  successMessage,
  setErrorMessage,
  setSuccessMessage,
}) {
  const errorStyles = {
    color: "red",
    width: "80%",
    padding: "10px 5px",
    margin: "20px auto",
    fontSize: "20px",
    textAlign: "center",
    background: "#999",
    borderRadius: "10px",
    border: "2px solid red",
    position: "relative",
  };

  const successStyles = {
    color: "green",
    width: "80%",
    padding: "10px 5px",
    margin: "20px auto",
    fontSize: "20px",
    textAlign: "center",
    background: "#999",
    borderRadius: "10px",
    border: "2px solid green",
    position: "relative",
  };

  const cancelStyles = {
    position: "absolute",
    top: 0,
    right: 15,
    cursor: "pointer",
    fontSize: "25px",
    color: "black",
    fontWeight: "900",
  };

  return (
    <>
      {errorMessage && (
        <div style={errorStyles}>
          {errorMessage}
          <span onClick={() => setErrorMessage("")} style={cancelStyles}>
            ×
          </span>
        </div>
      )}
      {successMessage && (
        <div onClick={() => setSuccessMessage("")} style={successStyles}>
          {successMessage}
          <span onClick={() => setSuccessMessage("")} style={cancelStyles}>
            ×
          </span>
        </div>
      )}
    </>
  );
}
