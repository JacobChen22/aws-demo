import SideBar from "./side-bar";
import DisplayBody from "../pages/display-body";

export default function MainBody() {
    return (
        <div className="flex h-full">
            <div
                className="top-0 left-0 z-20 lg:flex flex flex-col hidden w-64 dark:border-gray-700 font-normal duration-75 transition-width">
                <SideBar/>
            </div>
            <div className="flex-1 h-full p-4">
                <DisplayBody/>
            </div>
        </div>
    )

}