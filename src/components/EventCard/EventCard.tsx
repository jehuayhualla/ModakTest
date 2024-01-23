import {EventResponse} from '@app/libs/types';
import {
  generateDuotoneImageUrl,
  generateImageThumbailUrl,
} from '@app/utils/images';
import React from 'react';
import {View, Text} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import CustomImage from '@app/components/Image';
import {TouchableOpacity} from 'react-native-gesture-handler';
interface EventCardProps {
  event: EventResponse;
  screenWidth: number;
  numColumns: number;
  gap: number;
  onPress: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  event,
  screenWidth,
  numColumns,
  gap,
  onPress,
}) => {
  const {styles} = useStyles(stylesheet);
  const eventCardWidth =
    (screenWidth - 20 - (numColumns - 1) * gap) / numColumns;
  const imageUrl =
    event.image_url ?? `https://via.placeholder.com/${eventCardWidth}`;
  const duoToneBaseUrl = generateDuotoneImageUrl(imageUrl.split('?')[0], true);
  const thumbnailImageUrl = generateImageThumbailUrl(
    imageUrl,
    eventCardWidth,
    eventCardWidth,
  );
  const duoToneThumbnailImageUrl = generateDuotoneImageUrl(thumbnailImageUrl);

  return (
    <TouchableOpacity
      style={styles.itemContainer(eventCardWidth)}
      onPress={onPress}>
      <View style={styles.itemImageContainer}>
        <CustomImage
          source={duoToneBaseUrl}
          thumbnail={duoToneThumbnailImageUrl}
          style={{
            height: eventCardWidth,
            width: eventCardWidth,
          }}
        />
      </View>
      <Text style={styles.cardTitle} numberOfLines={2}>
        {event.title}
      </Text>
    </TouchableOpacity>
  );
};

const stylesheet = createStyleSheet(theme => ({
  cardTitle: {
    fontSize: 12,
    marginTop: 10,
    color: theme.colors.typography,
  },
  itemContainer: (eventCardWidth: number) => ({
    overflow: 'hidden',
    width: eventCardWidth,
  }),
  itemImageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
}));

export default EventCard;
