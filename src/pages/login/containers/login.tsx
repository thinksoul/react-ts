import {Fragment} from 'react'
import {
    Input,
    Button
} from 'antd';

function Login(){
    return(
        <Fragment>
            <Input placeholder='userName'></Input>   
            <Input placeholder='passWord'></Input>   
            <Button>Login In</Button>
        </Fragment>
    )
}

export default Login;
