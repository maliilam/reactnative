import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconButton = ({iconName, text, onPress, style, disabled}) => (
  <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
    <Icon style={style} name={iconName}>
      <Text>{text}</Text>
    </Icon>
  </TouchableOpacity>
);

export default IconButton;
