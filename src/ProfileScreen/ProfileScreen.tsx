import React from 'react';
import { Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <Image 
      style={{width: '100%', height: '100%', resizeMode: 'cover'}}
      source={{uri: 'data:image/jpeg;base64,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'}}
    />
  );
};

export default ProfileScreen;