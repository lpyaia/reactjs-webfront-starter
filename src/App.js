import { hot } from "react-hot-loader";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Content from "./components/content/content";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Blank from "./pages/blank/blank";
import DefaultRoutes from "./components/app/defaultRoutes";
import useToken from "./components/app/userInfo";
import RoleBasedRouting from "./components/app/roleBasedRouting";
import UnlockablePage from "./pages/unlockable/unlockable";
import {
    AdminPage,
    CustomerPage,
    PartnerPage,
    AdminAndPartnerPage,
    EverybodyLoggedPage,
} from "./pages/roles/roleAccess";
import RoleAccess from "./enums/roleEnum";
import Forbidden from "./pages/forbidden/Forbidden";
import InternalServerError from "./pages/internal-server-error/InternalServerError";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner, { spinnerIsEnabled } from "./components/app/spinner";
import ScrollToTop from "./components/app/scrollToTop";

/****
    Route: 
        rotas fora do layout padrão, mas sem proteção de autenticação/autorização
    
    DefaultRoutes: 
        rotas dentro do layout padrão, mas sem proteção de autenticação/autorização
    
    RoleBaseRouting: 
        rotas dentro do layout padrão, mas com proteção de autenticação e com validação de autorização
****/

function App() {
    console.log(process.env.FOO); //printing it to console
    console.log(process.env.API_URL); //printing it to console

    const { setUserInfo } = useToken();
    const enableSpinner = spinnerIsEnabled();

    // if (!userInfo?.token) return <Login setToken={setUserInfo} />;

    return (
        <div>
            <ScrollToTop />
            <ToastContainer theme="colored" />
            <Spinner isEnabled={enableSpinner} />
            <Routes>
                <Route path="/login" element={<Login setToken={setUserInfo} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forbidden" element={<Forbidden />} />
                <Route path="/sorry" element={<InternalServerError />} />
                <Route
                    exact
                    path="/"
                    element={<DefaultRoutes component={Content} props={{ firstName: "Lucas", lastName: "Pyaia" }} />}
                />
                <Route path="/blank" element={<DefaultRoutes component={Blank} />} />
                <Route
                    exact
                    path="/admin"
                    element={
                        <RoleBasedRouting component={AdminPage} roles={[RoleAccess.Admin]} isDefaultLayout={false} />
                    }
                />

                <Route
                    exact
                    path="/customer"
                    element={<RoleBasedRouting component={CustomerPage} roles={[RoleAccess.Customer]} />}
                />
                <Route
                    exact
                    path="/partner"
                    element={<RoleBasedRouting component={PartnerPage} roles={[RoleAccess.Partner]} />}
                />
                <Route
                    exact
                    path="/admin-partner"
                    element={
                        <RoleBasedRouting
                            component={AdminAndPartnerPage}
                            roles={[RoleAccess.Partner, RoleAccess.Admin]}
                        />
                    }
                />
                <Route
                    exact
                    path="/everybody-logged"
                    element={<RoleBasedRouting component={EverybodyLoggedPage} roles={[RoleAccess.Everybody]} />}
                />
                <Route exact path="/unlockable-content" element={<DefaultRoutes component={UnlockablePage} />} />
            </Routes>
        </div>
    );
}

// export default hot(module)(App);
export default App;
