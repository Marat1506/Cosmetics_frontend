import { Box, Button, TextField, Typography } from "@mui/material";
import styles from "./Login.module.css";
import { useState } from "react";
import { LoginUser } from "../../api/api";
import { useNavigate } from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const notify = () => toast("Неверный логин или пароль!")

  const handleSubmit = async () => {
    console.log("email, password: ", email, password);
    const data = await LoginUser({ email, password });
    console.log("DATA = ", data);
    if(!data){
      notify()
    }
    if (data.user.id == "admin") {
      navigate("/admin");
    }else {
      navigate("/home");
    }
  };

  return (
    <Box className={styles.container}>
      <Typography variant="h4" className={styles.title}>
        Алина-косметолог
      </Typography>
      <Box width="100%" maxWidth="400px">
        <form className={styles.content}>
          <TextField
              itemID={`${Math.random()}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            id="outlined-basic"
            label="Почта/телефон"
            variant="outlined"
          />
          <TextField
              itemID={`${Math.random()}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            id="outlined-basic"
            label="Пароль"
            variant="outlined"
            type="password"
          />
          <Button onClick={handleSubmit} variant="contained" className={styles.button}>
            Войти
          </Button>
        </form>
        <Typography
            variant="body2"
            align="center"
            sx={{ marginTop: 2, cursor: "pointer", color: "primary.main" }}
            onClick={() => navigate("/signup")} // Перенаправление на /login
        >
          Нет аккаунта? Зарегистрироваться
        </Typography>
      </Box>
      <ToastContainer
          position="top-center"
      />
    </Box>
  );
}