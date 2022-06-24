import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;

  align-items: center;
  justify-content: center;

  margin: 20px 0;
`;

export const InfoOpenClose = styled.View`
  height: ${RFValue(30)}px;
  width: ${RFValue(80)}px;
  background: ${({ theme }) => theme.colors.green};
  border-radius: 5px;
  margin-bottom: 5px;

  align-items: center;
  justify-content: center;
`;

export const TextOpenClose = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto_slab_bold};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
`;

export const TextHour = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto_slab_bold};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
`;
