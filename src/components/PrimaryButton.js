import React from 'react';
import { Button } from 'react-native-paper';

const PrimaryButton = ({ title, onPress, disabled, mode = "contained" }) => (
  <Button
    mode={mode}
    onPress={onPress}
    disabled={disabled}
    style={{ marginVertical: 8 }}
  >
    {title}
  </Button>
);

export default PrimaryButton;