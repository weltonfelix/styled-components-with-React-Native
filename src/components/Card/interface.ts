import { colors } from '../../theme/colors';

export enum CardStatus {
  PAID = 'paid',
  OPEN = 'open',
  LATE = 'late',
  REVERTED = 'reverted',
}

export interface ICardProps {
  amount: string;
  status: keyof typeof CardStatus;
}

export interface ICardStyledProps {
  color: keyof typeof colors;
  strikeThrough: boolean;
}

export type TCardStatusVariant = {
  [key in keyof typeof CardStatus]: keyof typeof colors;
};
