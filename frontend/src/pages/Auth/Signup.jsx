import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SignupFormControls } from "../../config/config";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CommonForm from "../../components/Common/CommonForm";
import { signupUser } from "../../store/authSlice";
import { toast } from "react-toastify";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

function Signup() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(event) {
   
 event.preventDefault();
    dispatch(signupUser(formData)).then((data) => {

      console.log(data)
      if (data?.payload?.success) {
      
           toast.success(data?.payload?.message || "Signup successful!");
        navigate("/auth/login");
      }
       else {
      
          toast.error(data?.payload?.message || "Signup failed!");

      }
    });
  }

  console.log(formData);

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
       <ToastContainer
               className="toastify-custom"

        position="top-right"
        autoClose={2000}
        theme="colored"
        pauseOnHover
        closeOnClick
      />
  


      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">
          Already have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={SignupFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default Signup;



