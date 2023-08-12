import { useState, useEffect } from "react";
import { BarLoader } from "react-spinners";

const withSpinner = (WrappedComponent) => {
  return function WithSpinnerComponent(props) {
    const [loading, setLoading] = useState(false);
    const color = "#77001e";
    const override = {
      margin: "0 auto",
    };

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 650);
    }, []);

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "30vh",
        }}
      >
        {loading ? (
          <BarLoader
            color={color}
            loading={true}
            cssOverride={override}
            speedMultiplier={1}
            height={6}
            width={500}
          />
        ) : (
          <WrappedComponent {...props} />
        )}
      </div>
    );
  };
};
export default withSpinner;
