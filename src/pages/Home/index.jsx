import { useEffect, useState } from "react";
import api from "../../services/api";
import { Container, Content, Header, UserInfo } from "./styles";
import { useNavigate } from 'react-router-dom';
import DefaultModal from "../../components/DefaultModal";

const Home = () => {

    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/users/${localStorage.getItem('@USERID')}`)
            .then((res) => {
                setUserInfo(res.data);
            })
    }, []);

    const handleButton = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <>
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
                            <h2>Olá, {userInfo.name}</h2>
                            <p>{userInfo.course_module}</p>
                        </div>
                    </UserInfo>
                </Content>
            </Container>
        </>
    );
}

export default Home;