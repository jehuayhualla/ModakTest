import React, {useEffect, useState} from 'react';
import {Animated, View, StyleSheet, Easing} from 'react-native';

interface ImagePlaceholderProps {
  style: any;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({style}) => {
  const [animated] = useState(new Animated.Value(0));

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(animated, {
        toValue: 1,
        duration: 2000,
        easing: Easing.bezier(0.3, 0.49, 0.71, 0.5),
        useNativeDriver: true,
      }),
    ).start();
  };

  const backgroundColor = animated.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['#EDF1F7', '#c7c9cc', '#EDF1F7'],
  });

  useEffect(() => {
    startAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Animated.View style={[styles.skeleton, {backgroundColor}, style]} />
    </View>
  );
};

const styles = StyleSheet.create({
  skeleton: {
    alignSelf: 'center',
    backgroundColor: '#EDF1F7',
  },
});

export default ImagePlaceholder;
