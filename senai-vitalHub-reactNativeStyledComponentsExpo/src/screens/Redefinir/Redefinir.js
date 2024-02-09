
import { Button, ButtonMTop, ButtonTitle } from "../../components/Button/style"
import { Container } from "../../components/Container/style"
import { Input } from "../../components/Input/style"
import { Logo } from "../../components/Logo/style"
import { SubTittle } from "../../components/Text/Text"
import { Title } from "../../components/Title/style"


export const Redefinir = () => {
    return (
        <Container>
            <Logo source={require("../../assets/Logo.png")} />

            <Title>Redefinir Senha</Title>

            <SubTittle>Insira e confirme a sua nova senha</SubTittle>
            <Input placeholder="Nova Senha" />
            <Input placeholder="Confirme nova senha" />

            <ButtonMTop >
                <ButtonTitle>Confirma nova senha</ButtonTitle>
            </ButtonMTop>



        </Container>
    )
}