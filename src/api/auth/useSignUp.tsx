import {supabase} from 'api/client';
import {useAuth} from 'core';
import {useMutation} from 'react-query';

type SignUpData = {
  email: string;
  password: string;
};
const signUp = async ({email, password}: SignUpData) => {
  const {user, session, error} = await supabase.auth.signUp({email, password});
  return {user, session, error};
};

const useSignUp = () => {
  const auth = useAuth();

  return useMutation('sign-up', (data: SignUpData) => signUp(data), {
    onSuccess: data =>
      auth.signIn({
        access: data.session!.access_token,
        refresh: data.session!.refresh_token!,
      }),
  });
};

export {useSignUp};
