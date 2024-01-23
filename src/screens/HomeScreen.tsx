import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {useEvents} from '@app/hooks/useEvents';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import HomeHeader from '@app/components/HomeHeader';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HorizontalSlider from '@app/components/HorizontalSlider';
import HomeCard from '@app/components/HomeCard';
import {FavoritesIcon} from '@app/components/IconImage';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '@app/navigation/RootNavigation';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const {styles} = useStyles(stylesheet);
  const {isLoading, isError, data} = useEvents(20);
  const insets = useSafeAreaInsets();
  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (isError) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }
  return (
    <View style={[styles.container(insets)]}>
      <StatusBar hidden={true} />
      <HomeHeader style={{paddingTop: insets.top}} />
      <HorizontalSlider
        title="Upcoming events"
        data={data?.data.slice(0, 10) ?? []}
      />
      <View style={styles.gripGapHorizontal}>
        <View style={styles.row}>
          <HomeCard
            title="Favorites"
            ImageChild={FavoritesIcon}
            onPress={() => navigation.navigate('FavoriteEvents')}
          />
          <HomeCard title="Search" ImageChild={FavoritesIcon} />
          <HomeCard
            title="All Events"
            ImageChild={FavoritesIcon}
            onPress={() => navigation.navigate('Events')}
          />
        </View>
        <View style={styles.row}>
          <HomeCard title="Loremp" ImageChild={FavoritesIcon} />
          <HomeCard title="Ipsum" ImageChild={FavoritesIcon} />
          <HomeCard title="Demo" ImageChild={FavoritesIcon} />
        </View>
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: (insets: any) => ({
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
    paddingBottom: insets.bottom,
    paddingHorizontal: insets.left + 10,
    paddingVertical: insets.right,
  }),
  gripGapHorizontal: {
    gap: 10,
  },
  gripGapVertical: {
    gap: 20,
  },
  flatListStyle: {
    padding: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    height: 150,
  },
}));

export default HomeScreen;
