import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.secundary};
  height: ${RFValue(50)}px;
  width: 100%;
  border-radius: 8px;
  margin-top: 20px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary_dark};
  font-family: ${({ theme }) => theme.fonts.roboto_slab_bold};
  font-size: ${RFValue(16)}px;
`;
