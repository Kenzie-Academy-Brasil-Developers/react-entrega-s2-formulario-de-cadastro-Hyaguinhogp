import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const userContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({});

    async function userRegister(data) {
        return api.post('/users', data);
    }

    async function login(data) {
        return api.post('/sessions', data)
            .then(({ data }) => {
                window.localStorage.clear();
                window.localStorage.setItem('@TOKEN', data.token);
                window.localStorage.setItem('@USERID', data.user.id);
            });
    }

    async function getUser() {
        return api.get(`/users/${localStorage.getItem('@USERID')}`)
            .then(res => setUser(res.data));
    }

    async function newTechnology(technology) {
        return api.post(`/users/techs`, technology, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('@TOKEN')}`
            }
        })
            .then(res => setUser(res.data));
    }

    async function deleteTechnology(technologyId) {
        return api.delete(`/users/techs/${technologyId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('@TOKEN')}`
            }
        })
            .then(res => setUser(res.data));
    }

    return (
        <userContext.Provider value={{ user, userRegister, login, getUser, newTechnology, deleteTechnology }}>
            {children}
        </userContext.Provider>
    );
}

