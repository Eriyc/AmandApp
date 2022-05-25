import {useNavigation} from '@react-navigation/native';
import {
  SectionStackNavigation,
  SectionStackParamList,
} from 'navigation/app-navigator';
import React, {useCallback} from 'react';
import {Pressable, Text, View} from 'ui';

type Section = {
  label: string;
  goto: keyof SectionStackParamList;
  image: string;
};

const sections: Section[] = [
  {goto: 'Food', label: 'Maträtter', image: 'red'},
  {goto: 'Workout', label: 'Träning', image: 'primary'},
];

export const SectionPicker = () => {
  const navigation = useNavigation<SectionStackNavigation>();
  const navigate = useCallback(
    (key: keyof SectionStackParamList) => () => navigation.navigate(key),
    [navigation],
  );

  return (
    <View flex={1}>
      {sections.map(section => (
        <Pressable
          key={section.goto.toString()}
          flex={1}
          backgroundColor={section.image as any}
          alignItems="center"
          justifyContent="center"
          onPress={navigate(section.goto)}>
          <Text fontSize={48} fontWeight="bold" color="white">
            {section.label} {'>'}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};
