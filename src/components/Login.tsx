import { GoogleLogin } from '@react-oauth/google';
const Login = () => {
    return (
        <div style={{ width: "400px" }}>
            <GoogleLogin
                onSuccess={(credentialResponse: any) => {
                    console.log(credentialResponse);
                    localStorage.setItem('credential', credentialResponse.credential)
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </div>
    )
}

export default Login
