import { useState } from "react";
import '../../assets/styles/login.scss';

const Register = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [avatar, setAvatar] = useState<string>("");
    const [avatarFile, setAvatarFile] = useState<File | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setAvatarFile(e.target.files[0]);
            setAvatar(URL.createObjectURL(e.target.files[0])); // Display selected image as avatar preview
        }
    };

    return (
        <div className="login">
            <div className="container">
                <div className="login__form">
                    <h3>Регистрация</h3>
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
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        value={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                        placeholder="Avatar URL"
                    />
                    <input
                        type="file"
                        onChange={handleFileChange}
                        accept="image/*"
                    />
                    {avatar && (
                        <img src={avatar} alt="Avatar Preview" className="avatar-preview" />
                    )}
                    <label className="checkbox-container">
                        <input
                            type="checkbox"
                            checked={isPlaying}
                            onChange={() => setIsPlaying(!isPlaying)}
                        />
                        <span>Участвовать в игре</span>
                    </label>
                    <button
                        className="btn btn-transparent"
                        disabled={!username || !password || !email}
                    >
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
