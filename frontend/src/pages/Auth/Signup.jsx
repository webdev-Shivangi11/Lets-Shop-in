import { useState } from "react";
// import { useToast } from "@/components/ui/use-toast";
import { SignupFormControls } from "../../config/config";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CommonForm from "../../components/Common/CommonForm";
const initialState = {
  userName: "",
  email: "",
  password: "",
};

function Signup() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { toast } = useToast();

  function onSubmit(event) {
   
  }

  console.log(formData);

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
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





//  event.preventDefault();
    // dispatch(registerUser(formData)).then((data) => {
    //   // if (data?.payload?.success) {
    //   //   toast({
    //   //     title: data?.payload?.message,
    //   //   });
    //     navigate("/auth/login");
    //   // } else {
    //   //   toast({
    //   //     title: data?.payload?.message,
    //   //     variant: "destructive",
    //   //   });
    //   // }
    // });