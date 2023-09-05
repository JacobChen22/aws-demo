import UploadForm from "../components/upload-form";

export default function DisplayBody() {
    return (
        <div
            className="h-full bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <UploadForm />
        </div>
    )
}