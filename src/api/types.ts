
export interface LoginType {
    email: string;
    password: string;
}

export interface SignupType {
    username: string;
    email: string;
    password: string;
}

export interface CreateOrderType {
    username: string;
    phone: string;
    telegram_nick: string
}

export interface OrderType {
    id: string;
    username: string;
    phone: string;
    telegram_nick: string;
    completed: boolean
}