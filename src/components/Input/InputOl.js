import React from "react";

const InputOl = ({placeholter, styles, itype, updateData}) => {
        return (
                <input
                    className={styles}
                    type={itype}
                    placeholder={placeholter}
                    onChange={(e) => {updateData(e.target.value)}}
                />
        );
    };
export default InputOl;
