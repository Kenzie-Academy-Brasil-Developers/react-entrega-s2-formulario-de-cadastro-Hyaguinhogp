import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import DefaultForm from '../../components/DefaultForm';
import DefaultPage from '../../components/DefaultPage';
import api from "../../services/api";
import { HeaderContainer, LoadingContainer, ReturnButton } from './styles';
import { ReactComponent as Loading } from '../../assets/images/loading.svg';
import 'react-toastify/dist/ReactToastify.min.css';
import { toast } from 'react-toastify';

const Register = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [toLogin, setToLogin] = useState(false);
    let navigate = useNavigate();
    const successNotify = () => toast.success('Registro feito com sucesso!', { autoClose: 3000 });
    const failNotify = () => toast.error('Ops! Algo deu errado', { autoClose: 3000 });

    const schema = yup.object().shape({
        name: yup.string()
            .required('Nome obrigatório'),
        email: yup.string()
            .required('Email obrigatório')
            .email('Email Inválido'),
        password: yup.string()
            .required('Senha obrigatória')
            .min(8, 'A senha deve conter pelo menos 8 caracteres')
            .matches(new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"), 'A senha deve conter letras, números e simbolos'),
        repeatPassword: yup.string()
            .required('Confirmação de senha obrigatória')
            .equals([yup.ref('password'), null], 'A senha não corresponde'),
        bio: yup.string()
            .required('Bio obrigatória'),
        contact: yup.string()
            .required('Contato obrigatório'),
        course_module: yup.string()

    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        setIsLoading(true);
        api.post('/users', data)
            .then((res) => {
                setIsLoading(false);
                successNotify();
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
                
            })
            .catch(error => {
                console.log(error)
                setIsLoading(false)
                failNotify();
            });
    };

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
                <HeaderContainer>
                    <h1>Kenzie Hub</h1>
                    <ReturnButton
                        onClick={() => setToLogin(true)}
                    >Voltar</ReturnButton>
                </HeaderContainer>
                <DefaultForm onSubmit={handleSubmit(onSubmit)}>
                    <h2>Crie sua conta</h2>
                    <p>Rápido e grátis, vamos nessa</p>

                    <label htmlFor="name">Nome</label>
                    <input
                        id='name'
                        type="text"
                        placeholder='Digite aqui seu nome'
                        {...register('name')}
                    />
                    <span>{errors.name?.message}</span>

                    <label htmlFor="email">Email</label>
                    <input
                        id='email'
                        type="text"
                        placeholder='Digite aqui seu email'
                        {...register('email')}
                    />
                    <span>{errors.email?.message}</span>

                    <label htmlFor="password">Senha</label>
                    <input
                        id='password'
                        type="password"
                        placeholder='Digite aqui sua senha'
                        {...register('password')}
                    />
                    <span>{errors.password?.message}</span>

                    <label htmlFor="confirm-passoword">Confirmar Senha</label>
                    <input
                        id='confirm-passoword'
                        type="password"
                        placeholder='Confirme sua senha aqui'
                        {...register('repeatPassword')}
                    />
                    <span>{errors.repeatPassword?.message}</span>

                    <label htmlFor="bio">Bio</label>
                    <input
                        id='bio'
                        type="text"
                        placeholder='Fale sobre você'
                        {...register('bio')}
                    />
                    <span>{errors.bio?.message}</span>

                    <label htmlFor="contact">Contato</label>
                    <input
                        id='contact'
                        type="text"
                        placeholder='Opção de contato'
                        {...register('contact')}
                    />
                    <span>{errors.contact?.message}</span>

                    <label htmlFor="course_module">Selecionar Módulo</label>
                    <select
                        name='course_module'
                        {...register('course_module')}
                    >
                        <option value='Primeiro módulo (Introdução ao Frontend)'>Primeiro Módulo</option>
                        <option value='Segundo módulo (Frontend Avançado)'>Segundo Módulo</option>
                        <option value='Terceiro módulo (Introdução ao Backend)'>Terceiro Módulo</option>
                        <option value='Quarto módulo (Backend Avançado)'>Quarto Módulo</option>
                    </select>
                    <span>{errors.course_module?.message}</span>

                    <button className='submit-button'>Cadastrar</button>

                </DefaultForm>
                {toLogin && <Navigate to='/login' />}
            </DefaultPage>
        </>
    );
}

export default Register;