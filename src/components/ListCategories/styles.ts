import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(100)}px;
  padding: 0 20px;

  flex-direction: row;
`;

export const ButtonCategories = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  background: ${({ theme }) => theme.colors.primary_dark};
  border-radius: 8px;
  padding: 0 20px;
  margin-right: 10px;

  align-items: center;
  justify-content: center;
`;

export const ContainerItem = styled.View``;

export const IconItem = styled.Image`
  margin-bottom: 8px;
`;

export const TextItem = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto_slab_medium};
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(12)}px;
`;
