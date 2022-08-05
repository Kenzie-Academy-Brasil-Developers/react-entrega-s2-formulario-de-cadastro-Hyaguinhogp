import { Container, Content } from "./styles";

const DefaultForm = ({children, onSubmit}) => {
    return(
        <Container>
            <Content onSubmit={onSubmit}>
                {children}
            </Content>
        </Container>
        
    )
}

export default DefaultForm;