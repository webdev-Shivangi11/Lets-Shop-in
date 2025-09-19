import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import axios from "axios";
import { Skeleton } from "../ui/skeleton";

function UploadImage({
  imageFile,
  setImageFile,
  imageLoadingState,
  uploadedImageUrl,
  setUploadedImageUrl,
  setImageLoadingState,
  // isEditMode,
  isCustomStyling = false,
}) {
  const inputRef = useRef(null);

  // console.log(isEditMode, "isEditMode");

  function handleImageFileChange(event) {
    console.log(event.target.files, "event.target.files");
    const selectedFile = event.target.files?.[0];
    console.log(selectedFile);

    if (selectedFile) setImageFile(selectedFile);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) setImageFile(droppedFile);
  }

  function handleRemoveImage() {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  async function uploadImageToCloudinary() {
    setImageLoadingState(true);
    const data = new FormData();
    data.append("my_file", imageFile);
    const response = await axios.post(
      "http://localhost:3000/admin/products/upload-image",
      data
    );
    console.log(response.data, "response");
// if(response)setUploadedImageUrl(response.data)
    if (response?.data?.success) {
      setUploadedImageUrl(response.data.result.url);
      console.log(response.data.result.url, "response.data.result.url");
       setImageLoadingState(false);
    // setUploadedImageUrl(response.data)
    }
  }
// async function uploadImageToCloudinary() {
//   setImageLoadingState(true);
//   const data = new FormData();
//   data.append("my_file", imageFile);

//   try {
//     const response = await axios.post(
//       "http://localhost:3000/admin/products/upload-image",
//       data
//     );
//     console.log(response.data, "response.data");

//     if (response?.data?.success && response.data.result?.url) {
//       setUploadedImageUrl(response.data.result.url);
//     } else {
//       console.warn("Upload failed or URL missing:", response.data);
//     }
//   } catch (error) {
//     console.error("Upload error:", error);
//   } finally {
//     setImageLoadingState(false);
//   }
// }

  useEffect(() => {
    if (imageFile !== null) uploadImageToCloudinary();
  }, [imageFile]);

  return (
    <div
      // className={`w-full  mt-4 ${isCustomStyling ? "" : "max-w-md mx-auto"}`}
      className={`w-full  mt-4 max-w-md mx-auto`}
    >
      <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`
          border-2 border-dashed rounded-lg p-4`}
          //  ${ isEditMode ? "opacity-60" : "" }
      >
        <Input
          id="image-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileChange}
          // disabled={isEditMode}
        />
        {!imageFile ? (
          <Label
            htmlFor="image-upload"
            className={`
              flex flex-col items-center justify-center h-32 cursor-pointer`}
              //  ${isEditMode ? "cursor-not-allowed" : "" } 
          >
            <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
            <span>Drag & drop or click to upload image</span>
          </Label>
        ) : imageLoadingState ? (
          <Skeleton className="h-10 bg-gray-100" />
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileIcon className="w-8 text-primary mr-2 h-8" />
            </div>
            <p className="text-sm font-medium">{imageFile.name}</p>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={handleRemoveImage}
            >
              <XIcon className="w-4 h-4" />
              <span className="sr-only">Remove File</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadImage;