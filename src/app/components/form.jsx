"use client"
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import  "./form.css"
const UserRegForm = () => {
    const validation = Yup.object().shape({
        email: Yup.string().email("Invalid email, please enter a correct one ").required("Email is required"),
        username: Yup.string().min(3, " User must have at least 3 character long").required("Username is required"),
        password: Yup.string().min(8, "Password most be 8 character long").required("Password is required"),

    });

    const handelSubmit = (values) => {
        console.log("values", values);
    }

    return (
        <div>

            <h1> User registration form</h1>
            <Formik
                initialValues={{ email: '', username: '', password: '' }}
                validationSchema={validation}
                onSubmit={handelSubmit}
            >
                {({ isSubmit }) => (
                    <Form>
                        <div>
                            <label>Email:</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name='email' component="div" />
                        </div>
                        <div>
                            <label>Username</label>
                            <Field type="username" name="username" />
                            <ErrorMessage name='username' component="div" />
                        </div>
                        <div>
                            <label>Password</label>
                            <Field type="password" name="password" />
                            <ErrorMessage name='password' component="div" />
                        </div>
                        <button type="submit" disabled={isSubmit}>Registration</button>

                    </Form>
                )}
            </Formik>
        </div>
    )


}

export default UserRegForm
