import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

interface HomeCardProps {
  title: string;
  ImageChild: React.FC;
  onPress?: () => void;
}

const HomeCard: React.FC<HomeCardProps> = ({title, ImageChild, onPress}) => {
  const {styles} = useStyles(stylesheet);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <ImageChild />
    </TouchableOpacity>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.lightBackground,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.lightTypography,
    fontSize: 16,
    letterSpacing: 0.5,
    marginBottom: 5,
    textAlign: 'center',
  },
}));

export default HomeCard;
