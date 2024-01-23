import {EventResponse} from '@app/libs/types';
import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import EventCard from '@app/components/EventCard';
import {RootNavProps} from '@app/navigation/RootNavigation';
import {useNavigation} from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const NUM_COLUMNS = 2.5;
const GAP = 20;

interface Props {
  data: EventResponse[];
  title: string;
}

const HorizontalSlider: React.FC<Props> = ({data, title}) => {
  const {styles} = useStyles(stylesheet);
  const navigation = useNavigation<RootNavProps>();
  return (
    <View style={styles.container}>
      <Text style={styles.sliderTitle}>{title}</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <EventCard
            event={item}
            screenWidth={SCREEN_WIDTH}
            numColumns={NUM_COLUMNS}
            gap={GAP}
            onPress={() => {
              navigation.navigate('EventDetails', {event: item});
            }}
          />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.gridGapHorizontal}
      />
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  gridGapHorizontal: {
    gap: 20,
  },
  sliderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.typography,
    marginBottom: 10,
  },
  container: {
    marginBottom: 30,
  },
}));

export default HorizontalSlider;
