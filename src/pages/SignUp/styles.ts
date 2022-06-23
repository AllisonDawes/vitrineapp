import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.ScrollView`
  flex: 1;
  padding-top: 33px;
  background: ${({ theme }) => theme.colors.primary};
`;

export const ImgBackground = styled.ImageBackground`
  width: 100%;
  height: ${RFPercentage(30)}px;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.Image`
  width: ${RFPercentage(10)}px;
  height: ${RFPercentage(10)}px;
`;

export const ContainerForm = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Fields = styled.View`
  background: ${({ theme }) => theme.colors.primary_transparency};
  padding: 20px;
  border-radius: 10px;
  margin-top: ${RFValue(50)}px;
`;

export const TitleForm = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
  margin-bottom: ${RFValue(10)}px;
`;

export const ButtonAlreadyAccount = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin-top: ${RFValue(20)}px;
`;

export const AlreadyAccountText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
  align-self: center;
`;
