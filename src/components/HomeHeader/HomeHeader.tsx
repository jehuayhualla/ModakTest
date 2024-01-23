import React from 'react';
import {View, Text, StyleProp, ViewStyle, Image} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

interface HomeHeaderProps {
  style: StyleProp<ViewStyle>;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({style}) => {
  const {styles} = useStyles(stylesheet);
  return (
    <View style={[styles.container, style]}>
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />
      <View style={styles.leftContainer}>
        <Text style={styles.headerTitle}>Events App</Text>
        <Text style={styles.headerDescription}>
          This is a sample app created with React Native and TypeScript
        </Text>
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 20,
    backgroundColor: theme.colors.lightBackground,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    gap: 20,
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  headerTitle: {
    color: theme.colors.lightTypography,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  headerDescription: {
    color: theme.colors.lightTypography,
    fontSize: 12,
    fontWeight: '300',
    lineHeight: 18,
  },
  logo: {
    width: 80,
    height: 80,
  },
}));

export default HomeHeader;
