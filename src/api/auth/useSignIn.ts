import {supabase} from 'api/client';
import {useAuth} from 'core';
import {useMutation} from 'react-query';

type SigninData = {
  email: string;
  password: string;
};
const signIn = async ({email, password}: SigninData) => {
  const {user, session, error} = await supabase.auth.signIn({email, password});
  return {user, session, error};
};

const useSignIn = () => {
  const auth = useAuth();

  return useMutation('sign-in', (data: SigninData) => signIn(data), {
    onSuccess: data =>
      auth.signIn({
        access: data.session!.access_token,
        refresh: data.session!.refresh_token!,
      }),
  });
};

export {useSignIn};
