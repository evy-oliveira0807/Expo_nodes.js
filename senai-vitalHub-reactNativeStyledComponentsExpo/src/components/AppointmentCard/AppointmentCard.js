import { getExpoGoProjectConfig } from "expo"
import { AntDesign } from '@expo/vector-icons';
import { ButtonCard, ButtonText, ClockCard, ContainerCardsList, ContentCard, DataProfileCard, ProfileData, ProfileImage, ProfileName, TextAge, TextBold, ViewRow } from "./style";

export const AppointmentCard = ({
    situacao = "pedente",
    onPressCancel,
    onPressAppointment,
}) => {
    return (
        //Constiner principal
        <ContainerCardsList>

            {/* Image do perfil */}
            <ProfileImage source={{ uri: "https://github.com/KamiMilo.png" }} />

            {/* Conteudo ao lado da imagem */}
            <ContentCard>

                <DataProfileCard>

                    <ProfileName>Kamille</ProfileName>

                    <ProfileData>
                        <TextAge>45</TextAge>
                        <TextBold>Rotina</TextBold>

                    </ProfileData>

                </DataProfileCard>

                {/* AQUI ESTÁ O PROBLEMA................. */}
                <ViewRow>
                    <ClockCard situacao={situacao}>
                        <AntDesign name="clockcircle"
                            size={14}
                            color={situacao == "pedente" ? "#49b3ba" : "#8c8a97"} />

                        <TextBold
                            situacao={situacao}
                            color={"#49b3ba"}>
                            14:00
                        </TextBold>
                    </ClockCard>


                    {/* Valida e mostra o tipo de botao conforme a situacao */}

                    { 
                        situacao == " cancelado" ? (
                            <>
                            </>
                        ) : situacao == "Pedente" ? (
                            <ButtonCard onPress={onPressCancel}>
                                <ButtonText situacao={situacao}>Cancelar</ButtonText>
                            </ButtonCard>
                        ) : ( 

                          <ButtonCard onPress={onPressAppointment}>
                            <ButtonText situacao={situacao}>Ver Prontuario</ButtonText>
                          </ButtonCard>

                        )
                       
                    }

                    <ButtonCard>
                        <ButtonText></ButtonText>
                    </ButtonCard>
                </ViewRow>

            </ContentCard>

        </ContainerCardsList>
    )
}