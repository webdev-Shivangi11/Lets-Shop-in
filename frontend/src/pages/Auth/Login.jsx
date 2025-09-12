import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginFormControls } from "../../config/config";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CommonForm from "../../components/Common/CommonForm";
import { loginUser } from "../../store/authSlice";
const initialState = {

  email: "",
  password: "",
};

function Login() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  function onSubmit(event) {
     event.preventDefault();
        dispatch(loginUser(formData)).then((data) => {
    
          console.log(data)
          if (data?.payload?.success) {
          
               toast.success(data?.payload?.message );
          }
           else {
          
              toast.error(data?.payload?.message || "Login failed!");
    
          }
        });
   
  }

  // console.log(formData);

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
         Login to your account
        </h1>
        <p className="mt-2">
        Don't have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/signup"
          >
            Signup
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={LoginFormControls}
        buttonText={"Log In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default Login;



