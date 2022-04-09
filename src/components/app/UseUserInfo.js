import { useState } from "react";

export default function useUserInfo() {
    const getUserInfo = () => {
        const userInfoString = localStorage.getItem("userInfo");
        const userInfo = JSON.parse(userInfoString);

        return userInfo;
    };

    const [userInfo, setUserInfo] = useState(getUserInfo());

    const saveToken = (userInfo) => {
        localStorage.setItem("userInfo", JSON.stringify(userInfo));

        setUserInfo(userInfo);
    };

    return {
        setUserInfo: saveToken,
        userInfo,
    };
}
