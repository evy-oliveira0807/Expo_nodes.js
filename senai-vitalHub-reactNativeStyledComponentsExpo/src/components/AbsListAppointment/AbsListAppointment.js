import { ButtonTabsStyle, ButtonTextStyle } from "./style"

export const AbsListAppointment = ({textButton, clickButton=false, onPress}) => {
    return(
        //botao    

        <ButtonTabsStyle clickButton={clickButton} onPress={onPress}>

         {/* texto do botao     */}
            <ButtonTextStyle clickButton={clickButton}>{textButton}</ButtonTextStyle>
        </ButtonTabsStyle>
    )
}