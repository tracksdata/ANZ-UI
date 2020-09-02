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
              className={"form-control (errors.id? is-valid: is-invalid)"}
              value={product.id}
              onChange={handleChange}
              />
              {errors.id}
            </div>
            <div>
              <label>Product Name</label>
              <input type="text" name="name" className="form-control" />
              {errors.name}
            </div>
            <div>
              <label>Price</label>
              <input type="text" name="price" className="form-control" />
              {errors.price}
            </div>
            <div>
              <label>Description</label>
             <textarea className="form-control" name="description"></textarea>
             {errors.description}
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
