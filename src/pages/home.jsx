import {Flowbite} from "flowbite-react";
import NavigatorHeader from "../components/navigator-header";
import MainBody from "../components/main-body";

export default function Home() {
    return (
        <Flowbite theme={{dark: true}}>
            <div className="flex w-screen h-screen flex-col">
                <div className="border-b dark:border-gray-700 w-full">
                    <NavigatorHeader/>
                </div>
                <div className="h-full bg-gray-50 dark:bg-gray-900">
                    <MainBody />
                </div>
            </div>
        </Flowbite>
    );
}