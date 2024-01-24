import {EventResponse} from '@app/libs/types';
import React from 'react';
import {View, Dimensions} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import EventCard from '@app/components/EventCard';
import {useNavigation} from '@react-navigation/native';
import {RootNavProps} from '@app/navigation/RootNavigation';
import {FlashList} from '@shopify/flash-list';

const SCREEN_WIDTH = Dimensions.get('window').width;
const NUM_COLUMNS = 3;
const GAP = 10;

interface Props {
  data: EventResponse[];
  onEndReached?: () => void;
}

const VerticalGridSlider: React.FC<Props> = ({data, onEndReached}) => {
  const {styles} = useStyles(stylesheet);
  const navigation = useNavigation<RootNavProps>();
  const handlePress = (item: EventResponse) => {
    navigation.navigate('EventDetails', {event: item});
  };
  return (
    <View style={styles.container}>
      <FlashList
        data={data}
        numColumns={NUM_COLUMNS}
        renderItem={({item}) => (
          <EventCard
            event={item}
            screenWidth={SCREEN_WIDTH}
            numColumns={NUM_COLUMNS}
            gap={GAP}
            onPress={handlePress}
          />
        )}
        keyExtractor={item => item.id.toString()}
        //contentContainerStyle={styles.gripGapVertical}
        //columnWrapperStyle={styles.gripGapHorizontal}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        estimatedItemSize={200}
      />
    </View>
  );
};

const stylesheet = createStyleSheet({
  container: {
    flex: 1,
  },
  gridGapHorizontal: {
    gap: 20,
  },
  gripGapHorizontal: {
    gap: 10,
  },
  gripGapVertical: {
    gap: 10,
  },
});

export default React.memo(VerticalGridSlider);
