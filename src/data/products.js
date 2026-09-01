import { supabase } from "../lib/supabaseClient.js";

export const SHAPES = ["Semua", "Almond", "Ballerina", "Stiletto", "Square", "Oval"];

export async function fetchProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error("Gagal ambil data produk:", error.message);
    return [];
  }

  // ganti nama kolom snake_case dari Supabase ke camelCase dipakai komponen
  return data.map((p) => ({
    id: p.id,
    name: p.name,
    shape: p.shape,
    shapeDetail: p.shape_detail,
    design: p.design,
    price: p.price,
    finish: p.finish,
    thumb: p.thumb_url,
    setPhoto: p.set_photo_url,
    shopeeUrl: p.shopee_url,
  }));
}