import React from "react";
import { ClipLoader } from "react-spinners";
import PropTypes from "prop-types";
import { useState } from "react";
import { singletonHook } from "react-singleton-hook";

const enabled = false;

let globalSetSpinnerIsEnabled = () => {
    throw new Error("you must spinnerIsEnabled before setting its state");
};

export const spinnerIsEnabled = singletonHook(enabled, () => {
    const [spinnerIsEnabled, setSpinnerIsEnabled] = useState(enabled);
    globalSetSpinnerIsEnabled = setSpinnerIsEnabled;
    return spinnerIsEnabled;
});

export const setSpinner = (enabled) => globalSetSpinnerIsEnabled(enabled);

const Spinner = ({ isEnabled }) => {
    const style = {
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        backgroundColor: "#eceaea",
        backgroundPosition: "center",
        backgroundSize: "150px",
        zIndex: 1000000,
        opacity: 0.8,
    };

    const css = {
        position: "fixed",
        top: "calc(50% - 100px)",
        left: "calc(50% - 100px)",
        height: "150px",
        width: "150px",
    };

    return (
        <div>
            {isEnabled && (
                <div style={style}>
                    <ClipLoader color={"#000000"} loading={isEnabled} size={150} css={css} />
                </div>
            )}
        </div>
    );
};

export default Spinner;

Spinner.propTypes = {
    isEnabled: PropTypes.bool.isRequired,
};
