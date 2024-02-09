import { Button, ButtonMTop, ButtonTitle } from "../../components/Button/style"
import { ConatinerCode, Container } from "../../components/Container/style"
import { InputCode } from "../../components/Input/style"

import { LinkBold } from "../../components/LinkMedium/styles"
import { Logo } from "../../components/Logo/style"
import { SubTittle } from "../../components/Text/Text"
import { Title } from "../../components/Title/style"

export const Verification = () => {

    return(
    <Container>
      <Logo source={require("../../assets/Logo.png")}/>
      
      <Title>Verifique o seu Email</Title>

      <SubTittle>Digite o código de 4 dígitos enviado para</SubTittle>


      <ConatinerCode>

        <InputCode placeholder={'0'} ></InputCode>
        <InputCode placeholder={'0'}></InputCode>
        <InputCode placeholder={'0'}></InputCode>
        <InputCode placeholder={'0'}></InputCode>

      </ConatinerCode>

         <ButtonMTop  onPress={()=> {navigation.navigate("Redefinir")}}> 

          <ButtonTitle>Verificar</ButtonTitle>
      </ ButtonMTop > 
      <LinkBold>Reenviar Código</LinkBold>
 
    </Container>
        
    );

}