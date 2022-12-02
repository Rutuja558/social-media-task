import { Formik } from 'formik'
import * as yup from 'yup'
import React from 'react'
import { Button, Card, Col, Container, Form, FormControl, FormGroup, Row, Spinner } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { newUserAdd } from '../redux/actions/newAccountAction'

export default function CreateAccount() {
    const dispatch = useDispatch()
    const schema = yup.object().shape({
        firstName: yup.string().required("Please Enter Your First Name"),
        lastName: yup.string().required("Please Enter Your Last Name"),
        email: yup.string().required("Please Enter Your Email"),
    });
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col lg={{ span: 4, offset: 4 }} sm={{ span: 10, offset: 1 }} xs={{ span: 12 }} className="mt-3">
                        <Card >
                            <Card.Body className="px-5 pt-3 border-0 rounded-0">
                                <h3 className="text-center mb-4">Create an Account</h3>
                                <Formik
                                    initialValues={{
                                        firstName: '',
                                        lastName: '',
                                        email: '',
                                    }}
                                    validationSchema={schema}
                                    onSubmit={values => {
                                        dispatch(newUserAdd(values))
                                    }}
                                >{({
                                    handleSubmit,
                                    handleChange,
                                    handleBlur,
                                    values,
                                    errors,
                                    touched
                                }) => (<Form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <FormControl className="form-control border-0 py-2" placeholder="First Name" type="text" name="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur} isInvalid={!!errors.firstName && !!touched.firstName}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                                    </FormGroup>
                                    <FormGroup>
                                        <FormControl className="form-control border-0 mt-2 py-2" placeholder="Last Name" type="text" name="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur} isInvalid={!!errors.lastName && !!touched.lastName}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                                    </FormGroup>
                                    <FormGroup>
                                        <FormControl className="form-control border-0 mt-2 py-2" placeholder="Email Id" type="text" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} isInvalid={!!errors.email && !!touched.email}></FormControl>
                                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                    </FormGroup>
                                    <Button type="submit" className="w-100 py-2 my-3" variant='dark' disabled={!errors.email && !errors.fullName && !errors.username && !errors.password ? false : true} >Submit</Button>
                                </Form>)}
                                </Formik>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
