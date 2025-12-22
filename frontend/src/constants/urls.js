// URL Constants - Using the same Supabase storage from the reference project
export const BASE_URL = "https://hmgdlcwzpmbgvfpaiylz.supabase.co/storage/v1/object/public/images/";

export const URL_ICON = BASE_URL + "icons/";
export const URL_ANIM = BASE_URL + "animasi/";
export const URL_IMAGE = BASE_URL + "images/";
export const URL_SOUND = BASE_URL + "sounds/";

// Sound assets
export const SOUNDS = {
  CORRECT: `${URL_SOUND}benar.mp3`,
  WRONG: `${URL_SOUND}touch.mp3`,
};

// AR URLs (MyWebAR)
export const AR_URLS = {
  KUBUS_VOLUME: "https://mywebar.com/p/objek1volumekubus",
  KUBUS_2X2: "https://mywebar.com/p/objek2kubus",
  BALOK_VOLUME: "https://mywebar.com/p/Project_1_w7y625xuc5",
  PRISMA: "https://mywebar.com/p/prismaar",
  LIMAS: "https://mywebar.com/p/limasar",
  KUBUS_JARING: "https://mywebar.com/p/jaringkubus",
  BALOK_JARING: "https://mywebar.com/p/jaringbalok",
  PRISMA_JARING: "https://mywebar.com/p/jaringprisma",
  LIMAS_JARING: "https://mywebar.com/p/jaringlimas",
};

// 3D Model paths
export const MODELS = {
  // Volume models
  KUBUS_WARNA_ANIM: "kubus-warna-2-anim.glb",
  KUBUS_2X2: "kubus2x2.glb",
  BALOK_ANIM: "balok-kubus-satuan.glb",
  PRISMA_ANIM: "prisma-anim.glb",
  LIMAS_ANIM: "limas-anim.glb",
  
  // Jaring-jaring models
  KUBUS_JARING: "kubus-jaring.glb",
  BALOK_JARING: "balok-jaring.glb",
  PRISMA_JARING: "prisma-jaring.glb",
  LIMAS_JARING: "limas-jaring.glb",
  
  // Static models
  KUBUS: "kubus.glb",
  BALOK: "balok.glb",
  PRISMA: "prisma.glb",
  LIMAS: "limas.glb",
};
