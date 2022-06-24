import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};

  align-items: center;
`;

export const ContainerAvatar = styled.View`
  width: ${RFValue(140)}px;
  height: ${RFValue(140)}px;
  background: ${({ theme }) => theme.colors.primary_dark};
  border-radius: ${RFValue(70)}px;
  margin: 20px 0 40px;

  align-items: center;
  justify-content: center;
`;

export const ContainerMenu = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;
`;

export const ContainerButtons = styled.View`
  flex: 1;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary_dark};
  border-radius: 10px;
  padding: 40px 20px 20px;
`;
