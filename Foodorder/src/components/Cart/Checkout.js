import classes from './Checkout.module.css';
import { useRef, useState } from 'react';
const Checkout = (props) =>{
    const name = useRef();
    const street = useRef();
    const zipcode = useRef();
    const city = useRef();
    
    const [formInputValid, setFormInputValid] = useState({
        name:true,
        street:true,
        city:true,
        zipcode:true,
    });

    const isEmpty = value => value.trim() === '';
    const isNotFiveChars = value => value.trim().length !==5;


    const formSubmitHandler = (event) =>{
        event.preventDefault();
        const enteredName = name.current.value;
        const enteredStreet = street.current.value;
        const enteredCity = city.current.value;
        const enteredZipcode = zipcode.current.value;
        // console.log(name.current.value);
       const enteredNameIsValid = !isEmpty(enteredName);
       const enteredCityIsValid = !isEmpty(enteredCity);
       const enteredStreetIsValid = !isEmpty(enteredStreet);
       const enteredZipcodeIsValid = !isNotFiveChars(enteredZipcode);

       setFormInputValid({
           name:enteredNameIsValid,
           city:enteredCityIsValid,
           street:enteredStreetIsValid,
           zipcode:enteredZipcodeIsValid,
       })

       const formIsValid = enteredCityIsValid&&enteredNameIsValid&&enteredStreetIsValid&&enteredZipcodeIsValid;

       if(!formIsValid){
           return;
       }

       props.onConfirm({
           name:enteredName,
           city:enteredCity,
           street:enteredStreet,
           zipcode:enteredZipcode,
       })
        
    }
    return(
        <form onSubmit={formSubmitHandler}>
            <div className={`${classes.control} ${formInputValid.name?'':classes.invalid}`}>
                <label htmlFor='name'>Your Name</label>
                <input ref = {name} type='text' id = 'name'></input>
                {!formInputValid.name &&<p>Enter Name</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='street'>Street Name</label>
                <input ref = {street} type='text' id = 'street'></input>
                {!formInputValid.street &&<p>Enter Street</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='zipcode'>Zipcode</label>
                <input ref = {zipcode} type='text' id = 'zipcode'></input>
                {!formInputValid.zipcode &&<p>Enter Zipcode</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City</label>
                <input ref = {city} type='text' id = 'city'></input>
                {!formInputValid.city &&<p>Enter City</p>}
            </div>
            <button type = "button" onClick={props.onCancel}>Cancel!</button>
            <button>Confirm!</button>
        </form>
    )
}

export default Checkout;