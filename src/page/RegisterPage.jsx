import React, {useState} from 'react';
import {
    Alert,
    Box,
    Button,
    Card,
    CardMedia,
    CircularProgress,
    Container,
    Grid, InputAdornment,
    TextField,
    Typography
} from "@mui/material";
import {Link, useHistory} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";
import {AccountCircle, Lock} from "@mui/icons-material";

function RegisterPage(props) {
    console.log("registro")

    const {signup} = useAuth();
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
        setError('');
        if (!validate(email, password)) {
            setLoading(true);
            try {
                await signup(email, password);
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
            backgroundImage: "url(./1366_2000.jpg)",
            backgroundRepeat:"no-repeat" ,
            backgroundSize: "cover",
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
                        <CardMedia sx={{width:"50px",m:"auto"}}
                                   component="img"
                                   image="./spotify.png"
                                   alt="spotify"
                        />
                        <Typography variant="h6" component="div" textAlign={"center"}>
                            My Music App
                        </Typography>
                        <TextField
                            error={errorEmail.state}
                            helperText={errorEmail.message}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Correo Electronico"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleEmail}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            error={errorPassword.state}
                            helperText={errorPassword.message}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handlePassword}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Box
                            sx={{mt: 3, mb: 2}}
                        >
                            {loading ?
                                <Box sx={{textAlign: "center"}}><CircularProgress color="inherit"/></Box>
                                :
                                <Box>
                                    <Button
                                        color={"success"}
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                    >
                                        Registrarse
                                    </Button>
                                </Box>
                            }
                            {error && <Box sx={{textAlign: "center", mt: 1}}><Alert variant="filled"
                                                                                    severity="error">{error}</Alert></Box>}
                        </Box>

                        <Grid container>
                            <Grid item  m={"auto"}>
                                <Link to="/login" >
                                    <Typography color={"green"}>
                                        {"Ingresar"}
                                    </Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </Card>
                </Box>
            </Container>
        </Box>
    );
}

export default RegisterPage;