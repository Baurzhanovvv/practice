import { useState } from "react";
import '../../assets/styles/login.scss'

const Login = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <div className="login">
            <div className="container">
                <div className="login__form">
                    <h3>Login</h3>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button
                        className="btn btn-transparent"
                        disabled={!username || !password}
                    >
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
