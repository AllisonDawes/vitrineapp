import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../hooks/auth";

import { Header } from "../../components/Header";
import { ButtonMenuUser } from "../../components/ButtonMenuUser";

import {
  Container,
  ContainerAvatar,
  ContainerMenu,
  ContainerButtons,
} from "./styles";

export function Profile() {
  const navigation = useNavigation();

  const { colors } = useTheme();

  const { logOut } = useAuth();

  function handleLogOut() {
    logOut();

    navigation.navigate("SignIn");
  }

  return (
    <>
      <Container>
        <Header title="Menu do usuário" />
        <ContainerAvatar>
          <Feather name="user" size={48} color={colors.text_dark} />
        </ContainerAvatar>

        <ContainerMenu>
          <ContainerButtons>
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
              onPress={handleLogOut}
              icon="log-out"
              title="Sair da aplicação"
            />
          </ContainerButtons>
        </ContainerMenu>
      </Container>
    </>
  );
}
