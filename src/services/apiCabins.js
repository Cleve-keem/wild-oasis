import supabase from "./supabase";

export async function getCabinData() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Error Loading cabin data");
  }

  return data;
}
