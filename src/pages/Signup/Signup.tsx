import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
import { SignupUser } from "../../api/api";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log("username, email, password: ", username, email, password);
    const data = await SignupUser({ username, email, password });
    console.log("DATA = ", data);
    if (data) {
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            id="outlined-basic"
            label="Имя"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            id="outlined-basic"
            label="Почта/телефон"
            variant="outlined"
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            id="outlined-basic"
            label="Придумайте пароль"
            variant="outlined"
            type="password"
          />
          <Button onClick={handleSubmit} variant="contained" className={styles.button}>
            Зарегистрироваться
          </Button>
        </form>
        <Typography
            variant="body2"
            align="center"
            sx={{ marginTop: 2, cursor: "pointer", color: "primary.main" }}
            onClick={() => navigate("/login")} // Перенаправление на /login
        >
          Уже есть аккаунт? Войдите
        </Typography>
      </Box>
    </Box>
  );
}