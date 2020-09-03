import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";

const ProductForm = ({ submitForm }) => {
  const { handleSubmit,handleChange ,product,errors} = useForm(submitForm,validate);

  return (
    <div className="col-5">
      <div className="card">
        <div className="card-header">Product Form</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Product Id</label>
              <input 
              type="text" 
              name="id" 
              className={
                "form-control  " + (errors.id ? "is-invalid" : "")
              }
              value={product.id}
              onChange={handleChange}
              />
              <spam className="text-danger">{errors.id}</spam>
            </div>
            <div>
              <label>Product Name</label>
              <input type="text" 
              name="name" 
              className={
                "form-control  " + (errors.name ? "is-invalid" : "")
              }
              onChange={handleChange}

              />
              <spam className="text-danger">{errors.name}</spam>
            </div>
            <div>
              <label>Price</label>
              <input 
              type="text" 
              name="price" 
              className={
                "form-control  " + (errors.price ? "is-invalid" : "")
              } 
              onChange={handleChange}

              />
              <spam className="text-danger">{errors.price}</spam>
            </div>
            <div>
              <label>Description</label>
             <textarea 
              className={
                "form-control  " + (errors.description ? "is-invalid" : "")
              }
              onChange={handleChange}

             name="description">
    
             </textarea>
             <spam className="text-danger">{errors.description}</spam>
            </div>
            <div className="text-center mt-3">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
