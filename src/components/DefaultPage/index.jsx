import { Container, Content } from "./styles";

const DefaultPage = ({children}) => {
    return(
        <Container>
            <Content>
                {children}
            </Content>
        </Container>
        
    )
}

export default DefaultPage;