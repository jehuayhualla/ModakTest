import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

interface IconImageProps {
  uri: ImageSourcePropType | undefined;
}

const IconImage: React.FC<IconImageProps> = ({uri}) => {
  const {styles} = useStyles(stylesheet);
  return <Image source={uri} style={styles.icon} />;
};

export const FavoritesIcon = () => (
  <IconImage uri={require('../../../assets/favorites.png')} />
);
export const HearthIcon = () => (
  <IconImage uri={require('../../../assets/hearth.png')} />
);

export const HearthOnIcon = () => (
  <IconImage uri={require('../../../assets/hearthon.png')} />
);
export const CalendarIcon = () => (
  <IconImage uri={require('../../../assets/calendar.png')} />
);
const stylesheet = createStyleSheet({
  icon: {
    width: 50,
    height: 50,
  },
});

export default IconImage;
