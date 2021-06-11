import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "../actions/authActions";
import TextField from "@material-ui/core/TextField";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./Register.css";

const Register = ({ history }) => {
  const [infoRegister, setInfoRegister] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.error) {
      setErrors(auth.error);
      //   setTimeout(() => {
      //     setErrors(null);
      //   }, 5000);
    }
    if (auth.isAuth) {
      history.push("/feed");
    }
  }, [auth.isAuth, auth.error]);

  const handleChangeRegister = (e) => {
    setInfoRegister({ ...infoRegister, [e.target.name]: e.target.value });
  };
  const registerNow = (e) => {
    e.preventDefault();
    console.log("info Data : ",infoRegister)
      dispatch(registerUser(infoRegister));
  };
  // handle login
  const [infoLogin, setInfoLogin] = useState({
    email: "",
    password: "",
  });
  const handleChangeLogin = (e) => {
    setInfoLogin({ ...infoLogin, [e.target.name]: e.target.value });
  };
  const login = (e) => {
    e.preventDefault();
    dispatch(loginUser(infoLogin));
  };
  return (
    // <div className="row no-gutters">
    //   <div className="col-md-6 no-gutters">
    //     <div className="leftside d-flex justify-content-center align-items-center "> hello</div>
    //   </div>
    //   <div className="col-md-6 no-gutters">
    //     <div className="rightside d-flex justify-content-center align-items-center"> i'm here</div>
    //   </div>
    // </div>
    <div className="color">
      <div className="row no-gutters">
        <div className="col-md-6 no-gutters">
          <Form
            className="leftside justify-content-center align-items-center  left "
            onSubmit={login}
          >
            <div className="log">
              <h4 className="create">Login to your account</h4>
              <Form>Email</Form>
              <Form.Control
                onFocus={() => setErrors(null)}
                placeholder="Enter email"
                type="search"
                type="text"
                name="email"
                onChange={handleChangeLogin}
              />
            </div>
            <div className="log">
              <Form className="pass">Password</Form>
              <Form.Control
                placeholder="Password"
                type="search"
                type="password"
                name="password"
                onChange={handleChangeLogin}
              />
            </div>
            {errors && errors.map((el) => <h1>{el.msg}</h1>)}
            <button className="button" type="submit">
              Login
            </button>
          </Form>
        </div>
        <div className="col-md-6 no-gutters">
          <Form
            className="all"
            className="rightside justify-content-center align-items-center right"
            onSubmit={registerNow}
          >
            <div className="form">
              {/* <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control className="form" type="email" placeholder="Enter email" />

          </Form.Group> ------------------ Register */}
              <h4 className="create">Create an account</h4>
              <Form>First name</Form>
              <Form.Control
                name="firstname"
                placeholder="First name"
                type="text"
                onChange={handleChangeRegister}
              />
            </div>
            <div >
              <Form className="pass">Last name</Form>
              <Form.Control
                placeholder="Last name"
                type="text"
                name="lastname"
                onChange={handleChangeRegister}
              />
            </div>
            <div >
              <Form className="pass">Phone</Form>
              <Form.Control
                placeholder="Phone"
                type="text"
                name="phone"
                onChange={handleChangeRegister}
              />
            </div>
            <div >
              <Form className="pass">Email</Form>
              <Form.Control
                placeholder="Enter email"
                name="email"
                onChange={handleChangeRegister}
              />
            </div>
            <div >
              <Form className="pass">Password</Form>
              <Form.Control
                placeholder="Password"
                type="password"
                name="password"
                onChange={handleChangeRegister}
              />
            </div>
            {errors && errors.map((el) => <h1>{el.msg}</h1>)}
            <button className="button" type="submit" >
              Register
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
