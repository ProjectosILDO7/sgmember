import { ref } from "vue";
import useSupabase from "boot/supabase";

const user = ref(null);
const token = ref(null);

export default function userAuthUser() {
  const { supabase } = useSupabase();

  const isLoggidIn = async () => {
    return !!user.value;
  };

  const getToken = async () => {
    const { data, error } = supabase.auth.getSession();
    if (error) throw error;
    console.log(data);
    token.value = data;
    return data;
  };

  const getUser = async () => {
    console.log(user.value);
  };
  const login = async ({ email, password }) => {
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return user;
  };

  const resetPassword = async (accessToken, newPassword) => {
    const { user, error } = await supabase.auth.updateUser({
      accessToken,
      password: newPassword,
    });
    if (error) throw error;
    return user;
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };
  const register = async ({ email, password, ...meta }) => {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: meta.name,
          phone: meta.phone,
          photoURL: meta.photoURL,
          redirectTo: `${window.location.origin}/me?fromEmail=registrationConfirmation`,
        },
      },
    });

    if (error) throw error;
    return user;
  };

  const updateUser = async (data) => {
    const { user, error } = await supabase.auth.update(data);
    if (error) throw error;
    return user;
  };

  const loginWithSocialProvider = async (provider) => {
    const { user, error } = await supabase.auth.signIn(provider);
    if (error) throw error;
    return user;
  };

  const sendEmailResetPassword = async ({ email }) => {
    const { user, error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) throw error;
    return user;
  };

  return {
    user,
    resetPassword,
    login,
    isLoggidIn,
    getUser,
    logout,
    register,
    sendEmailResetPassword,
    loginWithSocialProvider,
    updateUser,
    token,
    getToken,
  };
}
