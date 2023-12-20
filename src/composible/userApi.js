import userAuthUser from "./userAuthUser";
import userSupabase from "boot/supabase";
import { v4 as uuid } from "uuid";

export default function userApi() {
  const { user } = userAuthUser();
  const fileName = uuid();
  const { supabase } = userSupabase();

  const list = async (table) => {
    const { data, error } = await supabase.from(table).select();
    if (error) throw error;
    return data;
  };
  const getById = async (table, id) => {
    const { data, error } = await supabase.from(table).select().eq("id", id);
    if (error) throw error;
    return data[0];
  };
  const post = async (table, form) => {
    const { data, error } = await supabase
      .from(table)
      .insert({ ...form, user_id: user.value.id });
    if (error) throw error;
    return data;
  };
  const update = async (table, form) => {
    const { data, error } = await supabase
      .from(table)
      .update({ ...form })
      .match({ id: form.id });

    if (error) throw error;
    return data;
  };
  const remove = async (table, id) => {
    const { data, error } = await supabase.from(table).delete().match({ id });

    if (error) throw error;
    return data;
  };

  // Ûploud de Imagens
  const uploadImage = async (file, storage) => {
    const { data, error } = await supabase.storage
      .from(storage)
      .upload(fileName, file, {
        cacheControl: 3600,
        upsert: false,
      });

    const publicURL = await getImagUrl(fileName, storage);
    if (error) throw error;
    return publicURL;
  };

  // Pega a Url da Imagem
  const getImagUrl = async (fileName, storage) => {
    const { data, error } = await supabase.storage
      .from(storage)
      .getPublicUrl(fileName);
    if (error) throw error;
    console.log(data.publicUrl);
    return data.publicUrl;
  };

  return {
    list,
    getById,
    post,
    uploadImage,
    update,
    remove,
    fileName,
  };
}
