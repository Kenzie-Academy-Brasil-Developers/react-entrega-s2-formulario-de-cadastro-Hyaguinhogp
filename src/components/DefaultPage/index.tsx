import { ReactNode } from "react";
import { Container, Content } from "./styles";

interface IDefaultPageProps {
    children: ReactNode;
    isModal?: boolean;
}

const DefaultPage = ({children, isModal = false}: IDefaultPageProps) => {
    return(
        <Container isModal={isModal}>
            <Content>
                {children}
            </Content>
        </Container>
        
    )
}

export default DefaultPage;