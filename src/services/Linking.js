import {Linking, Platform} from 'react-native';

const openMap = (options: {lat: number, lng: number, location: string}) => {
  const {lat, lng, location} = options;
  const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
  const latLng = `${lat},${lng}`;
  const url = Platform.select({
    ios: `${scheme}${location}@${latLng}`,
    android: `${scheme}${latLng}(${location})`,
  });

  Linking.openURL(url);
};

export default {openMap};
