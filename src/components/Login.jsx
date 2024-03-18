import { useFormik } from "formik";
import { useEffect } from "react";
import { loginSchema } from "../util/ValdationSchema";
import { Row, Col, Form, Button } from "react-bootstrap";
import * as Yup from "yup";
const emails = ["tamam@gmail.com", "tamam1@gmail.com", "tamam12@gmail.com"];

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: (values, formikHelper) => {
      // to know if email already used or not
      /* if (emails.find((email) => email.includes(values.email))) {
        formikHelper.setFieldError("email", "email already in use");
        return;
      } */
      alert(JSON.stringify(values, null, 2));
    },
  });
  // To send anyting to backend if login failed
  /* useEffect(() => {
    if (Object.keys(formik.errors).length > 0) {
      console.log(formik.errors);
    }
    console.log(formik);
  }, [formik]); */
  // To set value from api to input
  /* useEffect(() => {
    if (!formik.values.email) {
      formik.setFieldValue("email", "tamam@gmail.com");
    }
  }, [formik]); */
  const inputHandler = (e) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };
  return (
    <Row className="justify-content-md-center">
      <Col xs={6}>
        <h3>Login</h3>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              // onChange={formik.handleChange}
              onChange={inputHandler}
              onBlur={formik.handleBlur}
              name="email"
              value={formik.values.email}
              isInvalid={formik.errors.email && formik.touched.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          {/* <div>{formik.errors.email ? formik.errors.email : null}</div> */}
          <div style={{ display: "none" }}>
            <input type="pasword" name="hidden-password" />
          </div>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              // onChange={formik.handleChange}
              onChange={inputHandler}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              name="password"
              isInvalid={formik.errors.password && formik.touched.password}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          {/* <div>{formik.errors.password ? formik.errors.password : null}</div> */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
