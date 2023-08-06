import React, { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";

const withSpinner = (WrappedComponent) => {
  return function WithSpinnerComponent(props) {
    const [loading, setLoading] = useState(false);
    const color = "#e63946";
    const override = {
      margin: "2rem",
      display: "block",
      margin: "0 auto",
    };

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, []);

    return (
      <div>
        {loading ? (
          <BeatLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <WrappedComponent {...props} />
        )}
      </div>
    );
  };
};

export default withSpinner;
