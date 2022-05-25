import {useQuoteOfTheDay} from 'api/useQuoteOfTheDay';
import React from 'react';
import {Text, View} from 'ui';

export const QuoteWidget = () => {
  const {data} = useQuoteOfTheDay();

  if (!data) {
    return <View />;
  }

  return (
    <View
      marginTop="m"
      shadowColor="black"
      shadowOffset={{width: -2, height: 4}}
      shadowOpacity={0.2}
      shadowRadius={3}
      backgroundColor="background"
      borderRadius={8}
      elevation={8}
      paddingHorizontal="m"
      paddingVertical="l">
      <Text fontSize={18} color="black" fontWeight="bold">
        Dagens citat
      </Text>
      <Text color="black">
        {data.content} <Text color="grey2">-{data.author}</Text>
      </Text>
    </View>
  );
};
