import {Alert, Button, FileInput, Label, TextInput} from "flowbite-react";
import {useState} from "react";

export default function UploadForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [formData, setFormData] = useState({
        userInput: '',
        file: null
    })

    function handleInputChange(e) {
        setUploadSuccess(false);
        const {id, value, type, files} = e.target;
        // 如果是文件上传字段，则使用 files 属性来获取文件
        if (type === 'file') {
            setFormData({...formData, [id]: files[0]});
        } else {
            setFormData({...formData, [id]: value});
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!formData.file) {
            return;
        }
        setIsSubmitting(true);
        fetch(
            process.env.REACT_APP_PUBLIC_S3_BUCKET_URL + formData.file.name,
            {
                method: 'PUT',
                body: formData.file,
                headers: {'Content-Type': 'multipart/form-data'}
            }
        ).then(resp => {
            if (resp.status === 200) {
                const params = {
                    userInput: formData.userInput,
                    path: formData.file.name
                };
                fetch(
                    process.env.REACT_APP_API_GATEWAY_URL,
                    {
                        method: 'PUT',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(params)
                    }
                ).then(resp => {
                    setFormData({
                        userInput: '',
                        file: null
                    });
                    setIsSubmitting(false);
                    setUploadSuccess(true);
                })
            } else {
                setIsSubmitting(false);
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex max-w-lg flex-col gap-4">
                <div className="flex w-full">
                    <div className="w-24">
                        <Label htmlFor="userInput" value="Text Input"/>
                    </div>
                    <div className="flex-1">
                        <TextInput id="userInput" onChange={handleInputChange} required/>
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
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <Button type="submit" disabled={isSubmitting} isProcessing={isSubmitting}>
                    Submit
                </Button>

                {uploadSuccess && (
                    <Alert color="success" className="mt6 w-full">
                      <span className="font-medium">
                        Upload Success!
                      </span>
                    </Alert>
                )}
            </form>

        </div>

    )
}