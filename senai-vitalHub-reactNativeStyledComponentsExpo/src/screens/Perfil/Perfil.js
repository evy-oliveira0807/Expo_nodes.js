import { Container } from "../../components/Container/style"
import { Image } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { SubTittle } from "../../components/Text/Text"
import { Input } from "../../components/Input/style"

export const Perfil = () => {
  return (
    <Container>
      <Image source={require("../../assets/Rectangle.png")} />

      <Title>Richard Kosta</Title>
      <SubTittle>richard.kosta@gmail.com</SubTittle>
      <Title>Data de nascimento:</Title>




      <Input placeholder="04/05/1999" />
      <Title>CPF</Title>
      <Input placeholder="859********" />
      <Title>Endereço</Title>
      <Input placeholder="Rua Vicenso Silva, 987" />
      <Title>Cep</Title>
      <Input placeholder="06548-909" />
      <Title>Cidade</Title>
      <Input placeholder="Moema-SP" />
    </Container>
  )
}