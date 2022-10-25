import React, {useState} from "react";
import {Field, Form, Formik} from "formik";
import {object, string} from "yup";
import * as Yup from "yup";
import {Box, TextField, Typography} from "@mui/material";

const Schema = Yup.object().shape({
        username: string()
            .required("Please enter name")
            .min(2, "Name too short"),
        password: string()
            .required("Please enter password")
            .min(7, "Password should be minimum 7 characters long")
    });

const SignUp = () => {
    const [user, setUser] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [registration, setRegistration] = useState<boolean>()

    const initialValues = {
        username: user,
        password: pass,
    };

    const register = (user: string, pass: string) => {
        console.log('register');
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: user,
                password: pass
            })
        }
        fetch(`http://localhost:3005/signup`, requestOptions).then(r => {
            if (r.redirected) {
                window.location.replace(r.url);
                Promise.resolve(r);
            }

        })
    }

    const login = (user: string, pass: string, ) => {
        console.log('login');
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: user,
                password: pass
            })
        }
        fetch(`http://localhost:3005/login/password`, requestOptions).then(r => {
            if (r.redirected) {
                window.location.replace(r.url);
                Promise.resolve(r);
            }
        })
    }

    return (
        <div className="MaterialForm">
            <Typography variant="h5">
                Prisijungimo ir registracijos puslapis
            </Typography>
            <Formik
                validationSchema={Schema}
                initialValues={initialValues}
                onSubmit={(values, formikHelpers) => {
                    // formikHelpers.resetForm();
                }}
            >
                {({errors, values,handleBlur, isValid, touched, dirty}) => {
                    console.log('errors', errors)
                    return (
                        <Form style={{
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            <Field
                                type="text"
                                title="username"
                                label="username"
                                onBlur={handleBlur}
                                error={!!errors.username && !!touched.username}
                                as={TextField}
                                variant="outlined"
                                color="primary"
                                name="username"
                            />
                            <Box height={14} />
                            <Field
                                type="password"
                                title="password"
                                onBlur={handleBlur}
                                label="password"
                                fullWidth
                                error={!!errors.password && !!touched.password}
                                helperText={Boolean(touched.password) && errors.password}
                                as={TextField}
                                variant="outlined"
                                color="primary"
                                name="password"
                            />
                            <Box height={14} />
                            <button disabled={!!errors.username || !!errors.password}
                                onClick={() => {
                                if (values.username && values.password) {
                                    registration ? register(values.username, values.password) : login(values.username, values.password)
                                }
                            }}>
                                {
                                    registration ? 'Užsiregistruokite' : 'Prisijungti'
                                }
                            </button>
                            {
                                registration ? (<div>
                                    Gal jungiatės ne pirmą kartą? Tuomet <a href='#' onClick={() => {
                                    setRegistration(false)
                                }}>prisijunkite</a>.
                                </div>) : (<div>
                                    Jungiatės pirmą kartą? Tuomet <a href='#' onClick={() => {
                                    setRegistration(true)
                                }}>užsiregistruokite</a>.
                                </div>)
                            }
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default SignUp