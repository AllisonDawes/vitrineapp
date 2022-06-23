import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { Container, Title } from "./styles";

interface Props {
  title: string;
  icon: string;
  onPress: () => void;
}

export function ButtonMenuUser({ title, icon, onPress }: Props) {
  const { colors } = useTheme();

  return (
    <Container onPress={onPress}>
      <Feather name={icon} size={20} color={colors.text_dark} />
      <Title>{title}</Title>
    </Container>
  );
}
