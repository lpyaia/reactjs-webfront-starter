import React from "react";
import { UnlockAccess } from "../../components/app/unlockAccess";

const Blank = () => {
    return (
        <div>
            <h4 className="fw-bold p-4">Blank Page</h4>
            <div>
                <UnlockAccess request={["ROLE_ADMIN"]}>
                    <h4 className="fw-bold p-4">ADMIN</h4>
                </UnlockAccess>
                <UnlockAccess request={["ROLE_USER"]}>
                    <h4 className="fw-bold p-4">USER</h4>
                </UnlockAccess>
                <UnlockAccess request={["ROLE_MANAGER"]}>
                    <h4 className="fw-bold p-4">MANAGER</h4>
                </UnlockAccess>
            </div>
        </div>
    );
};

export default Blank;
