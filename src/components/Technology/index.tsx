import { Container, Content, LeftContent, RightContent } from "./styles";
import { FaRegTrashAlt } from 'react-icons/fa'
import { useContext } from "react";
import { ITechnologyData, userContext } from "../../contexts/UserContext";

interface ITechnologyProps {
    tech: ITechnologyData;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Technology = ({ tech, setIsLoading }: ITechnologyProps) => {

    const { getUser, deleteTechnology } = useContext(userContext);

    const handleDeleteButton = () => {
        setIsLoading(true);
        deleteTechnology(tech.id)
            .then(() => {
                getUser()
                    .then(() => {
                        setIsLoading(false);
                    });
            });
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