import { useFormik } from "formik";
import { Row, Col, Form, Button } from "react-bootstrap";
import { signUpSchema } from "../util/ValdationSchema";
const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Row className="justify-content-md-center">
      <Col xs={6}>
        <h3>Sign Up</h3>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="firstName"
              value={formik.values.firstName}
              isInvalid={formik.errors.firstName && formik.touched.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="lastName"
              value={formik.values.lastName}
              isInvalid={formik.errors.lastName && formik.touched.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email"
              value={formik.values.email}
              isInvalid={formik.errors.email && formik.touched.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <div style={{ display: "none" }}>
            <input type="pasword" name="hidden-password" />
          </div>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="password"
              value={formik.values.password}
              isInvalid={formik.errors.password && formik.touched.password}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="confirmPassword"
              value={formik.values.confirmPassword}
              isInvalid={
                formik.errors.confirmPassword && formik.touched.confirmPassword
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.confirmPassword}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default SignUp;
