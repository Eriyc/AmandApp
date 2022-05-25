import {useSignOut} from 'api/auth';
import React, {useMemo} from 'react';
import {
  SectionList,
  SectionListData,
  SectionListRenderItem,
} from 'react-native';
import {Pressable, Screen, Text} from 'ui';

type Setting = {
  label: string;
  onPress: () => void;
};

type SettingsSection = {
  label: string;
};

const renderSection: SectionListRenderItem<Setting, SettingsSection> = ({
  item,
}) => (
  <Pressable onPress={item.onPress}>
    <Text>{item.label}</Text>
  </Pressable>
);

const Settings = () => {
  const signOut = useSignOut();

  const sections = useMemo<SectionListData<Setting, SettingsSection>[]>(
    () => [
      {
        label: 'Konto',
        data: [{label: 'Logga ut', onPress: () => signOut.mutate()}],
      },
    ],
    [signOut],
  );

  return (
    <Screen>
      <SectionList sections={sections} renderItem={renderSection} />
    </Screen>
  );
};

export {Settings};
