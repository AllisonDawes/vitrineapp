import React from "react";

import { Container, InfoOpenClose, TextOpenClose, TextHour } from "./styles";

export function OpenCloseInformation() {
  return (
    <Container>
      <InfoOpenClose>
        <TextOpenClose>{"Aberto"}</TextOpenClose>
      </InfoOpenClose>

      <TextHour>{"Fecha ás 22:00 horas"}</TextHour>
    </Container>
  );
}
