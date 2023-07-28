// import React, { useState } from 'react';
// import './Register.css';
// import { Link, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
// import validation from './Validation';
// import axios from 'axios';
// import {login, loginuser} from './redux/userSlice';
// import { useDispatch, useSelector } from 'react-redux';

// export default function Register() {
//   let navigate = useNavigate();
//   const dispatch=useDispatch();
//   const user=useSelector(state=>state.user.value)
//   // console.log(user);
//   const [values, setValues] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirm_password: '',
//   });
//      const{name,email,password}=values;
//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirm_password: '',
//   });

//   const handleInput = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };
//   function handleValidation(e) {
//     e.preventDefault();
//     setErrors(validation(values));

    
//     if (Object.keys(errors).length === 0 && errors.constructor === Object) {
//       alert("The form is successfully submit")
     
//       navigate("/");
//       window.location.reload();
//     }
//   }
//   const onSubmit =async (e) =>
//   {
//     e.preventDefault();
//     await axios.post("http://localhost:9090/post1",values);
//     dispatch(login(name))


//   };
  

//   return (
//     <div className="container-xl mb-4 w-100">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow align-items-center">
//           <h2 className="text-center m-4">Signup form</h2>

//           <form onSubmit={handleValidation}>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">
//                 Full name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter your name"
//                 name="name"
//                 onChange={handleInput}
//                 value={name}
//               />
//               {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
//             </div>

//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">
//                 Email or username
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Enter your email"
//                 name="email"
//                 onChange={handleInput}
//                 value={email}
//               />
//               {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
//             </div>

//             <div className="mb-4">
//               <label htmlFor="password" className="form-label">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Enter your password"
//                 name="password"
//                 onChange={handleInput}
//               />
//               {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
//             </div>

//             <div className="mb-4">
//               <label htmlFor="confirm_password" className="form-label">
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Enter confirm password"
//                 name="confirm_password"
//                 onChange={handleInput}
//               />
//               {errors.confirm_password && (
//                 <p style={{ color: 'red' }}>{errors.confirm_password}</p>
//               )}
//             </div>

//             <br />
//             <div className="d-grid gap-5 d-md-flex justify-content-md-end">
//               <button type="submit" onSubmit={onSubmit}  className="btn btn-outline-primary">
//                  Submit
//               </button>
//               <Link className="btn btn-outline-danger" to="/">
//                 Cancel
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addUser } from './features/userSlice';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([] );
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const dispatch=useDispatch();


  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    event.preventDefault();
    // dispatch(addUser(name));
    setPassword(event.target.value);
  };
// ------------------------redux----------------
  const handleSubmit =  (event) => {
    event.preventDefault();
    dispatch(addUser(name));

    setErrors(validateForm({ name, email, password }));
    try{
      const response= axios.post('http://localhost:8181/api/v1/auth/register',{
        name:name,
        email:email,
        password:password
        
      });
      console.log(response.status);
      if(response.status===200){
        setName("");
        setEmail('');
        setPassword('');
      }
      
    }
    catch(error){
      alert(error);
      setIsSubmit(false);
      
    }
    if (isSubmit) {
      alert("Register Successfully")
      navigate('/login');
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (values.name.trim() === '') {
      errors.name = 'Username is required';
      setIsSubmit(false);
    }

    if (values.email.trim() === '') {
      errors.email = 'Email is required';
      setIsSubmit(false);
    }

    if (values.password.trim() === '') {
      errors.password = 'Password is required';
      setIsSubmit(false);
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      setIsSubmit(false);
    }

    setIsSubmit(Object.keys(errors).length === 0);

    return errors;
  };

  return (
    <>
     <div className="container-xl mb-4 w-100">
       <div className="row">
         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow align-items-center">
         <h2 className="text-center m-4">Signup form</h2>
         {/* <h2>{name}</h2> */}
      <div className='login'>
        <form className='login_form'  onSubmit={handleSubmit} >
          <br></br>
      
          <div className="mb-3">
              <label htmlFor="name" className="form-label">
                 Full name
               </label>
              <input
               type="text"
               className="form-control"
                 placeholder="Enter your name"
               name="name"
                 onChange={handleName}
                value={name}
              />
             {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>

          <div className="mb-3">
              <label htmlFor="name" className="form-label">
                 Email
               </label>
              <input
               type='email'
               className="form-control"
                 placeholder="Enter your Email"
                id='email'
                 onChange={handleEmail}
                value={email}
              />
             {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>

             <div className="mb-3">
              <label htmlFor="name" className="form-label">
                 Password
               </label>
              <input
               type='password'
               className="form-control"
                 placeholder="Enter your Password"
                id="pwd"
                 onChange={handlePassword}
                value={password}
              />
             {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>

          <button className="btn btn-outline-primary" >
            Sign In
          </button>
        </form>
      </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Register;
