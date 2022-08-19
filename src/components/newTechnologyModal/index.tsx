import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import DefaultForm from '../DefaultForm';
import DefaultPage from '../DefaultPage';
import { NewTechnologyHeader } from './styles';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { ITechnologyData, userContext } from '../../contexts/UserContext';

interface INewTechnologyModalProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewTechnologyModal = ({ setShowModal, setIsLoading }: INewTechnologyModalProps) => {

    const { getUser, newTechnology } = useContext(userContext);

    const handleHideModal = () => {
        setShowModal(false);
    }

    const schema = yup.object().shape({
        title: yup.string().required('Nome obrigatório'),
        status: yup.string().required('status obrigatório')
    });

    const { register, handleSubmit, formState: { errors } } = useForm<ITechnologyData>({
        resolver: yupResolver(schema),
    });

    const onSubmitFuntion = (data: ITechnologyData) => {
        setIsLoading(true);
        setShowModal(false);
        newTechnology(data)
            .then(() => {
                setShowModal(false);
                getUser()
                    .then(() => {
                        setIsLoading(false);
                    });
            }).catch((error) => {
                setIsLoading(false);
                setShowModal(true);
            })
    }

    return (
        <>
            <DefaultPage isModal={true}>
                <NewTechnologyHeader>
                    <h2>Cadastrar Tecnologia</h2>
                    <button onClick={handleHideModal}>X</button>
                </NewTechnologyHeader>
                <DefaultForm onSubmit={handleSubmit(onSubmitFuntion)}>
                    <label htmlFor="name">Nome</label>
                    <input
                        id='name'
                        type="text"
                        {...register('title')}
                    />
                    <span>{errors.title?.message}</span>

                    <label htmlFor="status">Selecionar status</label>
                    <select
                        id='status'
                        {...register('status')}
                    >
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <span></span>

                    <button className='submit-button' type='submit'>Cadastrar Tecnologia</button>

                </DefaultForm>
            </DefaultPage>
        </>
    );
}

export default NewTechnologyModal;