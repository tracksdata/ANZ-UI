import React,{useState,useEffect} from 'react';

const useForm = (submitForm,validate) => {

    const[product,setProduct]=useState({
        id:'',
        name:'',
        price:'',
        description:'',
    })

    const[errors,setErrors] = useState({})
    const[isSumited,setIsSumited]=useState(false)




    const handleChange=(e)=>{
        const{name,value}=e.target;
        setProduct({
            ...product,
            [name]:value
        })
    }
   
    const handleSubmit=(e)=>{
        e.preventDefault();

        setProduct({id:e.target.id.value,name:e.target.name.value,description:e.target.description.value,price:e.target.price.value});
        

        // validations...
        setErrors(validate(product))

        // after validations
        setIsSumited(true);
        
        
        
        console.log('--- handleSubmit called');
        console.log('--->id is: '+e.target.id.value);

    }   

    useEffect(()=>{
        console.log('>>>> useEffect');
        if(Object.keys(errors).length===0  && isSumited){
          submitForm();
        }


    },[errors])


  return{handleSubmit,handleChange,product,errors}
};

export default useForm;