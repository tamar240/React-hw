import { Avatar, Stack } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors'
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import UpdateUser from './UpdateUser'
import { userContext } from './login';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.blue',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export const btnUpdateContext = createContext<[boolean, Dispatch<SetStateAction<Boolean>>]>([
  {} as boolean,
  () => { },
]);

const ShowName = () => {

  const [user, Dispatch] = useContext(userContext)

  const [updateBtn, setUpdateBtn] = useState(false)


  return (
    <btnUpdateContext.Provider value={[updateBtn, setUpdateBtn]}>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: deepOrange[500] }} style={{
          position: "absolute",
          top: "10px",
          left: "10px",
        }}>{user.firstName.charAt(0) + user.lastName.charAt(0)} </Avatar>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
        }}>
           <h3> Hi, {user.firstName}   </h3>
          <h2>❤️🩷home🩶🤍</h2>
         
          </div>
        <button onClick={() => { setUpdateBtn(true) }} style={{
          position: "absolute",
          top: "10px",
          left: "40px",
        }}>update</button>
        {updateBtn && <UpdateUser />}
      </Stack>
    </btnUpdateContext.Provider>
  );
}

export default ShowName;