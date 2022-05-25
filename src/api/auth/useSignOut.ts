import {supabase} from 'api/client';
import {useAuth} from 'core';
import {useMutation} from 'react-query';

const signOut = async () => {
  await supabase.auth.signOut();
};

const useSignOut = () => {
  const auth = useAuth();

  return useMutation('sign-out', () => signOut(), {
    onSuccess: () => auth.signOut(),
  });
};

export {useSignOut};
