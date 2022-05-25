import React from 'react';
import {Button, Screen, Input} from 'ui';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useSignUp} from 'api/auth/useSignUp';
import {useNavigation} from '@react-navigation/native';

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

export const SignUp = () => {
  const mutation = useSignUp();
  const navigation = useNavigation();

  const {handleSubmit, control} = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  const navigate = () => {
    navigation.navigate('Login');
  };

  return (
    <Screen>
      <Input control={control} name="email" label="Email" />
      <Input
        control={control}
        name="password"
        label="Password"
        placeholder="***"
        secureTextEntry={true}
      />
      <Button
        label="Login"
        onPress={handleSubmit(onSubmit)}
        variant="secondary"
      />
      <Button onPress={navigate} label="Logga in istället" />
    </Screen>
  );
};
