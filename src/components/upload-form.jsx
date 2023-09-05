import {Button, FileInput, Label, TextInput} from "flowbite-react";

export default function UploadForm() {
    return (
        <form className="flex max-w-lg flex-col gap-4">
            <div className="flex w-full">
                <div className="w-24">
                    <Label htmlFor="text1" value="Text Input"/>
                </div>
                <div className="flex-1">
                    <TextInput id="text1" required/>
                </div>
            </div>
            <div className="flex w-full" id="fileUpload">
                <div className="w-24">
                    <Label htmlFor="file" value="Upload file"/>
                </div>
                <div className="flex-1">
                    <FileInput
                        helperText="Upload a file to S3 bucket"
                        id="file"
                    />
                </div>
            </div>
            <Button type="submit">
                Submit
            </Button>
        </form>

    )
}