import React from 'react';
import {View, StatusBar, Text, Alert} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStackParamList} from '@app/navigation/RootNavigation';
import {StackScreenProps} from '@react-navigation/stack';
import Image from '@app/components/Image';
import {
  CalendarIcon,
  HearthIcon,
  HearthOnIcon,
} from '@app/components/IconImage/IconImage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import useFavoriteEventsStore from '@app/store/useFavoriteEventStore';
import CalendarModule from '@app/natives/CalendarModule';
import {getTimestampFromDateTime} from '@app/utils/dates';

type Props = StackScreenProps<RootStackParamList, 'EventDetails'>;

const EventDetailScreen: React.FC<Props> = ({route}) => {
  const {styles} = useStyles(stylesheet);
  const insets = useSafeAreaInsets();
  const {event} = route.params;
  const addEvent = useFavoriteEventsStore(state => state.addEvent);
  const removeEvent = useFavoriteEventsStore(state => state.removeEvent);
  const isFavorite = useFavoriteEventsStore(state =>
    state.favoriteEvents.some(e => e.id === event.id),
  );

  const handleNewEventCalendar = () => {
    const {title, location, start_date, start_time} = event;
    const timestampDate = getTimestampFromDateTime(start_date, start_time);

    Alert.alert('Schedule Event', title ?? '', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () =>
          CalendarModule.createCalendarEvent(title, location, timestampDate),
      },
    ]);
  };

  return (
    <View style={[styles.container(insets)]}>
      <StatusBar hidden={true} />
      <View style={styles.absolute}>
        <Image
          source={event.image_url ?? 'https://via.placeholder.com/700'}
          style={styles.image}
        />
      </View>
      <View style={styles.footer(insets)}>
        <TouchableOpacity onPress={handleNewEventCalendar}>
          <CalendarIcon />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <Text style={styles.footerTitle}>{event.title}</Text>
          <Text style={styles.dateTitle}>{event.date_display}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            isFavorite ? removeEvent(event) : addEvent(event);
          }}>
          {isFavorite ? <HearthOnIcon /> : <HearthIcon />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: (insets: any) => ({
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
    paddingBottom: insets.bottom,
    paddingHorizontal: insets.left,
    paddingVertical: insets.right,
    position: 'relative',
  }),
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
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
  image: {
    height: '100%',
    width: '100%',
  },
  footer: (insets: any) => ({
    flex: 1,
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.backgroundColor,
    opacity: 0.8,
    paddingBottom: insets.bottom,
    paddingHorizontal: 20,
    paddingTop: 15,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  }),
  footerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.typography,
    textAlign: 'center',
  },
  dateTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.gold,
    textAlign: 'center',
  },
}));

export default EventDetailScreen;
