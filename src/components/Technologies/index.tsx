import { useContext } from "react";
import { userContext } from "../../contexts/UserContext";
import Technology from "../Technology";
import { TechnologiesContainer, TechnologiesContent, TechnologiesHeader, TechnologiesList } from "./styles";

interface ITechnologiesProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Technologies = ({ setShowModal, setIsLoading }: ITechnologiesProps) => {

    const { user } = useContext(userContext);

    const handleShowButton = () => {
        setShowModal(true);
    }

    return (
        <TechnologiesContainer>
            <TechnologiesContent>
                <TechnologiesHeader>
                    <h2>Tecnologias</h2>
                    <button onClick={handleShowButton}>+</button>
                </TechnologiesHeader>
                <TechnologiesList>
                    {
                        user.techs && user.techs.map(tech => {
                            return <Technology key={tech.id} tech={tech} setIsLoading={setIsLoading} />
                        })
                    }
                </TechnologiesList>
            </TechnologiesContent>
        </TechnologiesContainer>
    );
}

export default Technologies;