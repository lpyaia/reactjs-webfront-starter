import { hot } from "react-hot-loader";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Content from "./components/content/Content";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Blank from "./pages/blank/Blank";
import DefaultRoutes from "./components/app/DefaultRoutes";
import useToken from "./components/app/UseUserInfo";
import RoleBasedRouting from "./components/app/RoleBasedRouting";
import UnlockablePage from "./pages/unlockable/Unlockable";
import {
    AdminPage,
    CustomerPage,
    PartnerPage,
    AdminAndPartnerPage,
    EverybodyLoggedPage,
} from "./pages/roles/RoleAccess";
import RoleAccess from "./enums/RoleEnum";
import Forbidden from "./pages/forbidden/Forbidden";
import InternalServerError from "./pages/internal-server-error/InternalServerError";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

    const { userInfo, setUserInfo } = useToken();

    if (!userInfo?.token) return <Login setToken={setUserInfo} />;

    return (
        <div>
            <ToastContainer autoClose={3000} theme={"colored"} />
            <Switch>
                <Route path="/login">
                    <Login setToken={setUserInfo} />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/forbidden">
                    <Forbidden></Forbidden>
                </Route>
                <Route path="/sorry">
                    <InternalServerError></InternalServerError>
                </Route>
                <DefaultRoutes exact path="/" component={Content} />
                <DefaultRoutes path="/blank" component={Blank} />
                <RoleBasedRouting
                    exact
                    path="/admin"
                    component={AdminPage}
                    roles={[RoleAccess.Admin]}
                    isDefaultLayout={false}
                />
                <RoleBasedRouting exact path="/customer" component={CustomerPage} roles={[RoleAccess.Customer]} />
                <RoleBasedRouting exact path="/partner" component={PartnerPage} roles={[RoleAccess.Partner]} />
                <RoleBasedRouting
                    exact
                    path="/admin-partner"
                    component={AdminAndPartnerPage}
                    roles={[RoleAccess.Partner, RoleAccess.Admin]}
                />
                <RoleBasedRouting
                    exact
                    path="/everybody-logged"
                    component={EverybodyLoggedPage}
                    roles={[RoleAccess.Everybody]}
                />
                <DefaultRoutes exact path="/unlockable-content" component={UnlockablePage} />
            </Switch>
        </div>
    );
}

export default hot(module)(App);
