import {EventResponse} from '@app/libs/types';
import {
  generateDuotoneImageUrl,
  generateImageThumbailUrl,
} from '@app/utils/images';
import React, {useMemo} from 'react';
import {View, Text, Image} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import CustomImage from '@app/components/Image';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface EventCardProps {
  event: EventResponse;
  screenWidth: number;
  numColumns: number;
  gap: number;
  onPress: (item: EventResponse) => void;
}

const EventCard: React.FC<EventCardProps> = React.memo(
  ({event, screenWidth, numColumns, gap, onPress}) => {
    const {styles} = useStyles(stylesheet);
    const eventCardWidth = useMemo(
      () => (screenWidth - 20 - (numColumns - 1) * gap) / numColumns,
      [screenWidth, numColumns, gap],
    );

    const imageUrls = useMemo(() => {
      const imageUrl = event.image_url;
      if (!imageUrl) {
        return null;
      }
      const thumbnailImageUrl = generateImageThumbailUrl(
        imageUrl,
        eventCardWidth / 2,
        eventCardWidth / 2,
      );
      const fullSizeImageUrl = generateImageThumbailUrl(
        imageUrl,
        eventCardWidth,
        eventCardWidth,
      );
      const duoToneThumbnailImageUrl =
        generateDuotoneImageUrl(thumbnailImageUrl);
      const duoToneFullSizeImageUrl = generateDuotoneImageUrl(fullSizeImageUrl);

      return {
        duoToneThumbnailImageUrl,
        duoToneFullSizeImageUrl,
      };
    }, [event.image_url, eventCardWidth]);

    return (
      <TouchableOpacity
        style={styles.itemContainer(eventCardWidth)}
        onPress={() => onPress(event)}>
        <View style={styles.itemImageContainer}>
          {imageUrls ? (
            <CustomImage
              source={imageUrls.duoToneFullSizeImageUrl}
              thumbnail={imageUrls.duoToneThumbnailImageUrl}
              style={{
                height: eventCardWidth,
                width: eventCardWidth,
              }}
            />
          ) : (
            <Image
              source={require('../../../assets/logo.png')}
              style={{height: eventCardWidth, width: eventCardWidth}}
              resizeMode="cover"
            />
          )}
        </View>
        <Text style={styles.cardTitle} numberOfLines={2}>
          {event.title}
        </Text>
      </TouchableOpacity>
    );
  },
);

const stylesheet = createStyleSheet(theme => ({
  cardTitle: {
    fontSize: 12,
    marginTop: 10,
    color: theme.colors.typography,
  },
  itemContainer: (eventCardWidth: number) => ({
    overflow: 'hidden',
    width: eventCardWidth,
    marginBottom: 10,
  }),
  itemImageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
}));

export default EventCard;
