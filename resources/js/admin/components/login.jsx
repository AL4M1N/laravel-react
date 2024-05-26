
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, IconButton, Container, Box, Typography, CircularProgress } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import './Login.css';

const Login = () => {
    const [dataLoading, setDataLoading] = useState(false);
    const [loginForm, setLoginForm] = useState(true);
    const [forgetPasswordModal, setForgetPasswordModal] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [passwordType, setPasswordType] = useState(false);
    const [form, setForm] = useState({ email: "", password: "" });
    const [formErrors, setFormErrors] = useState({ email: "", password: "" });

    const nameRules = [(v) => !!v || "Email is required"];
    const passwordRules = [(v) => !!v || "Password is required"];
    const forgetEmailRules = [(v) => !!v || "Email is required"];

    const validate = (value, rules) => {
        for (let rule of rules) {
            const errorMessage = rule(value);
            if (errorMessage !== true) {
                return errorMessage;
            }
        }
        return true;
    };

    const loginAttempt = async (event) => {
        event.preventDefault();
        setDataLoading(true);

        try {
            const response = await axios.post("/login-check", form);
            if (response.data.success === true) {
                window.location.href = "/admin/index";
            } else if (response.data.success === "inactive") {
                alert("Sorry! Your account is inactive");
            } else {
                alert("Invalid Email or Password");
            }
        } catch (error) {
            console.error("There was an error logging in!", error);
        } finally {
            setDataLoading(false);
        }
    };

    const recoverPassword = async (event) => {
        event.preventDefault();

        if (userEmail === "") {
            alert("Email can't be empty!");
            return;
        }

        setDataLoading(true);

        try {
            const response = await axios.get(`/recover-password/${userEmail}`);
            if (response.data.status === false) {
                alert("Invalid Email");
            } else {
                alert(response.data.msg);
            }
        } catch (error) {
            console.error("There was an error recovering the password!", error);
        } finally {
            setDataLoading(false);
        }
    };

    return (
        <Container>
            {loginForm ? (
                <Box component="form" onSubmit={loginAttempt} className="login_form">
                    <Box className="d-flex align-items-center justify-content-center mb-8">
                        <Box className="row mx-auto" align="center">
                            <Box className="col-md-3">
                                <img src="/assets/website/Cloud-BPO-BLUE.png" alt="" height="40" />
                            </Box>
                        </Box>
                    </Box>
                    <Box className="form-group">
                        <TextField
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="Enter Email"
                            label="Email"
                            fullWidth
                            required
                            error={!!formErrors.email}
                            helperText={formErrors.email}
                        />
                    </Box>
                    <Box className="form-group" mt={2}>
                        <TextField
                            type={passwordType ? "text" : "password"}
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            placeholder="Enter Password"
                            label="Password"
                            fullWidth
                            required
                            error={!!formErrors.password}
                            helperText={formErrors.password}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={() => setPasswordType(!passwordType)}>
                                        {passwordType ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                ),
                            }}
                        />
                    </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="py-4 mt-5 sub_button"
                        disabled={dataLoading}
                        startIcon={dataLoading && <CircularProgress size={20} />}
                    >
                        Sign In
                    </Button>
                    <Box className="d-flex align-items-center justify-content-center" mt={2}>
                        <Button variant="text" onClick={() => setForgetPasswordModal(true)}>
                            Forget Password?
                        </Button>
                    </Box>
                    <Box className="fixed-footer pb-8" mt={2}>
                        <Typography className="d-flex align-items-center justify-content-center">
                            Powered By
                            <img src="/assets/website/dtcl.png" alt="dtcl" height="20" className="ms-2" />
                        </Typography>
                    </Box>
                </Box>
            ) : null}


        </Container>
    );
};

export default Login;

