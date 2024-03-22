import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataProvider";

import {
  authenticateLogin,
  authenticateSignUp,
} from "../../Routes/ProtectedRoute";
import { HttpStatusCode } from "../../statusCode";
const Component = styled(Box)`
  height: 70vh;
  widht: 90vh;
`;
const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 83%;
  width: 28%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 25px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;
const Requestotp = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;
const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2875f0;
  font-weight: 600;
  cursor: Pointer;
`;
const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0px;
  margin-top: 10px;
  font-weight: 600;
`;
const accountInitialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your orders, wishlist and Recommandations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here !",
    subHeading: "Sign Up with your mobile to get started",
  },
};
const signupInitalvalue = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  phone: "",
  email: "",
  password: "",
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValue.login);
  const [signup, setSignup] = useState(signupInitalvalue);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);

  const { setAccount } = useContext(DataContext) || {};
  const hanldeClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValue.login);
    setError(false);
  };
  const toggleSignup = () => {
    toggleAccount(accountInitialValue.signup);
  };
  const onInputchange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const signupUser = async () => {
    let response = await authenticateSignUp(signup);
    if (!response) return;
    hanldeClose();
    setAccount(signup.firstName);
  };
  const onValueChange = async (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);

    if (!response) setError(true);
    else {
      setError(false);
      hanldeClose();
      setAccount(login.loginIdentifier);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={hanldeClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography varient="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => onValueChange(e)}
                name="loginIdentifier"
                label="Enter Email/Mobile Number"
              />
              {error && <Error> Please Enter Valid Email and Password </Error>}
              <TextField
                variant="standard"
                onChange={(e) => onValueChange(e)}
                name="password"
                label="Enter Password"
              />
              <Text>
                By Continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton onClick={() => loginUser()}>Login</LoginButton>
              <Typography style={{ margin: "auto" }}>OR</Typography>
              <Requestotp>Request OTP</Requestotp>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Flipkart ? Create an account{" "}
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => onInputchange(e)}
                name="firstName"
                label="Enter First Name"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputchange(e)}
                name="lastName"
                label="Enter Last Name"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputchange(e)}
                name="userName"
                label="Enter Username"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputchange(e)}
                name="email"
                label="Enter Email"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputchange(e)}
                name="password"
                label="Enter Password"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputchange(e)}
                name="phone"
                label="Enter Phone"
              />
              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
