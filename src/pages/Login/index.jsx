import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { ReactComponent as Loading } from '../../assets/images/loading.svg';
import DefaultForm from "../../components/DefaultForm";
import DefaultPage from "../../components/DefaultPage";
import api from "../../services/api";
import { LoadingContainer } from "./styles";
import 'react-toastify/dist/ReactToastify.min.css';
import { toast } from 'react-toastify';
import { userContext } from '../../contexts/UserContext';

const Login = () => {

    const navigate = useNavigate();
    const [toRegister, setToRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const successNotify = () => toast.success('Login feito com sucesso!', { autoClose: 3000 });
    const failNotify = () => toast.error('Ops! Algo deu errado', { autoClose: 3000 });
    const { login } = useContext(userContext)

    const schema = yup.object().shape({
        email: yup.string().required('Email obrigatório').email('Email inválido'),
        password: yup.string().required('Senha obrigatória')
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmitFuntion = (data) => {
        setIsLoading(true);
        try {
            login(data).then(() => {
                setIsLoading(false);
                successNotify();
                setTimeout(() => {
                    navigate(`/users/${localStorage.getItem('@USERID')}`);
                }, 2000);
            });
        }
        catch(err){
            setIsLoading(false);
            failNotify();
        }
    }

    return (
        <>
            {
                isLoading && <LoadingContainer>
                    <div>
                        <Loading style={{ background: 'transparent' }} />
                    </div>

                </LoadingContainer>
            }
            <DefaultPage>
                <h1>Kenzie Hub</h1>
                <DefaultForm onSubmit={handleSubmit(onSubmitFuntion)}>
                    <h2 className="margin">Login</h2>
                    <label htmlFor="email">Email</label>
                    <input
                        id='email'
                        type="email"
                        placeholder="Digite seu Email Aqui"
                        {...register('email')}
                    />
                    <span>{errors.email?.message}</span>
                    <label htmlFor="password">Senha</label>
                    <input
                        id='password'
                        type="password"
                        placeholder="Digite sua senha Aqui"
                        {...register('password')}
                    />
                    <span>{errors.password?.message}</span>

                    <button className="submit-button" type="submit">Entrar</button>

                    <p className="margin">Ainda não possui uma conta?</p>

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setToRegister(true);
                        }}
                    >Cadastre-se</button>

                    {toRegister && <Navigate to='/register' />}
                </DefaultForm>
            </DefaultPage>
        </>
    );
}

export default Login;