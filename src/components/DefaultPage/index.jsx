import { Container, Content } from "./styles";

const DefaultPage = ({children, isModal = false}) => {
    return(
        <Container isModal={isModal}>
            <Content>
                {children}
            </Content>
        </Container>
        
    )
}

export default DefaultPage;