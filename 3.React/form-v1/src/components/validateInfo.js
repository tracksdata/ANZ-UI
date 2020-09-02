
export default function validateInfo(product){
    
    
    let errors = {};

    if(!product.id.trim()){
        errors.id='Product Id is required';
    }else if(product.id.length <3){
        errors.id='Product Id should be min 3 characters long';
    }

    if(!product.name){
        errors.name='Product Name is required';
    }

    if(!product.price){
        errors.price='Price is required';
    }
    if(!product.description){
        errors.description='Description is required';
    }


    

    return errors;

};