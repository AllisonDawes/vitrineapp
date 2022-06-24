import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(80)}px;
  background: ${({ theme }) => theme.colors.primary_dark};
  margin-top: ${RFValue(30)}px;
  padding: 10px 20px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerAvatar = styled.View`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;

  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;

  border-radius: 5px;
`;

export const ContainerWelcomeText = styled.View`
  width: 100px;
  margin-left: 10px;

  justify-content: center;
`;

export const Welcome = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto_slab_medium};
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(14)}px;
`;

export const Username = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto_slab_medium};
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(14)}px;
`;

export const ContainerTitle = styled.View`
  width: 100%;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto_slab_medium};
  color: ${({ theme }) => theme.colors.secundary};
  font-size: ${RFValue(14)}px;
`;

export const ButtonNotification = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;
