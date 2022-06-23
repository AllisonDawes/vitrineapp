import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import backgroundImagePNG from "../../assets/background-login.png";
import vitrineDrinksDeliveryPNG from "../../assets/vitrini-drinks-delivery.png";

import { AppStackParamList } from "../../routes/app.routes";

import { InputForm } from "../../components/InputForm";
import { Button } from "../../components/Button";

import {
  Container,
  ImgBackground,
  LogoImg,
  ContainerForm,
  Fields,
  TitleForm,
  ButtonAlreadyAccount,
  AlreadyAccountText,
} from "./styles";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Digíte um e-mail válido!")
    .required("Nome é obrigatório!"),
  password: Yup.string()
    .min(6, "Senha com no mínimo de 6 caracteres!")
    .required("Senha é obrigatória!"),
});

type SignInScreenProp = StackNavigationProp<AppStackParamList, "SignIn">;

export function SignUp() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <ImgBackground source={backgroundImagePNG}>
        <LogoImg source={vitrineDrinksDeliveryPNG} />
      </ImgBackground>

      <ContainerForm>
        <Fields>
          <TitleForm>Crie sua conta</TitleForm>

          <InputForm
            name="name"
            control={control}
            placeholder="Nome"
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            error={errors.name && errors.name.message}
          />

          <InputForm
            name="email"
            control={control}
            placeholder="Digíte seu e-mail"
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            error={errors.email && errors.email.message}
          />

          <InputForm
            name="password"
            control={control}
            placeholder="Digíte sua senha"
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            error={errors.password && errors.password.message}
          />

          <Button title="Criar" />

          <ButtonAlreadyAccount onPress={() => navigation.goBack()}>
            <AlreadyAccountText>Já tenho uma conta!</AlreadyAccountText>
          </ButtonAlreadyAccount>
        </Fields>
      </ContainerForm>
    </Container>
  );
}
