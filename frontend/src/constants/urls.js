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
  // Volume
  KUBUS_VOLUME: "https://mywebar.com/p/objek1volumekubus",
  KUBUS_2X2: "https://mywebar.com/p/objek2kubus",
  PRISMA_JENIS: "https://mywebar.com/p/objek3jenisjenisprisma",
  LIMAS_JENIS: "https://mywebar.com/p/objek4jenisjenislimas",
  LIMAS_VOLUME: "https://mywebar.com/p/objek5volumelimas",
  
  // Luas Permukaan (Jaring-jaring)
  KUBUS_JARING: "https://mywebar.com/p/objek6jaringjaringkubus",
  BALOK_JARING: "https://mywebar.com/p/objek7jaringjaringbalok",
  PRISMA_JARING: "https://mywebar.com/p/objek8jaringjaringprisma",
  LIMAS_JARING: "https://mywebar.com/p/objek9jaringjaring limas",
};

// 3D Model paths - VERIFIED working models from Supabase
export const MODELS = {
  // Volume Kubus (verified HTTP 200)
  KUBUS_WARNA_ANIM: "kubus-warna-2-anim.glb",
  KUBUS_2X2: "kubus2x2.glb",
  
  // Volume Prisma (verified HTTP 200)
  PRISMA_SEGITIGA: "prisma-segitiga.glb",
  PRISMA_SEGILIMA: "prisma-segilima.glb",
  PRISMA_SEGIENAM: "prisma-segienam.glb",
  
  // Volume Limas (verified HTTP 200)
  LIMAS_SEGITIGA: "limas-segitiga.glb",
  LIMAS_SEGIEMPAT: "limas-segiempat.glb",
  LIMAS_SEGILIMA: "limas-segilima.glb",
  LIMAS_SEGIENAM: "limas-segienam.glb",
  LIMAS_VOLUME_SCENE: "volume-limas-scene.glb",
  
  // Jaring-jaring Kubus (verified HTTP 200)
  JARING_KUBUS_1: "animasi-jaring-kubus-1.glb",
  JARING_KUBUS_2: "animasi-jaring-kubus-2.glb",
  JARING_KUBUS_3: "animasi-jaring-kubus-3.glb",
  JARING_KUBUS_4: "animasi-jaring-kubus-4.glb",
  
  // Jaring-jaring Balok (verified HTTP 200)
  JARING_BALOK_1: "animasi-jaring-balok-1.glb",
  JARING_BALOK_2: "animasi-jaring-balok-2.glb",
  
  // Jaring-jaring Prisma & Limas (verified HTTP 200)
  JARING_PRISMA: "animasi-jaring-prisma.glb",
  JARING_LIMAS: "animasi-jaring-limas.glb",
};

// Model arrays for StaticViewer component
export const MODEL_ARRAYS = {
  PRISMA_TYPES: [
    MODELS.PRISMA_SEGITIGA,
    MODELS.PRISMA_SEGILIMA,
    MODELS.PRISMA_SEGIENAM,
  ],
  LIMAS_TYPES: [
    MODELS.LIMAS_SEGITIGA,
    MODELS.LIMAS_SEGIEMPAT,
    MODELS.LIMAS_SEGILIMA,
    MODELS.LIMAS_SEGIENAM,
  ],
  JARING_KUBUS: [
    MODELS.JARING_KUBUS_1,
    MODELS.JARING_KUBUS_2,
    MODELS.JARING_KUBUS_3,
    MODELS.JARING_KUBUS_4,
  ],
  JARING_BALOK: [
    MODELS.JARING_BALOK_1,
    MODELS.JARING_BALOK_2,
  ],
};
