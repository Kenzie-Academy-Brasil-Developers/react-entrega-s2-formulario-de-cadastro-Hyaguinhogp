import { useContext, useEffect } from "react";
import { userContext } from "../../contexts/UserContext";
import Technology from "../Technology";
import { TechnologiesContainer, TechnologiesContent, TechnologiesHeader, TechnologiesList } from "./styles";

const Technologies = ({setShowModal}) => {

    const { user } = useContext(userContext);

    const handleShowButton = () => {
        setShowModal(true);
    }

    useEffect(() => {
        console.log(user);
    }, []);

    return (
        <TechnologiesContainer>
            <TechnologiesContent>
                <TechnologiesHeader>
                    <h2>Tecnologias</h2>
                    <button onClick={(handleShowButton)}>+</button>
                </TechnologiesHeader>
                <TechnologiesList>
                    {
                        user.techs && user.techs.map(tech => {
                            return <Technology key={tech.id} tech={tech} />
                        })
                    }
                </TechnologiesList>
            </TechnologiesContent>
        </TechnologiesContainer>
    );
}

export default Technologies;