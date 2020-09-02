import React,{useState} from "react";
import ProductForm from "./ProductForm";
import Success from "./Success";

const Form = () => {


     const[isSumited,setIsSumited]=useState(false)

  function submitForm() {
      setIsSumited(true);
    console.log("--- submited... "+isSumited);
  }

  return (
    <div>
        {isSumited? (<Success/>):(<ProductForm submitForm={submitForm} />)}    

    

      
      
    </div>
  );
};

export default Form;
