import {
  Container,
  Number,
  Title,
  Units,
} from './FeeCard.elements'

export default function FeeCard() {
  return (
    <Container>
      <Title>fee</Title>
      <div>
        <Number>10</Number>
        <Units>RPS</Units>
      </div>
    </Container>
  )
}
