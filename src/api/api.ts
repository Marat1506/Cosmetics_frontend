import {CreateOrderType, LoginType, SignupType} from "./types";


export async function LoginUser(params: LoginType) {
    try {
        const response = await fetch("https://cosmetics-backend-3.onrender.com/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(params)
        })

        if(!response.ok){
            return 
        }
        const data = await response.json()
        console.log("data login = ", data)
        return data
    } catch (error) {
        console.log("Ошибка при входе")
        return error
    }
}

export async function SignupUser(params: SignupType) {
    try {
        const response = await fetch("https://cosmetics-backend-3.onrender.com/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(params)
        })

        if(!response.ok){
            return 
        }
        const data = await response.json()
        console.log("data signup = ", data)
        return data
    } catch (error) {
        console.log("Ошибка при регистрации")
        return error
    }
}


export async function CreateOrder(params: CreateOrderType) {
    try {
        const response = await fetch("https://cosmetics-backend-3.onrender.com/api/createOrder", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
            body: JSON.stringify(params)
        })

        if(!response.ok){
            return
        }
        const data = await response.json()
        console.log("data create order = ", data)
        return data
    }catch (error) {
        console.log(error)
        return error
    }
}

export async function GetOrders(){
    try {
        const response = await fetch("https://cosmetics-backend-3.onrender.com/api/getOrders", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },

        })
        if(!response.ok){
            return
        }
        const data = await response.json()
        console.log("data create order = ", data)
        return data
    }catch (error) {
        console.log(error)
        return error
    }
}

export async function ChangeOrder(id: string){
    try {
        const response = await fetch("http://localhost:8080/api/changeOrder", {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({id})
        })
        if(!response.ok){
            return
        }
        const data = await response.json()
        console.log("data change order = ", data)
        return data

    }catch (error) {
        console.log(error)
        return error
    }
}

export async function DeleteOrder(id: string){
    try {
        const response = await fetch("http://localhost:8080/api/deleteOrder", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({id})
        })
        if(!response.ok){
            return
        }
        const data = await response.json()
        console.log("data delete order = ", data)
        return data
    }catch (error) {
        console.log(error)
        return error
    }
}