import React from 'react';

import { Container, Label, Description } from './styles';

import { ICardProps, CardStatus, TCardStatusVariant } from './interface';

const Card = ({ amount, status }: ICardProps) => {
  const statusVariant: TCardStatusVariant = {
    PAID: 'success-400',
    OPEN: 'warning-400',
    LATE: 'error-400',
    REVERTED: 'neutral-400',
  };

  const isReverted = status === 'REVERTED';

  return (
    <Container>
      <Label>{amount}</Label>
      <Description strikeThrough={isReverted} color={statusVariant[status]}>
        {CardStatus[status]}
      </Description>
    </Container>
  );
};

export default Card;
