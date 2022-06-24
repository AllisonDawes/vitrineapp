import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: ${({ theme }) => theme.colors.bg_white};
  padding: 20px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ButtonListItemProduct = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  background: ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ContentTop = styled.View`
  flex-direction: row;
`;

export const ProductImg = styled.Image`
  height: ${RFValue(80)}px;
  width: ${RFValue(80)}px;
`;

export const ContainerTextContent = styled.View`
  flex: 2;
  margin-left: 10px;
`;

export const ProductTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto_slab_medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

export const ProductDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto_slab_regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const ButtonFavorite = styled.View`
  flex: 0.2;
  margin-left: 10px;
`;

export const ContainerPrice = styled.View`
  width: 100%;

  align-items: flex-end;
`;

export const PriceText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto_slab_medium};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.primary};
`;
