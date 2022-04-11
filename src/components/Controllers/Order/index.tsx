import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import {
  Container,
  Status,
  Content,
  Header,
  Title,
  Label,
  Info,
  Footer,
  OrderStyleProps
} from './styles';


export type OrderProps = OrderStyleProps & {
  id: string;
  patrimony: string;
  equipment: string;
  description: string;
}

type Props = {
  data: OrderProps;
  onPress: () => void;
};

export function Order({ data, onPress }: Props) {
  const theme = useTheme();

  return (
    <Container onPress={onPress}>
      <Status status={data.status} />

      <Content>
        <Header>
          <Title>{data.description}</Title>
          <MaterialIcons
            name={data.status === "open" ? "hourglass-empty" : "check-circle"}
            size={24}
            color={data.status === "open" ? theme.COLORS.SECONDARY : theme.COLORS.PRIMARY}
          />
        </Header>

        <Footer>
          <Info>
            <MaterialIcons name="schedule" size={16} color={theme.COLORS.SUBTEXT} />
            <Label>
              20/01/22 às 14h
            </Label>
          </Info>

          <Info>
            <MaterialIcons name="my-location" size={16} color={theme.COLORS.SUBTEXT} />
            <Label>
              {data.patrimony}
            </Label>
          </Info>
        </Footer>
      </Content>
    </Container>
  );
}