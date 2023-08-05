import { useState } from 'react';

import { FormControl, FormGroup, InputLabel , Input, Typography, styled, Button} from '@mui/material';

import{ adduser } from '../service/api';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px;
    }
`
const defaultvalue = {
    name: '',
    username: '',
    email: '',
    password: '',
    phone: ''

}

const AddUser = () => {

    const [user,setuser] = useState(defaultvalue);
    

   const onValuechange =(e) => {
     console.log(e.target.name, e.target.value)
     setuser({ ...user, [e.target.name ]: e.target.value})
     
   }

   const adduserDetials = async () => {

    await adduser(user);

   }
    return(
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValuechange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValuechange(e)} name="username" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
               <Input onChange={(e) => onValuechange(e)} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>password</InputLabel>
                <Input onChange={(e) => onValuechange(e)} name="password" />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValuechange(e)} name="phone" />
            </FormControl>
            <FormControl>
            <Button variant="contained" onClick={() => adduserDetials()}>Add User</Button>
            </FormControl>
            
        </Container>
    )
}

export default AddUser;