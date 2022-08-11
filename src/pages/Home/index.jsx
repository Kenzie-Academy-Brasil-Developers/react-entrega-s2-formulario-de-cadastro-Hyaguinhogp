import { useContext, useEffect, useState } from "react";
import { Container, Content, Header, UserInfo } from "./styles";
import { useNavigate } from 'react-router-dom';
import { userContext } from "../../contexts/UserContext";
import { LoadingContainer } from "../Login/styles";
import { ReactComponent as Loading } from '../../assets/images/loading.svg';

const Home = () => {

    const { user, getUser } = useContext(userContext);
    const [isLoading, setIsLoading] = useState(false);
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
                </Content>
            </Container>
        </>
    );
}

export default Home;