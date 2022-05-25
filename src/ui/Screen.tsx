import React from 'react';
import {View} from './View';

type Props = {
  children: React.ReactNode;
};

export const Screen = ({children}: Props) => (
  <View flexDirection="column" paddingHorizontal="m" flex={1} bg="background">
    {children}
  </View>
);
