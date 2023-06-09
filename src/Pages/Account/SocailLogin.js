import React, { useContext } from 'react';
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SocailLogin = () => {

    const { googleLogin, facebookLogin } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
                toast.success('Log in successful with google.', { id: 104 });
            })
            .catch(error => {
                if (error.code === 'auth/popup-closed-by-user' || 'auth/cancelled-popup-request') {
                    return;
                }
            })
    }

    const handleFacebookLogin = () => {
        facebookLogin()
            .then(result => {
                const user = result.user;
                navigate('/');
                toast.success('Log in successful with google.', { id: 105 });
                console.log(user);
            })
            .catch(error => {
                console.error(error);
                if (error.code === 'auth/popup-closed-by-user' || 'auth/cancelled-popup-request') {
                    return;
                }
            })
    }

    return (
        <div className='flex flex-col'>
            <button
                onClick={handleGoogleLogin}
                className="btn btn-active px-20 my-2 btn-ghost hover:bg-zinc-200 border-0 rounded-none text-lg normal-case font-normal"
            >
                <FaGooglePlusG className='text-xl mr-4'></FaGooglePlusG>Google
            </button>
            <button
                onClick={handleFacebookLogin}
                className="btn btn-active px-[69px] btn-ghost border-0 rounded-none text-lg normal-case font-normal hover:bg-zinc-200"
            ><FaFacebookF className='text-xl mr-4'></FaFacebookF>Facebook
            </button>
        </div>
    );
};

export default SocailLogin;