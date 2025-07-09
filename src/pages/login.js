import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const navigate = useNavigate();
  return (
    <div >
      <div className="login-box">
        <h2>{props.title}</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={()=> navigate('/counter')}>Login</button>
        <p className="signup-text">
          Don't have an account? <a href="/signup" >Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
