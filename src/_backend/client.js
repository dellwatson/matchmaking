import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://anuievfybpmxudmplmqy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFudWlldmZ5YnBteHVkbXBsbXF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2NDAyMDUsImV4cCI6MjAyNzIxNjIwNX0.VsmTmxN7N8GdsYz91UASJGA5Sj_UhFEKjw67USIcMSA",
  {
    // schema: "starex",
    // db: { schema: "starex" },
  }
);

// async function loadData() {
//   try {
//     let { data, error } = await supabase.from("starex_nft_asset").select(
//       `
//     id,
//     detail ( * ),
//     components:__required_components!final_id (
//       material: material_id ( * )
//     ),
//     tags: __nftasset_tag!nft_asset_id ( tag_id (*))
//     `
//     );

//     console.log(data, data?.length, "network", error);
//     // console.log(data[1]?.tags, "network", error);
//   } catch (errorx) {
//     console.log(errorx, "error trycantc");
//   }
// }

// async function loadData() {
//   try {
//     let { data, error } = await supabase
//       .rpc(
//         "get_assets_by_tag",
//         {
//           tag_title: "zone",
//         }
//         // { count: "exact", head: false }
//       )
//       .select(`*, detail ( * )`);
//     console.log(data, error);
//   } catch (errorx) {
//     console.log(errorx, "error trycantc");
//   }
// }

async function loadData() {
  // load material by id
  try {
    let { data, error } = await supabase
      .from("__required_components")
      .select(
        `
      *,
    detail: starex_nft_asset!final_id (id, detail ( * ))
    `
      )
      .eq("material_id", 1); // Adding filter for material_id

    console.log(data, error);
  } catch (errorx) {
    console.log(errorx, "error trycantc");
  }
}

loadData();

// load the asset_nft by detail.text
// get asset_nft.id
// use the id as material.id
// query __require_components with match material.id
// get lists of rows from require_components
// use that rows to load starex_nft_assets?
