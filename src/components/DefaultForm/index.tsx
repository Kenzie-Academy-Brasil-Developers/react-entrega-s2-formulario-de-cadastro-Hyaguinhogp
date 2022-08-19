import { BaseSyntheticEvent, ReactNode } from "react";
import { Container, Content } from "./styles";

interface IDefaultFormProps {
    children: ReactNode;
    onSubmit: (e?: BaseSyntheticEvent<object> | undefined) => Promise<void>
}

const DefaultForm = ({children, onSubmit}: IDefaultFormProps) => {

    return(
        <Container>
            <Content onSubmit={onSubmit}>
                {children}
            </Content>
        </Container>
        
    )
}

export default DefaultForm;