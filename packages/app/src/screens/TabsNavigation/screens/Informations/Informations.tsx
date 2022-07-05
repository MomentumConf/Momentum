import React, { FC } from 'react'
import { View } from 'react-native'
import { createStackNavigator, HeaderBackButton, StackHeaderProps } from '@react-navigation/stack'
import { useLinkTo, useNavigation } from '@react-navigation/native'

import Rules from './screens/Rules'
import About from './screens/About'
import Speakers from './screens/Speakers'
import Songs from './screens/Songs'
import Song, { ParamList as SongParamList } from './screens/Song'
import Speaker, { ParamList as SpeakerParamList } from './screens/Speaker'
import InfoCard from './components/InfoCard'
import { TileGrid, TileRow, TileColumn } from './components/TileGrid'
import Header from 'components/Header'
import ErrorBoundary from 'containers/error/Boundary'

export const screens = {
  InfoScreen: '',
  About: 'o-aplikacji',
  Speakers: 'mowcy',
  Songs: 'koncert',
  Speaker: {
    path: 'mowcy/:name',
    parse: {
      name: (name: string): string => decodeURI(name),
    },
    stringify: {
      name: (name: string): string => encodeURI(name),
    },
  },
  Rules: 'regulamin',
  Song: {
    path: 'koncert/:original_title',
    parse: {
      original_title: (original_title: string): string => decodeURI(original_title),
    },
    stringify: {
      original_title: (original_title: string): string => encodeURI(original_title),
    },
  },
}

type InfoStackParamList = {
  InfoScreen: undefined
  About: undefined
  Speakers: undefined
  Rules: undefined
  Songs: undefined
} & SpeakerParamList &
  SongParamList

const Stack = createStackNavigator<InfoStackParamList>()

const InfoBackButton = () => {
  const linkTo = useLinkTo()
  return <HeaderBackButton canGoBack accessibilityLabel="Powrót" onPress={() => linkTo('/info')} />
}

const BackButton = () => {
  const navigation = useNavigation()
  return navigation.canGoBack() ? (
    <HeaderBackButton canGoBack accessibilityLabel="Powrót" onPress={() => navigation.goBack()} />
  ) : null
}

const SongBackButton = () => {
  const navigation = useNavigation()
  return (
    <HeaderBackButton
      canGoBack
      accessibilityLabel="Powrót"
      onPress={() => navigation.navigate('Songs')}
    />
  )
}

const InformationsScreen: FC = () => {
  return (
    <ErrorBoundary>
      <View style={{ flex: 1 }}>
        <TileGrid>
          <TileRow>
            <TileColumn>
              <InfoCard image={require('assets/images/info/mowcy.png')} link="/info/mowcy">
                Mówcy
              </InfoCard>
            </TileColumn>
          </TileRow>
          <TileRow>
            <TileColumn>
              <InfoCard image={require('assets/images/info/teksty.png')} link="/info/koncert">
                Koncert na plaży
              </InfoCard>
            </TileColumn>
          </TileRow>
          <TileRow>
            <TileColumn>
              <InfoCard image={require('assets/images/info/regulamin.png')} link="/info/regulamin">
                Regulamin
              </InfoCard>
            </TileColumn>
          </TileRow>
        </TileGrid>
      </View>
    </ErrorBoundary>
  )
}

const EmptyHeader: FC<StackHeaderProps> = () => <Header />

const Informations: FC = () => (
  <Stack.Navigator initialRouteName="InfoScreen">
    <Stack.Screen
      name="InfoScreen"
      component={InformationsScreen}
      options={{ title: 'Informacje', header: EmptyHeader }}
    />
    <Stack.Screen
      name="About"
      component={About}
      options={{ title: 'O aplikacji', headerLeft: BackButton }}
    />
    <Stack.Screen
      name="Speakers"
      component={Speakers}
      options={{ title: 'Mówcy', headerLeft: InfoBackButton }}
    />
    <Stack.Screen
      name="Songs"
      component={Songs}
      options={{ title: 'Koncert na plaży', headerLeft: InfoBackButton }}
    />
    <Stack.Screen
      name="Song"
      component={Song}
      options={({ route }) => ({
        title: route?.params?.original_title,
        headerLeft: SongBackButton,
      })}
    />
    <Stack.Screen
      name="Speaker"
      component={Speaker}
      options={({ route }) => ({
        title: route?.params?.name,
        headerLeft: BackButton,
      })}
    />
    <Stack.Screen
      name="Rules"
      component={Rules}
      options={{ title: 'Regulamin', headerLeft: InfoBackButton }}
    />
  </Stack.Navigator>
)

export default Informations
