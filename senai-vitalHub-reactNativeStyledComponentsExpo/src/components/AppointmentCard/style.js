import styled from "styled-components";
import { Title } from "../Title/style";

export const ContainerCardsList = styled.View`
  width: 90%;
  margin-bottom:12px;
  padding:10px 10px;
  border-radius:5px;
  flex-direction: row;
  background-color: #fff;
  //box-shadow: 4px 4px 15px rbga(0, 0 , 0 , 0.08);
`

export const ProfileImage = styled.Image`
   width: 77px;
   height: 80px;
   border-radius: 5px;
`

export const ContentCard = styled.View`
  width: 70%;
  gap: 10px;
  background-color: lightcyan;
`

export const DataProfileCard = styled.View`
 border: 1px solid blue;
    
`
export const ProfileName = styled(Title)`
 font-size: 16px;
`

export const ProfileData = styled.View`
   flex-direction: row;
`

export const TextAge = styled.Text`
  font-size:14px;
  color: #8c8a97;
  font-family:"Quicksand_400Regular" ;
`

export const TextBold = styled(TextAge)`
font-family:"Quickand_600SemiBold";
`

export const ViewRow = styled.View`
   width: 100%;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`

export const ClockCard = styled.View`
  flex-direction: row;
  padding: 4px 23px;
  gap: 6px;
  border-radius: 5px;
  background:color: ${(props) => props.situacao == "pendente" ? "#e8fcfd" : "#f1f0f5"};
`

export const ButtonCard = styled.TouchableOpacity``

export const ButtonText = styled.Text`
    color: ${(props) => props.situacao == "pedente" ? "#c81d25" :
  "#344f8f"
}
`