import React, {useState} from 'react';
import {
    Alert,
    Box,
    Button,
    Card,
    CircularProgress,
    Container,
    Grid,
    TextField,
    Typography
} from "@mui/material";
import {Link, useHistory} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";

function LoginPage() {
    console.log("login")
    const {login} = useAuth();
    const history = useHistory();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState({state: false, message: ""});
    const [errorPassword, setErrorPassword] = useState({state: false, message: ""});
    const [password, setPassword] = useState('');
    const handleEmail = e => setEmail(e.target.value);
    const handlePassword = e => setPassword(e.target.value);

    function validate(email, password) {
        let validateError = false;
        if (email === "") {
            setErrorEmail({state: true, message: "Email is required"})
            validateError = true;
        } else {
            setErrorEmail({state: false, message: ""})
        }
        if (password === "") {
            setErrorPassword({state: true, message: "Password is required"})
            validateError = true;
        } else {
            setErrorEmail({state: false, message: ""})
        }
        return validateError;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate(email, password)) {
            setLoading(true);
            try {
                await login(email, password);
                setLoading(false);
                history.push('/');
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError('Wrong Credentials');
                //setTimeout(() => setError(''), 2500);
            }
        }
    }
    return (
        <Box className="loginPage" sx={{
            bgcolor: '#123123'
        }}>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '100vh',
                    }}
                >
                    <Card component="form" onSubmit={handleSubmit} noValidate sx={{p: 3, m: "auto"}}>
                        <Typography variant="h6" component="div" textAlign={"center"}>
                            My Music App
                        </Typography>
                        <TextField
                            error={errorEmail.state}
                            helperText={errorEmail.message}
                            variant="standard"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleEmail}
                        />
                        <TextField
                            error={errorPassword.state}
                            helperText={errorPassword.message}
                            variant="standard"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handlePassword}
                        />
                        <Box
                            sx={{mt: 3, mb: 2}}
                        >
                            {loading ?
                                <Box sx={{textAlign: "center"}}><CircularProgress color="inherit"/></Box>
                                :
                                <Box>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                    >
                                        Sign In
                                    </Button>
                                </Box>
                            }
                            {error && <Box sx={{textAlign: "center", mt: 1}}><Alert variant="filled"
                                                                                    severity="error">{error}</Alert></Box>}
                        </Box>

                        <Grid container>
                            <Grid item>
                                <Link to="/register">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Card>
                </Box>
            </Container>
        </Box>
    );
}

export default LoginPage;