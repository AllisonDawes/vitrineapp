import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import {
  Container,
  ContainerAvatar,
  Avatar,
  ContainerWelcomeText,
  Welcome,
  Username,
  ContainerTitle,
  Title,
  ButtonNotification,
} from "./styles";

interface Props {
  title?: string;
  welcomeMessage?: string;
  userName?: string;
  avatar?: string;
  iconNotification?: string;
}

export function Header({
  title,
  welcomeMessage,
  userName,
  avatar,
  iconNotification,
}: Props) {
  const { colors } = useTheme();

  return (
    <Container>
      {avatar && (
        <ContainerAvatar>
          {(
            <Avatar
              source={{
                uri: avatar,
              }}
            />
          ) || <Feather name="user" size={48} color={colors.text_dark} />}

          {welcomeMessage && userName && (
            <ContainerWelcomeText>
              <Welcome>{welcomeMessage}</Welcome>
              <Username>{userName}</Username>
            </ContainerWelcomeText>
          )}
        </ContainerAvatar>
      )}

      {title && (
        <ContainerTitle>
          <Title>{title}</Title>
        </ContainerTitle>
      )}

      <ButtonNotification onPress={() => {}}>
        <Feather name={iconNotification} size={24} color={colors.text_dark} />
      </ButtonNotification>
    </Container>
  );
}
