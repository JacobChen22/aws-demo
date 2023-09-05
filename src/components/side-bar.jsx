import {Sidebar} from "flowbite-react";
import {HiArrowNarrowUp, HiCog} from "react-icons/hi";

export default function SideBar() {
    return (
        <Sidebar>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiArrowNarrowUp}>
                        Upload
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
            <Sidebar.CTA
                className="absolute bottom-0 left-0 justify-center w-64 space-x-4 bg-white lg:flex dark:bg-gray-800">
                <div>
                    <a className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <HiCog className="w-6 h-6"/>
                    </a>
                </div>
            </Sidebar.CTA>
        </Sidebar>
    )
}