import React, {useState} from 'react';
import {View, StyleSheet, StyleProp} from 'react-native';
import FastImage, {ImageStyle} from 'react-native-fast-image';
import ImagePlaceholder from '@app/components/ImagePlaceholder';

interface ImageWithThumbnailProps {
  source: string;
  thumbnail?: string;
  style: StyleProp<ImageStyle>;
}

const Image: React.FC<ImageWithThumbnailProps> = ({
  source,
  thumbnail,
  style,
}) => {
  const [isThumbnailLoaded, setIsThumbnailLoaded] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const handleThumbnailLoadEnd = () => {
    if (thumbnail) {
      setIsThumbnailLoaded(true);
    }
  };
  return (
    <View style={[styles.container, style]}>
      {!isThumbnailLoaded && !isImageLoaded && (
        <ImagePlaceholder style={style} />
      )}
      {thumbnail && !isImageLoaded && (
        <FastImage
          style={[style]}
          source={{
            uri: thumbnail,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
          onLoadEnd={handleThumbnailLoadEnd}
        />
      )}
      <FastImage
        style={[styles.absolute, style]}
        source={{
          uri: source,
          priority: FastImage.priority.low,
        }}
        onLoadEnd={() => setIsImageLoaded(true)}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  absolute: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

export default Image;
