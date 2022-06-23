import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { useAuth } from "../../hooks/auth";

import { Header } from "../../components/Header";
import { ButtonMenuUser } from "../../components/ButtonMenuUser";

import { Container, ContainerAvatar, ContainerMenu } from "./styles";

export function Profile() {
  const { colors } = useTheme();

  const { logOut } = useAuth();

  return (
    <>
      <Header title="Menu do usuário" />
      <Container>
        <ContainerAvatar>
          <Feather name="user" size={48} color={colors.text_dark} />
        </ContainerAvatar>

        <ContainerMenu>
          <ButtonMenuUser
            onPress={() => {}}
            icon="user-check"
            title="Meus dados"
          />

          <ButtonMenuUser
            onPress={() => {}}
            icon="map-pin"
            title="Meu endereço"
          />

          <ButtonMenuUser
            onPress={logOut}
            icon="log-out"
            title="Sair da aplicação"
          />
        </ContainerMenu>
      </Container>
    </>
  );
}
