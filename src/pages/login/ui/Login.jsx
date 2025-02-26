import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../api/request";
import { getUserStatus } from "../model/userSlice";
import statusTypes from "../../../app/util/statusTypes";

function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const userStatus = useSelector(getUserStatus)
    const handleSubmit = async (event) => {
        event.preventDefault();

        dispatch(signin({
            login:login,
            password:password
        }))
    }

    return ( 

        <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-header text-center">
                <h3>Login</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="login">Username</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="login" 
                      name="login" 
                      required 
                      value={login}
                      onChange={(e) => setLogin(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="password" 
                      name="password" 
                      required 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div style={{
                    display:"flex",
                    justifyContent:"space-between"
                  }}>
                  <button disabled={login.length==0 || password.length==0} type="submit" className="btn btn-primary btn-block mt-2">Login</button>
                  {userStatus == statusTypes.loading ? 
                   <div className="spinner-border text-primary mt-2" role="status">
                   <span className="visually-hidden ">Loading...</span>
                 </div>
                 :
                 null
                }
                 
                  </div>
                
                </form>
              </div>
            </div>
            {userStatus == statusTypes.failed ? <span className="error-message">Ошибка: Что-то пошло не так!</span> :null}
          </div>
        </div>
      </div>
     );
}

export default Login;