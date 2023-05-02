import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaGooglePlus, FaPepperHot } from 'react-icons/fa';
const LoginWith = () => {
    return (
        <div>
            <Button>Manual LogIn <FaPepperHot></FaPepperHot></Button>
            <Button>LogIn-With-Google <FaGoogle></FaGoogle></Button>
            <Button>LogIn-With-GitHub <FaGithub></FaGithub></Button>

            <ButtonGroup className='ms-4'>
                <p><small>follow Us on: </small></p>
                <Button><FaFacebook></FaFacebook></Button>
                <Button><FaGithub></FaGithub></Button>
                <Button><FaGooglePlus></FaGooglePlus></Button>

            </ButtonGroup>
        </div>
    );
};

export default LoginWith;