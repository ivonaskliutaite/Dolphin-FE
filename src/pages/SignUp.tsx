import React, {useState} from "react";
import {Field, Form, Formik} from "formik";
import {LoginButton} from "../components/Buttons";
import { string} from "yup";
import * as Yup from "yup";
import {Box, TextField, Typography} from "@mui/material";

const Schema = Yup.object().shape({
        username: string()
            .required("Please enter name")
            .min(2, "Name too short"),
        password: string()
            .required("Please enter password")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Minimum 8 ženklai, minimum viena raidė didžioji, minimum viena raidė mažoji, vienas skaičius, vienas specialus ženklas"
            ),
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
                            margin: "50px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems:"center",
                            gap: "1vh",
                        }}>
                            <Typography variant="h4">
                                Prisijungimo/ registracijos puslapis
                            </Typography>
                            <Box height={14} />
                            <Field
                                style={{
                                    alignItems: "center"
                                }}
                                type="text"
                                title="username"
                                label="username"
                                onBlur={handleBlur}
                                error={!!errors.username && !!touched.username}
                                helperText={!!touched.username && errors.username}
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
                                error={!!errors.password && !!touched.password}
                                helperText={!!touched.password && errors.password}
                                as={TextField}
                                variant="outlined"
                                color="primary"
                                name="password"
                            />
                            <Box height={14} />
                            <LoginButton disabled={!!errors.username || !!errors.password}
                                onClick={() => {
                                if (values.username && values.password) {
                                    registration ? register(values.username, values.password) : login(values.username, values.password)
                                }
                            }}>
                                {
                                    registration ? 'Užsiregistruokite' : 'Prisijungti'
                                }
                            </LoginButton>
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