import { Box, Button, Grid2 as Grid, Modal, TextField, Typography } from "@mui/material"
import { createContext, Dispatch, useEffect, useReducer, useRef, useState } from "react";
import { Action, userReducer, UserType } from "./User";
import UpdateUser from "./UpdateUser";
import  ShowName  from "./showName";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const userContext = createContext<[UserType, Dispatch<Action>]>([
    {} as UserType,
    () => {},
  ]);

const Login = () => {



    const [user, userDispatch] = useReducer(userReducer, {} as UserType);

    const [isLogin, setIsLogin] = useState(false);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const nameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmitLogin = () => {
        userDispatch(
            {
                type:'ADD',
                data:{
                firstName: nameRef.current?.value || "",
                password: passwordRef.current?.value || "",
                lastName: ' ',
                address: '',
                phone: '',
                email: ''
                }
            }
        )
    }

    return (
        <>
            <userContext.Provider value={[user, userDispatch] }>

            <Grid container>
                <Grid size={4}>
                    {!isLogin ? (
                        <Button color="primary" variant="contained"    sx={{
                            position: "absolute",
                            top: "10px",
                            left: "10px",
                          }}onClick={() => setOpen(!open)}>
                            Login
                        </Button>
                    ) : (
                        <ShowName/> 
                    )}
                </Grid>
            </Grid>
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        הכנס פרטים
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField label="שם משתמש" inputRef={nameRef} />
                        <TextField label="סיסמא" inputRef={passwordRef}   sx={{ mt: 2 }}/>
                        <Button
                            onClick={() => {
                                handleSubmitLogin();
                                setOpen(false);
                                setIsLogin(true);

                            }}
                            sx={{ mt: 2 }}
                        >
                            Login
                        </Button>
                    </Typography>
                </Box>
            </Modal>
            </userContext.Provider>
        </>
    );
};

export default Login
