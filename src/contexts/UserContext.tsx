import { AxiosRequestConfig, AxiosResponse } from "axios";
import { createContext, ReactNode, useState } from "react";
import api from "../services/api";

interface IUserData {
    id: string;
    name: string;
    email: string;
    course_module: string;
    bio: string;
    contact: string;
    techs: ITechnologyData[];
    works?: string[];
    created_at: string;
    updated_at: string;
    avatar_url: string | null;
}

interface IUserProviderProps {
    children: ReactNode;
}

export interface IUserRegisterData {
    name: string;
    email: string;
    password: string;
    repeatPassword: string;
    bio: string;
    contact: string;
    course_module: string;
}

interface IUserRegisterResponseData {
    id: string;
    name: string;
    email: string;
    bio: string;
    contact: string;
    course_module: string;
    created_at: string;
    updated_at: string;
    avatar_url: string | null;
}

export interface IUserLoginData {
    email: string;
    password: string;
}

interface IUserLoginResponseData {
    user: IUserData;
    token: string;
}

export interface ITechnologyData {
    id: string;
    title: string;
    status: string;
    created_at: string;
    updated_at: string;
}

interface ITechnologyNewData {
    title: string;
    status: string;
}

interface ITechnologyNewDataResponse {
    id: string;
    title: string;
    status: string;
    user: {
        id: string;
    }
    created_at: string;
    updated_at: string;
}

interface IUserProviderData {
    user: IUserData;
    userRegister: (data: IUserRegisterData) => Promise<AxiosResponse<IUserRegisterResponseData>>;
    login: (data: IUserLoginData) => Promise<AxiosResponse<IUserLoginResponseData>>;
    getUser: () => Promise<AxiosResponse<IUserData>>;
    newTechnology: (technology: ITechnologyNewData) => Promise<AxiosResponse<ITechnologyNewDataResponse>>;
    deleteTechnology: (technologyId: string) => Promise<AxiosResponse<void>>;
}

export const userContext = createContext<IUserProviderData>({} as IUserProviderData);

export const UserProvider = ({ children }: IUserProviderProps) => {

    const [user, setUser] = useState<IUserData>({} as IUserData);

    async function userRegister(data: IUserRegisterData) {
        return api.post<IUserRegisterResponseData, AxiosResponse<IUserRegisterResponseData>, IUserRegisterData>('/users', data);
    }

    async function login(data: IUserLoginData) {
        const response = api.post<IUserLoginResponseData, AxiosResponse<IUserLoginResponseData>, IUserLoginData>('/sessions', data);
        response
            .then((res) => {
                window.localStorage.clear();
                window.localStorage.setItem('@TOKEN', res.data.token);
                window.localStorage.setItem('@USERID', res.data.user.id);
                return res.data;
            });

        return response;
    }

    async function getUser() {
        const response = api.get<IUserData, AxiosResponse<IUserData>>(`/users/${localStorage.getItem('@USERID')}`);
        response
            .then(res => {
                setUser(res.data);
            });

        return response;
    }

    async function newTechnology(technology: ITechnologyNewData) {
        const config: AxiosRequestConfig = { headers: { 'Authorization': `Bearer ${localStorage.getItem('@TOKEN')}` } };
        return api.post<ITechnologyNewDataResponse, AxiosResponse<ITechnologyNewDataResponse>>(`/users/techs`, technology, config);
    }

    async function deleteTechnology(technologyId: string) {
        const config: AxiosRequestConfig = { headers: { 'Authorization': `Bearer ${localStorage.getItem('@TOKEN')}` } };
        return api.delete(`/users/techs/${technologyId}`,config);
    }

    return (
        <userContext.Provider value={{ user, userRegister, login, getUser, newTechnology, deleteTechnology }}>
            {children}
        </userContext.Provider>
    );
}

