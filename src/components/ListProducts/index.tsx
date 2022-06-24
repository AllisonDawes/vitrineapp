import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import productPng from "../../assets/product.png";

import {
  Container,
  ButtonListItemProduct,
  ContentTop,
  ProductImg,
  ContainerTextContent,
  ProductTitle,
  ProductDescription,
  ButtonFavorite,
  ContainerPrice,
  PriceText,
} from "./styles";

export function ListProduts() {
  const { colors } = useTheme();

  return (
    <Container>
      <ButtonListItemProduct>
        <ContentTop>
          <ProductImg source={productPng} />

          <ContainerTextContent>
            <ProductTitle>Cerveja Heineken</ProductTitle>
            <ProductDescription>
              Cerveja long neck 300ml feita com água malte e lupulo
            </ProductDescription>
          </ContainerTextContent>

          <ButtonFavorite>
            <Feather name="heart" size={18} color={colors.text_dark} />
          </ButtonFavorite>
        </ContentTop>

        <ContainerPrice>
          <PriceText>R$ 8,00</PriceText>
        </ContainerPrice>
      </ButtonListItemProduct>

      <ButtonListItemProduct>
        <ContentTop>
          <ProductImg source={productPng} />

          <ContainerTextContent>
            <ProductTitle>Cerveja Heineken</ProductTitle>
            <ProductDescription>
              Cerveja long neck 300ml feita com água malte e lupulo
            </ProductDescription>
          </ContainerTextContent>

          <ButtonFavorite>
            <Feather name="heart" size={18} color={colors.text_dark} />
          </ButtonFavorite>
        </ContentTop>

        <ContainerPrice>
          <PriceText>R$ 8,00</PriceText>
        </ContainerPrice>
      </ButtonListItemProduct>

      <ButtonListItemProduct>
        <ContentTop>
          <ProductImg source={productPng} />

          <ContainerTextContent>
            <ProductTitle>Cerveja Heineken</ProductTitle>
            <ProductDescription>
              Cerveja long neck 300ml feita com água malte e lupulo
            </ProductDescription>
          </ContainerTextContent>

          <ButtonFavorite>
            <Feather name="heart" size={18} color={colors.text_dark} />
          </ButtonFavorite>
        </ContentTop>

        <ContainerPrice>
          <PriceText>R$ 8,00</PriceText>
        </ContainerPrice>
      </ButtonListItemProduct>
    </Container>
  );
}
