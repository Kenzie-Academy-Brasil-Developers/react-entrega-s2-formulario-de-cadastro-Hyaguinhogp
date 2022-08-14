import { Container, Content, LeftContent, RightContent } from "./styles";
import { FaRegTrashAlt } from 'react-icons/fa'
import { useContext } from "react";
import { userContext } from "../../contexts/UserContext";

const Technology = ({tech}) => {

    const { deleteTechnology } = useContext(userContext);

    const handleDeleteButton = () => {
        deleteTechnology(tech.id);
    }

    return(
        <Container>
            <Content>
                <LeftContent>
                    <h2>{tech.title}</h2>
                </LeftContent>
                <RightContent>
                    <p>{tech.status}</p>
                    <button
                        onClick={handleDeleteButton}
                    ><FaRegTrashAlt /></button>
                </RightContent>
            </Content>
        </Container>
    );
}

export default Technology;