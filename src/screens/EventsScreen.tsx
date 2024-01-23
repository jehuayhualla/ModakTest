import React, {useCallback, useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {useEvents} from '@app/hooks/useEvents';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import VerticalGridSlider from '@app/components/VerticalGridSlider';
import debounce from 'lodash/debounce';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '@app/navigation/RootNavigation';

export type EventsScreenProps = StackScreenProps<RootStackParamList, 'Events'>;

const EventsScreen: React.FC<EventsScreenProps> = () => {
  const {styles} = useStyles(stylesheet);
  const [limit, setLimit] = useState(20);
  const {isLoading, isError, data, refetch} = useEvents(limit);
  const insets = useSafeAreaInsets();

  const handleEndReached = () => {
    setLimit((prevLimit: number) => prevLimit + 10);
    refetch();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleEndReached = useCallback(
    debounce(handleEndReached, 2000),
    [],
  );

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
      <VerticalGridSlider
        data={data?.data ?? []}
        onEndReached={debouncedHandleEndReached}
      />
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

export default EventsScreen;
