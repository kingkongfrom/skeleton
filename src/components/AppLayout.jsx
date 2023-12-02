import {Outlet} from "react-router-dom";
import {Fragment} from "react";

const AppLayout = () => {
    return (
        <Fragment>
            <Outlet />
        </Fragment>
    );
}
export default AppLayout;
