import {useEffect, useState} from "react";
import { Box, Typography, Paper, List, ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import { CheckCircle, CircleOutlined, Delete } from "@mui/icons-material"; // Добавлен Delete иконка
import styles from "./Admin.module.css";
import {ChangeOrder, DeleteOrder, GetOrders} from "../../api/api.ts";
import {OrderType} from "../../api/types.ts";
import {ToastContainer, toast} from "react-toastify";


export default function Admin() {
    const [appointments, setAppointments] = useState<OrderType[]>([]);
    const notify = () => toast("Запись удалена!")


    useEffect(() => {
        const fetchData = async () => {
            const data = await GetOrders()
            console.log("OOORDERS = ", data)
            setAppointments(data)
        }
        fetchData()
    }, []);
    const handleToggle = async(id: string) => {
        const data = await ChangeOrder(id)
        console.log("change data = ", data)
        console.log("change data = ", id)
        setAppointments(prevAppointments =>
            prevAppointments.map(appointment =>
                appointment.id === id
                    ? { ...appointment, completed: !appointment.completed }
                    : appointment
            )
        );

        console.log("rr = ",appointments)
    };


    const handleDelete = async (id: string) => {
        try {
            const response = await DeleteOrder(id);
            if (!response) return; // Если запрос не удался, выходим

            setAppointments(prevAppointments =>
                prevAppointments.filter(appointment => appointment.id !== id)
            );
            notify()
        } catch (error) {
            console.error("Ошибка при удалении заявки:", error);
        }

    };

    if (appointments.length === 0) {
        return null
    }

    return (
        <Box className={styles.container}>
            <Typography variant="h5" className={styles.title}>
                Заявки на запись
            </Typography>

            <Paper className={styles.listContainer}>
                <List>
                    {
                        appointments ? appointments.map((appointment) => (
                        <ListItem
                            key={appointment.id}
                            className={`${styles.listItem} ${appointment.completed ? styles.completed : ""}`}
                            secondaryAction={
                                <>
                                    <IconButton
                                        edge="end"
                                        onClick={() => handleToggle(appointment.id)}
                                    >
                                        <Checkbox
                                            icon={<CircleOutlined />}
                                            checkedIcon={<CheckCircle />}
                                            checked={appointment.completed}
                                        />
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        onClick={() => handleDelete(appointment.id)}
                                    >
                                        <Delete />
                                    </IconButton>
                                </>
                            }
                        >
                            <ListItemText
                                primary={appointment.username}
                                secondary={
                                    <>
                                        <span className={styles.phone}>{appointment.phone}</span>
                                        <br />
                                        <a
                                            target={"_blank"}
                                            href={appointment.telegram_nick}
                                            className={styles.telegram}>{appointment.telegram_nick}</a>
                                    </>
                                }
                            />

                        </ListItem>


                    )):  <Typography>Нет активных заявок</Typography>}
                </List>
            </Paper>
            <ToastContainer
                position="top-center"
            />
        </Box>
    );
}