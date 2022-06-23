import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.colors.primary_dark};
  margin-top: ${RFValue(30)}px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto_slab_medium};
  color: ${({ theme }) => theme.colors.secundary};
  font-size: ${RFValue(14)}px;
`;
