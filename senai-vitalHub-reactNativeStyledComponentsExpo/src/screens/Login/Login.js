
import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { Input } from "../../components/Input/style"
import { LinkMedium } from "../../components/Links/style"


export const Login = () => {
    return(
        <Container>
            <Logo source={require("../../assets/VitalHub_Logo 1.png")}/>

            <Title>Entrar ou Criar Conta</Title>  

            <Input placeholder="Usuario ou Email"/>

            <Input placeholder="Senha"
                   secureTextEntry
            />

           <LinkMedium>Esqueceu sua Senha?</LinkMedium>

           {/*  <Button>
                <ButtonTitle></ButtonTitle>
            </Button>

            <ButtonGoogle>
                <ButtonTitleGoogle></ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount></TextAccount>
            </ContentAccount> */}
        </Container>
    )
}