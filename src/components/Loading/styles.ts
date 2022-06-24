import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  position: absolute;
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  background: ${({ theme }) => theme.colors.lodaing};
  padding: 10px;
  border-radius: 5px;
  top: ${RFPercentage(40)}px;

  align-self: center;
  align-items: center;
  justify-content: center;
`;

export const LoadingIndicator = styled.ActivityIndicator`
  margin-bottom: 10px;
`;

export const LoadingText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto_slab_medium};
  color: ${({ theme }) => theme.colors.text};
`;
