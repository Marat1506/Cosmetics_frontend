import { Box, Button, TextField, Typography } from "@mui/material";
import {useRef, useState} from "react";
import styles from "./Home.module.css";
import img1 from './../../assets/img1.jpg'
import img2 from './../../assets/img2.jpg'
import img3 from './../../assets/img3.jpg'
import img4 from './../../assets/img4.jpg'
import img5 from './../../assets/img5.jpg'
import {CreateOrder} from "../../api/api.ts";
import {ToastContainer, toast} from "react-toastify";

export default function Home() {
    const formRef = useRef<HTMLDivElement | null>(null);
    const [username, setUsername] = useState("")
    const [phone, setPhone] = useState("")
    const [telegram_nick, setTelegram_nick] = useState("")
    const notify = () => toast("Ваша заявка принята!")

    const handleSubmit = async () => {
        console.log("name, phone, telegram", username, phone, telegram_nick)
        const res = await CreateOrder({username, phone, telegram_nick})
        console.log("res = " , res)
        setUsername("")
        setPhone("")
        setTelegram_nick("")
        notify()
    }
    return (
        <Box className={styles.container}>
            <Box className={styles.content}>
                <Typography variant="h4" gutterBottom>
                    Добро пожаловать в косметологию "Алина"
                </Typography>
                <Typography variant="body1">
                    Мы предлагаем широкий спектр косметологических услуг для вашей красоты и здоровья.
                </Typography>
            </Box>
            <Box className={styles.content}>
                <Typography>Специальный подбор для вас</Typography>
                <Box className={styles.images}>
                    <img src={img1} width={'300px'} height={'300px'}/>
                    <img src={img2} width={'300px'} height={'300px'}/>
                    <img src={img3} width={'300px'} height={'300px'}/>
                    <img src={img4} width={'300px'} height={'300px'}/>
                    <img src={img5}width={'300px'} height={'300px'}/>
                </Box>
                {/* //блок с товарами */}
            </Box>
 
            <Box ref={formRef} className={styles.formSection}>
                <Typography variant="h5" gutterBottom>
                    Запись на приём
                </Typography>
                <form className={styles.form}>
                    <TextField
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        id="outlined-basic"
                        label="Имя"
                        variant="outlined"
                    />
                    <TextField
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        fullWidth
                        id="outlined-basic"
                        label="Номер телефона"
                        variant="outlined"
                    />
                    <TextField
                        value={telegram_nick}
                        onChange={(e) => setTelegram_nick(e.target.value)}
                        fullWidth
                        id="outlined-basic"
                        label="Telegram (Например: https://t.me/Mararkhhk)"
                        variant="outlined"
                    />
                    <Button onClick={handleSubmit} variant="contained">Записаться</Button>
                    <ToastContainer
                        position="top-center"
                    />
                </form>
            </Box>
        </Box>
    );
}