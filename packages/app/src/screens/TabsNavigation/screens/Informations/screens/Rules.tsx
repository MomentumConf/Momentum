import React, { FC } from 'react'

import TextPage from 'components/TextPage'
import Markdown from 'components/Markdown'
import styled from '@emotion/native'
import { Link } from '@react-navigation/native'
import { View } from 'react-native'

const Column = styled.View`
  flex: 1;
  justify-content: space-between;
`

const VisibleLink = styled(Link)`
  padding-top: 100px;
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.default};
`

const rules = `
1. Każdy uczestnik KONFERENCJI MOMENTUM 2023 zobowiązany jest nosić opaskę, otrzymaną podczas rejestracji i stanowiącą jego identyfikator podczas imprezy.
2. Każdy uczestnik KONFERENCJI MOMENTUM 2023 zobowiązany jest uczestniczyć w programie wydarzenia.
3. W trakcie wykładów oraz społeczności obowiązuje zakaz przebywania na terenie szkoły.
4. W trakcie trwania całego wydarzenia obowiązuje całkowity zakaz zażywania jakichkolwiek środków odurzających, spożywania alkoholu oraz palenia tytoniu.
5. Za przedmioty, wyposażenie i odzież pozostawione na terenie Hali Milenium, szkół, kąpieliska i plaży, organizator nie ponosi odpowiedzialności.
6. Każdy uczestnik wydarzenia zobowiązany jest do kąpania się tylko w miejscach strzeżonych przez ratowników wodnych oraz zgodnie z obowiązującym regulaminem kąpieliska.
7. Osoby niepełnoletnie mogą przebywać poza miejscem wydarzenia oraz kąpać się w morzu tylko w wyznaczonym miejscu i tylko pod opieką swego opiekuna.
8. Dla uczestników KONFERENCJI MOMENTUM 2023 kąpielisko i plaża czynne są w godzinach od 13:45 do 19:30 w dniach 11-14 lipca 2023 roku. Organizator nie ponosi odpowiedzialności za osoby korzystające z tych miejsc poza dniami i godzinami określonymi w regulaminie i niestosujące się do regulaminu kąpieliska.
9. W godzinach 00.30 - 06.00 szkoły oraz inne miejsca noclegowe zostają zamknięte. Po godzinie 00.30 nie ma możliwości wejścia na teren szkoły.
10. Każdy uczestnik KONFERENCJI MOMENTUM 2023 wyraża zgodę na rozpowszechnianie jego wizerunku w różnego rodzaju materiałach promocyjnych oraz w prasie i mediach.
`

const Rules: FC = () => {
  return (
    <TextPage>
      <Column>
        <Markdown>{rules}</Markdown>
        <View>
          <VisibleLink to="/info/o-aplikacji">O aplikacji</VisibleLink>
        </View>
      </Column>
    </TextPage>
  )
}

export default Rules
