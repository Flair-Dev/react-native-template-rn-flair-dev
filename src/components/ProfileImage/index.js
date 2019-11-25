/**
 * @format
 * @flow
 */

import React, {useState, useMemo} from 'react';
import {Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import images from '../../assets/images';

type Props = {
  uri: string,
  type: string,
};

const ProfileImage = ({uri, type, ...rest}: Props) => {
  const [loadError, setError] = useState(false);
  const {ImageComponent, source} = useMemo(() => {
    return {
      ImageComponent: loadError ? Image : FastImage,
      source: loadError ? images[type] : {uri},
    };
  }, [loadError, type, uri]);
  return (
    <ImageComponent source={source} onError={() => setError(true)} {...rest} />
  );
};

export default ProfileImage;
