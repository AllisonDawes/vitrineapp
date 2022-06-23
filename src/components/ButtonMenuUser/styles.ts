import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  height: ${RFValue(38)}px;
  background: ${({ theme }) => theme.colors.primary_dark};

  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) => theme.colors.text_dark};

  margin-bottom: 20px;

  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.roboto_slab_bold};
  font-size: ${RFValue(16)}px;
  margin-left: 10px;
`;
