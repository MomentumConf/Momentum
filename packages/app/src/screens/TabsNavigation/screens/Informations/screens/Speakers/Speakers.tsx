import React, { FC } from 'react'
import { FlatList, Image, ImageBackground } from 'react-native'
import styled from '@emotion/native'
import { useTheme } from '@emotion/react'

import { Speaker, useGetSpeakersQuery } from '@-local/db/lib/generated/api'
import ErrorBoundary from 'containers/error/Boundary'
import { FullLoader as Loader } from 'components/Loader'
import Text from 'components/Text'
import useDarkTheme from 'hooks/useDarkTheme'
import useShadow from 'hooks/useShadow'

const images = {
  placeholder: require('assets/images/speakers/placeholder.jpg'),
  'dominik-tomaszewski.jpg': require('assets/images/speakers/dominik-tomaszewski.jpg'),
  'ewa-kaminska.jpg': require('assets/images/speakers/ewa-kaminska.jpg'),
  'jacek-gromadzki.jpg': require('assets/images/speakers/jacek-gromadzki.jpg'),
  'luke-greenwood.jpg': require('assets/images/speakers/luke-greenwood.jpg'),
  'marek-kaminski.jpg': require('assets/images/speakers/marek-kaminski.jpg'),
  'zbyszek-zarozny.jpg': require('assets/images/speakers/zbyszek-zarozny.jpg'),
}

const SpeakerCard: FC<Pick<Speaker, 'name' | 'description' | 'image'>> = ({ name, image }) => {
  const isDark = useDarkTheme()
  const theme = useTheme()
  const shadow = useShadow(2)

  return (
    <Wrapper>
      <Card style={shadow}>
        <ImageBackground source={require('assets/images/broken_noise.png')} style={{}}>
          <Content style={!isDark ? { backgroundColor: theme.color.light } : {}}>
            <Photo
              source={
                image && Object.keys(images).includes(image)
                  ? images[image as keyof typeof images]
                  : images.placeholder
              }
              style={{ height: 160, width: 600 }}
            />
            <TitleBlock>
              <Title>{name}</Title>
            </TitleBlock>
          </Content>
        </ImageBackground>
      </Card>
    </Wrapper>
  )
}

const Photo = styled(Image)`
  max-width: 100%;
`

const Title = styled(Text)`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.headers};
  font-size: ${({ theme }) => `${theme.fontSize.s}px`};
`

const TitleBlock = styled.View`
  padding-top: ${({ theme }) => `${theme.spacing.s}px`};
  min-height: 48px;
`

const Wrapper = styled.View`
  width: 33.33%;
  max-width: 320px;
  padding: ${({ theme }) => `${theme.spacing.m / 2}px`};
`

const Card = styled.View`
  border-radius: ${({ theme }) => `${theme.borderRadius.m}px`};
  overflow: hidden;
`

const Content = styled.View`
  padding: ${({ theme }) => `${theme.spacing.s}px`};
`

const Speakers: FC = () => {
  const { data, loading, error } = useGetSpeakersQuery()
  const theme = useTheme()

  if (loading) return <Loader />
  if (error || !data) throw error

  return (
    <FlatList
      key={Math.random()}
      contentContainerStyle={{ padding: theme.spacing.m / 2 }}
      data={data.speaker}
      renderItem={({ item }) => <SpeakerCard {...item} />}
      keyExtractor={(item) => item.id}
      numColumns={3}
      // extraData={selectedId}
    />
  )
}

const SpeakersScreen: FC = () => (
  <ErrorBoundary>
    <Speakers />
  </ErrorBoundary>
)

export default SpeakersScreen