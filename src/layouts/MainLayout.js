import { Outlet } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";

export default function MainLayout() {
    return (
        <div>
            <MainNavbar />
            <Outlet />
        </div>
    )
}
