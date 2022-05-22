import React from 'react';
import { useState } from 'react';

const Contact = () =>{

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
        collage:"",
    });

    const InputEvent = (event) =>{
        const {name,value} = event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        });

    };
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`my name is ${data.fullname}. my phone number is ${data.phone}, my collage name is ${data.collage} my email id is ${data.email}, my msg is ${data.msg}`);
    };
    
    return(
        <>
        <div className='my-5'>
            <h1 className='text-center'>Contact US</h1>

        </div>
        <div className='container contact_div'>
            <div className='row'>
                <div className='col-md-6 col-10 mx-auto'>
                    <form onSubmit={formSubmit}>
                    <div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" 
  className="form-control"
   id="exampleFormControlInput1" 
   name="fullname"
   value={data.fullname}
   onChange={InputEvent}
   placeholder="Enter Ur Full Name"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
  <input type="number"
   className="form-control"
    id="exampleFormControlInput1"
    name="phone"
   value={data.phone}
   onChange={InputEvent}
   placeholder="Mobile Number"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Collage</label>
  <input type="text"
   className="form-control"
    id="exampleFormControlInput1" 
    name="collage"
   value={data.collage}
   onChange={InputEvent}
    placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email"
   className="form-control"
    id="exampleFormControlInput1" 
    name="email"
   value={data.email}
   onChange={InputEvent}
    placeholder="name@example.com"/>
</div>

<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" 
  id="exampleFormControlTextarea1" 
  rows="3"
  name="msg"
   value={data.msg}
   onChange={InputEvent}
  ></textarea>
</div>
<div className="col-12">
    <button className="btn btn-outline-warning" type="submit">Submit form</button>
  </div>
                    </form>

                </div>

            </div>

        </div>
        
        </>
    );
}
export default Contact;