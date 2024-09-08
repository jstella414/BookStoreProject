import { useState, FormEvent } from "react";
import { Paper,Stack,TextField,Typography, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () =>{
    const navigate = useNavigate();

const[username, setUsername] = useState("")
const[password, setPassword] = useState("")

    const handleSubmit = async (e :FormEvent) =>{
            console.log("SUBMITTED")

            navigate("/library")
            e.preventDefault();
            try {
                const { data } = await axios.post(
                  // If you don't proxy the URL, you would have to use
                  // http://localhost:3000/api/login
                  "/api/login",
                  {
                    username,
                    password,
                  },
                  {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );
                // This is how you get the access token
                console.log(data);
              } catch (error) {
                if (error.response?.status === 401) {
                  // Incorrect username or password
                }
              }


    }

    



    return(
    <>
    <Paper elevation={3} style={{ padding: 24 }}>
    <form 
    onSubmit={handleSubmit}
    method="POST"
    to="/now-playing"
    >

            <Stack>
                <Typography>Login</Typography>
                <TextField id="standard-basic" label="Username" size="small" variant="standard" />  
                <TextField id="standard-basic" label="Password" size="small" variant="standard"  />  
                <br/>
                <Button
                variant="outlined"
                        type="submit"
                        >
                        Login
                </Button>
            </Stack>
        </form>
        </Paper>
  
        
    </>
    )
}
export default Signin;