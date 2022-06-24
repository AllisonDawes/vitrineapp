import React from "react";

import beerImg from "../../assets/beer.png";

import {
  Container,
  ButtonCategories,
  ContainerItem,
  IconItem,
  TextItem,
} from "./styles";

export function ListCategories() {
  return (
    <Container>
      <ButtonCategories onPress={() => {}}>
        <ContainerItem>
          <IconItem source={beerImg} />
          <TextItem>Cervejas</TextItem>
        </ContainerItem>
      </ButtonCategories>

      <ButtonCategories onPress={() => {}}>
        <ContainerItem>
          <IconItem source={beerImg} />
          <TextItem>Cervejas</TextItem>
        </ContainerItem>
      </ButtonCategories>

      <ButtonCategories onPress={() => {}}>
        <ContainerItem>
          <IconItem source={beerImg} />
          <TextItem>Cervejas</TextItem>
        </ContainerItem>
      </ButtonCategories>
    </Container>
  );
}
