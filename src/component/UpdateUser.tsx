import { useContext, useRef, useState } from "react"
import { userContext } from "./login"
import { Box, Modal, TextField, Typography } from "@mui/material"
import ShowName, { btnUpdateContext } from "./showName";
// import ShowName from "./showName";
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
  const UpdateUser=()=>{

    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [user,Dispatch]=useContext(userContext)
    const [btnUpdate,btnUpdateDispatch]=useContext(btnUpdateContext)
    
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phonRef = useRef<HTMLInputElement>(null);

    const handelUpdate = () => {
        Dispatch(
            {
                type:'UPDATE',
                data:{
                firstName: firstNameRef.current?.value || "",
                lastName: lastNameRef.current?.value || "",
                password: passwordRef.current?.value || "",
                address: addressRef.current?.value || "",
                phone: phonRef.current?.value || "",
                email:emailRef.current?.value || "",
                }
            }
        )
        setOpen(false);
        btnUpdateDispatch(!btnUpdate)
    }

return( 
       <div>
    {/* <Button onClick={handleOpen}>Open modal</Button> */}
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form action="">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          מלא את הפרטים
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>

        <TextField label="שם פרטי" inputRef={firstNameRef  }sx={{ mt: 2 }} />
        <TextField label="שם משפחה" inputRef={lastNameRef } sx={{ mt: 2 }}/>
        <TextField label="סיסמא" inputRef={passwordRef} sx={{ mt: 2 }}/>
        <TextField label="כתובת" inputRef={addressRef } sx={{ mt: 2 }}/>
        <TextField label="טלפון" inputRef={phonRef }sx={{ mt: 2 }} />
        <TextField label="מייל" inputRef={emailRef} sx={{ mt: 2 }}/>
        <button  onClick={()=>handelUpdate()} style={{margin:'40px'}}>עדכן</button>

        </Typography>
        </form>
      </Box>
    </Modal>
   
  </div>)
}
export default UpdateUser
