import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput)`
  width: 100%;
  height: ${RFValue(50)}px;
  padding: 16px 18px;

  font-family: ${({ theme }) => theme.fonts.roboto_slab_medium};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.primary_dark};
  border-radius: 5px;

  margin-bottom: 8px;
`;
