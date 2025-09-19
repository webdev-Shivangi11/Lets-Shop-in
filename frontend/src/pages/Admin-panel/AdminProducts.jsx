import {Button} from "../../components/ui/button"
import UploadImage from "../../components/Admin-View/UploadImage";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../../components/ui/sheet";
import { addProductFormElements } from "../../config/config";
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommonForm from "../../components/Common/CommonForm";
import { addNewProduct, getAllProducts } from "../../store/admin/productSlice";
import adminProducts from "../../store/store"
const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
  averageReview: 0,
};

function AdminProducts() {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const [currentEditedId, setCurrentEditedId] = useState(null);

  const { productList } = useSelector((state) => state.adminProducts);
  console.log(productList, "productList");
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();

    // currentEditedId !== null
    //   ? dispatch(
    //       editProduct({
    //         id: currentEditedId,
    //         formData,
    //       })
    //     ).then((data) => {
    //       console.log(data, "edit");

    //       if (data?.payload?.success) {
      
    //         setFormData(initialFormData);
    //         setOpenCreateProductsDialog(false);
    //         setCurrentEditedId(null);
    //       }
    //     })
    // :
    dispatch(
      addNewProduct({
        ...formData,
        image:uploadedImageUrl,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(getAllProducts());
        setOpenCreateProductsDialog(false);
        setImageFile(null);
        setFormData(initialFormData);
        //         toast({
          //           title: "Product add successfully",
          //         });
          toast.success("Product added successfully");
        }
      });
      // dispatch(getAllProducts());
  }

  function handleDelete(getCurrentProductId) {
    dispatch(deleteProduct(getCurrentProductId)).then((data) => {
      if (data?.payload?.success) {
        dispatch(addAllProducts());
      }
    });
  }

  // function isFormValid() {
  //   return Object.keys(formData)
  //     .filter((currentKey) => currentKey !== "averageReview")
  //     .map((key) => formData[key] !== "")
  //     .every((item) => item);
  // }

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  console.log(formData,uploadedImageUrl, "productList");

  return (
    <>
      <div className="mb-5 w-full flex justify-end">
         <ToastContainer
               className="toastify-custom"
        position="top-right"
        autoClose={2000}
        theme="colored"
        pauseOnHover
        closeOnClick
      />
        <Button 
        onClick={() => setOpenCreateProductsDialog(true)}
        >
          Add New Product
        </Button>
        
      </div>
      {/* <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {productList && productList.length > 0
          ? productList.map((productItem) => (
              <AdminProductTile
                setFormData={setFormData}
                setOpenCreateProductsDialog={setOpenCreateProductsDialog}
                setCurrentEditedId={setCurrentEditedId}
                product={productItem}
                handleDelete={handleDelete}
              />
            ))
          : null}
      </div> */}
      <Sheet
        open={openCreateProductsDialog}
        onOpenChange={() => {
          setOpenCreateProductsDialog(false);
          // setCurrentEditedId(null);
          // setFormData(initialFormData);
        }}
      >
        
        <SheetContent side="right" className="overflow-auto p-2">
          <SheetHeader>
            <SheetTitle>
              {currentEditedId !== null ? "Edit Product" : "Add New Product"}
            </SheetTitle>
          </SheetHeader>
          <UploadImage
           imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
            setImageLoadingState={setImageLoadingState}
            imageLoadingState={imageLoadingState}
            // isEditMode={currentEditedId !== null}
            />
      
           
          
          <div className="py-6">
            <CommonForm
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              buttonText={currentEditedId !== null ? "Edit" : "Add"}
              formControls={addProductFormElements}
              // isBtnDisabled={!isFormValid()}
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default AdminProducts;