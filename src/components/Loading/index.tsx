import React, { useState } from "react";
import { useTheme } from "styled-components";

import { Container, LoadingIndicator, LoadingText } from "./styles";

interface Props {
  active: boolean;
}

export function Loading({ active }: Props) {
  const { colors } = useTheme();

  return (
    <>
      {active && (
        <Container>
          <LoadingIndicator size={60} color={colors.secundary} />
          <LoadingText>carregando dados...</LoadingText>
        </Container>
      )}
    </>
  );
}
