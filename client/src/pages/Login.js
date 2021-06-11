import React, { useEffect, useState } from "react";
import { loginUser } from "../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";

const Login = ({ history }) => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const login = (e) => {
    e.preventDefault();
    dispatch(loginUser(info));
  };

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.isAuth) {
      history.push("/feed");
    }
    if (auth.error) {
      setErrors(auth.error);
      //   setTimeout(() => {
      //     setErrors(null);
      //   }, 5000);
    }
  }, [auth.isAuth, auth.error]);
  return (
    // <form onSubmit={login}>
    //   <div>
    //     <label>Email</label>
    //     <input
    //       onFocus={() => setErrors(null)}
    //       type="text"
    //       name="email"
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <div>
    //     <label>Password</label>
    //     <input type="password" name="password" onChange={handleChange} />
    //   </div>
    //   {errors && errors.map((el) => <h1>{el.msg}</h1>)}
    //   <button type="submit">Login</button>
    // </form>
    <div>
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
              onChange={handleChange}
            />
          </div>
          <div className="log">
            <Form className="pass">Password</Form>
            <Form.Control
              placeholder="Password"
              type="search"
              type="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          {errors && errors.map((el) => <h1>{el.msg}</h1>)}
          <button className="button" type="submit">
            Login
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
