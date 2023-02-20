import React, { useState, useContext } from 'react'
import styles from './Login.module.css'
import InputControl from "../inputcontrol/InputControl"
import { Redirect, withRouter } from 'react-router-dom'
import { AuthContext } from '../../context/Auth';
import fire from '../../config/fire';

const Login = () => {

  // const [values, setValues] = useState({
  //   email: "",
  //   pass: "",
  // });
  // const [errorMsg, setErrorMsg] = useState("");
  // const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  // const handleSubmission = () => {
  //   if (!values.email || !values.pass) {
  //     setErrorMsg("Fill all fields");
  //     return;
  //   }
  //   setErrorMsg("");

  //   // setSubmitButtonDisabled(true);
  //   // signInWithEmailAndPassword(auth, values.email, values.pass)
  //   //   .then(async (res) => {
  //   //     setSubmitButtonDisabled(false);
  //   //     <Redirect to="/" />;
  //   //     // navigate("/");
  //   //   })
  //   //   .catch((err) => {
  //   //     setSubmitButtonDisabled(false);
  //   //     setErrorMsg(err.message);
  //   //   });
  // };

  // const { currentUser } = useContext(AuthContext);

  // if (currentUser) {
  //   return <Redirect to="/" />;
  // }



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Title, setTitle] = useState('Login');
  const [fireErrors, setFireErrors] = useState("");
  const [loginBtn, setLoginBtn] = useState(true);

  const login = (event) => {
    event.preventDefault();
    fire.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => {
        setFireErrors(error.message)
      })
  }

  const register = (event) => {
    event.preventDefault();
    fire.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        setFireErrors(error.message)
      })
  }

  const getAction = action => {
    if (action === 'reg') {
      setTitle('Register New User');
      setLoginBtn(false);
      setFireErrors('');
    } else {
      setTitle('Login');
      setLoginBtn(true);
      setFireErrors('');
    }
  }

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
  
  let errorNotification = fireErrors ? 
  (<div className="alert alert-danger" role="alert">{fireErrors}</div>) : null;

  let submitBtn = loginBtn ?
  (<button  type="submit"  onClick={login} >Enter</button>) :
  (<button  type="submit"  onClick={register} >Register</button>);

  let login_register = loginBtn ? 
  (<button  onClick={() => getAction('reg')}>Register</button>):
  (<button  onClick={() => getAction('login')}>Login</button>);

  return (
    <div className={styles.container}>

      <div className={styles.innerbox}>
        <h1 className={styles.headeing}>{Title}</h1>

        <InputControl label="Email" value={email} placeholder='Enter Email Address'
          onChange={(event) => setEmail(event.target.value)} />
        <InputControl label="Password" value={password} placeholder='Enter Password'
          onChange={(event) => setPassword(event.target.value)}/>

        <div className={styles.footers}>
          <b className={styles.error}>{errorNotification}</b>
          {submitBtn}
          <p>
            Already have an account? {""}
            {login_register}
          </p>
        </div>
      </div>

    </div>
  )
}

export default withRouter(Login);