import React from 'react';
import {View, StatusBar} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import VerticalGridSlider from '@app/components/VerticalGridSlider';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '@app/navigation/RootNavigation';
import useFavoriteEventsStore from '@app/store/useFavoriteEventStore';

export type FavoriteEventsScreenProps = StackScreenProps<
  RootStackParamList,
  'FavoriteEvents'
>;

const FavoriteEventsScreen: React.FC<FavoriteEventsScreenProps> = () => {
  const {styles} = useStyles(stylesheet);
  const insets = useSafeAreaInsets();
  const favoriteEvents = useFavoriteEventsStore(state => state.favoriteEvents);

  return (
    <View style={[styles.container(insets)]}>
      <StatusBar hidden={true} />
      <VerticalGridSlider data={favoriteEvents} />
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

export default FavoriteEventsScreen;
