import { AccountCircle, Lock, Password, VerifiedUser } from "@mui/icons-material";
import { Button, Checkbox, TextField } from "@mui/material";
import { Box, flexbox } from "@mui/system";
import Axios from "axios-observable";
import { Field, Form, Formik, useFormik } from "formik";
import React, { Fragment } from "react";
import { LoadingBar } from "react-redux-loading-bar";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



interface MyFormValues {
    username: string,
    password: string,
    remember: boolean
}

export const Login = () => {

    const initialValues: MyFormValues = { username: "mrostamy92@gmail.com", password: "1234", remember: false }
    const api: string = "http://localhost:8080/api/V1/site/admin/auth/"
    let axios = Axios.create({ baseURL: api });


    return (
        <Fragment>
            <ToastContainer />
            <div className="login-box">
                <div className="login-logo">
                    <Link to="/" replace={true}>
                        <b>ورود به سایت</b>
                    </Link>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">فرم زیر را تکمیل کنید و ورود بزنید</p>

                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Formik
                                initialValues={initialValues}
                                onSubmit={(values) => {

                                    console.log(values.username + ":" + values.password)

                                    axios.
                                        post('/login', { username: values.username, password: values.password, remember: values.remember })
                                        .subscribe(r => {
                                            console.log(r.data); localStorage.setItem("token", r.data.token);
                                            toast(r.data);
                                        }, e => { (console.log(e)) })
                                    console.log(values);
                                }} >
                                <Form style={{ alignItems: "center", alignContent: "center" }}>
                                    <div >
                                        <TextField dir="rtl" type="email" variant="standard" size="small" name="username" id="username" label="نام کاریری" />
                                        <VerifiedUser sx={{ color: 'action.active', mr: 0.5, my: 1.5, fontSize: "20px" }} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <TextField size="small" variant="standard" id="password" name="password" type="password" label="رمز عبور" />
                                        <Lock sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize: "20px" }} />
                                    </div>
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="checkbox icheck">
                                                <label>
                                                    <Checkbox size="small" name="remember" id="remember" /> یاد آوری من
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-4">
                                            <Button variant="contained" color="primary" type="submit">ورود</Button>
                                        </div>

                                    </div>
                                </Form>
                            </Formik>
                        </Box>
                        <div className="social-auth-links text-center mb-3">
                            <p>- OR -</p>
                            <a href="#" className="btn btn-block btn-primary">
                                <i className="fa fa-facebook mr-2"></i> ورود با اکانت فیسوبک
                            </a>
                            <a href="#" className="btn btn-block btn-danger">
                                <i className="fa fa-google-plus mr-2"></i> ورود با اکانت گوگل
                            </a>
                        </div>


                        <p className="mb-1">
                            <a href="#">رمز عبورم را فراموش کرده ام.</a>
                        </p>
                        <p className="mb-0">
                            <a href="register.html" className="text-center">ثبت نام</a>
                        </p>
                    </div>

                </div>
            </div>
        </Fragment >

    )
}
