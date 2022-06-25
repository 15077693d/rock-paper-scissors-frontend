import { Option } from './Option'

export enum OptionId {
  ROCK = 'rock',
  PAPER = 'paper',
  SCISSORS = 'scissors',
}

export const OPTIONS: { [id in OptionId]: Option } = {
  [OptionId.PAPER]: new Option('blue'),
  [OptionId.ROCK]: new Option('red'),
  [OptionId.SCISSORS]: new Option('yellow'),
}
