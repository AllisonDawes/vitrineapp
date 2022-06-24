import React, { useState } from "react";

import { Header } from "../../components/Header";

import { Container, Title } from "./styles";

export function Home() {
  const [avatar, setAvatar] = useState(
    "https://avatars.githubusercontent.com/u/31525309?v=4"
  );

  return (
    <Container>
      <Header
        avatar={avatar}
        welcomeMessage="Olá"
        userName="Allison Dawes"
        iconNotification="bell"
      />
      <Title>Home</Title>
    </Container>
  );
}
