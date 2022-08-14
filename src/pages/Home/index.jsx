import { useContext, useEffect, useState } from "react";
import { Container, Content, Header, UserInfo } from "./styles";
import { useNavigate } from 'react-router-dom';
import { userContext } from "../../contexts/UserContext";
import { LoadingContainer } from "../Login/styles";
import { ReactComponent as Loading } from '../../assets/images/loading.svg';
import Technologies from "../../components/Technologies";
import NewTechnologyModal from "../../components/newTechnologyModal";

const Home = () => {

    const { user, getUser } = useContext(userContext);
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleButton = () => {
        localStorage.clear();
        navigate('/login');
    }

    useEffect(() => {
        setIsLoading(true);
        getUser()
            .then(() => {
                setIsLoading(false);
            })
            .then(() => {
                console.log(user);
                console.log(localStorage.getItem('@TOKEN'));
            })
            .catch((error) => {
                setIsLoading(false);
                navigate('/login');
            })

    }, []);

    return (
        <>
            {
                isLoading && <LoadingContainer>
                    <div>
                        <Loading style={{ background: 'transparent' }} />
                    </div>
                </LoadingContainer>
            }
            {
                showModal && <NewTechnologyModal setShowModal={setShowModal} setIsLoading={setIsLoading} />
            }
            <Container>
                <Content>
                    <Header>
                        <div>
                            <h2>Kenzie Hub</h2>
                            <button onClick={handleButton}>Sair</button>
                        </div>
                    </Header>
                    <UserInfo>
                        <div>
                            <h2>Olá, {user.name}</h2>
                            <p>{user.course_module}</p>
                        </div>
                    </UserInfo>
                    {
                        user && <Technologies setShowModal={setShowModal} />
                    }
                </Content>
            </Container>
        </>
    );
}

export default Home;