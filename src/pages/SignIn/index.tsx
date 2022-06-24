import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { useAuth } from "../../hooks/auth";

import backgroundImagePNG from "../../assets/background-login.png";
import vitrineDrinksDeliveryPNG from "../../assets/vitrini-drinks-delivery.png";

import { AppStackParamList } from "../../routes/stack.routes";

import { InputForm } from "../../components/InputForm";
import { Button } from "../../components/Button";

import {
  Container,
  Backgroundimage,
  ImgLogo,
  ContainerForm,
  Fields,
  TitleScreen,
  ContainerText,
  ButtonCreateAccount,
  CreateAccountText,
  ButtonForgotPassword,
  ForgotPassText,
} from "./styles";
import { Alert } from "react-native";

interface DataForm {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Digíte um e-mail válido!")
    .required("E-mail é obrigatório!"),
  password: Yup.string()
    .min(6, "Senha com no mínimo de 6 caracteres!")
    .required("Senha é obrigatória!"),
});

type SignUpScreenProp = StackNavigationProp<AppStackParamList, "SignIn">;

export function SignIn() {
  const navigation = useNavigation<SignUpScreenProp>();

  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIn = useCallback(async (form: DataForm) => {
    try {
      await signIn({
        email: form.email,
        password: form.password,
      });

      reset();
    } catch (err) {
      Alert.alert("Erro ao fazer login. | " + err);
      console.log("Error: " + err);
    }
  }, []);

  return (
    <Container>
      <Backgroundimage source={backgroundImagePNG}>
        <ImgLogo source={vitrineDrinksDeliveryPNG} />
      </Backgroundimage>

      <ContainerForm>
        <Fields>
          <ContainerText>
            <TitleScreen>Fazer Login</TitleScreen>

            <ButtonCreateAccount onPress={() => navigation.navigate("SignUp")}>
              <CreateAccountText>Criar conta</CreateAccountText>
            </ButtonCreateAccount>
          </ContainerText>

          <InputForm
            name="email"
            control={control}
            placeholder="Digíte seu e-mail"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            error={errors.email && errors.email.message}
          />

          <InputForm
            name="password"
            control={control}
            placeholder="Digíte sua senha"
            placeholderTextColor="#999"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            error={errors.password && errors.password.message}
          />

          <Button title="Entrar" onPress={handleSubmit(handleSignIn)} />

          <ButtonForgotPassword onPress={() => {}}>
            <ForgotPassText>Esqueci minha senha!</ForgotPassText>
          </ButtonForgotPassword>
        </Fields>
      </ContainerForm>
    </Container>
  );
}
