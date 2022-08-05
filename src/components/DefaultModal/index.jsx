import { Container, Content } from "./styles";
import { GrFormCheckmark, GrCircleAlert } from 'react-icons/gr';

const DefaultModal = ({ isSuccess }) => {
    return (
        <Container>
            <Content isSuccess={isSuccess}>
                {
                    isSuccess ?
                        <>
                            <GrFormCheckmark />
                            <h2>Conta criada com sucesso!</h2>
                        </>
                        :
                        <>
                            <GrCircleAlert />
                            <h2>Ops! Algo deu errado</h2>
                        </>
                }


            </Content>
        </Container>
    );
}

export default DefaultModal;