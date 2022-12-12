import foodApi from "../../infrastructure/food-api"

export interface LoginParamsDto {
    email: string
    password: string
}

export async function login(params: LoginParamsDto) {
    const { data } = await foodApi.post('/auth/login', params)
    return data
}