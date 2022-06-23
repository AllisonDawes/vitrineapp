import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
`;

export const Backgroundimage = styled.ImageBackground`
  height: ${RFPercentage(50)}px;
  width: 100%;

  align-items: center;
  justify-content: center;
`;

export const ImgLogo = styled.Image`
  height: ${RFPercentage(25)}px;
  width: ${RFPercentage(25)}px;
`;

export const ContainerForm = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;
`;

export const Fields = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary_transparency};
  padding: 20px;
  border-radius: ${RFValue(10)}px;
`;

export const ContainerText = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 30px;
`;

export const TitleScreen = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`;

export const ButtonCreateAccount = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const CreateAccountText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
`;

export const ButtonForgotPassword = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const ForgotPassText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
  align-self: center;

  margin-top: 15px;
`;
