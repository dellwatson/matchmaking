import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
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
      // .from("__sale_products")
      // .select(
      //   `
      //     *,
      //     detail: draft_product! product_id (
      //       *,
      //       asset: starex_nft_asset! id ( * ),
      //       chains: __product_chain! product_detail (
      //           *,
      //           network: network! network ( * ),
      //           smart_contract: smart_contract! smart_contract (
      //               *,
      //               network: network! network ( * )
      //           )
      //       ),
      //       payments: payment! product_id (
      //           *,
      //           crypto: crypto! crypto_token (
      //               *,
      //               network: network! network ( * ),
      //               currency: currency! currency ( * )
      //           ),
      //           product_token:  __product_chain! product_chain_token (
      //             *,
      //             network: network! network ( * ),
      //             smart_contract: smart_contract! smart_contract (
      //                 *,
      //                 network: network! network ( * )
      //                 )
      //             )
      //         )
      //     ),
      //     highlight: payment! highlight_price (
      //       *,
      //       crypto: crypto! crypto_token (
      //         *,
      //         currency: currency! currency ( * )
      //       ),
      //       product_token:  __product_chain! product_chain_token (
      //         *,
      //         network: network! network ( * ),
      //         smart_contract: smart_contract! smart_contract (
      //             *,
      //             network: network! network ( * )
      //             )
      //         )
      //     )
      //     `
      // )
      // .from("network")
      // .select(` * `)
      // .eq("name", "Taraxa Testnet")
      // .single();

      // .from("network")
      // .select(
      //   `
      //   *,
      //   smart_contract: smart_contract! network (
      //     *
      //   )

      // `
      // )
      // .eq("chain_id", chainId)
      // .eq("provider_name", provider);

      .from("smart_contract")
      .select(
        ` *, network: network! inner ( * )
      
      `
      )
      .eq("project_id", 1)
      .eq("network.chain_id", 4202)
      .eq("network.provider_name", "evm");

    // //got the product id
    console.log(data);
    // let { data: dataReal, error: errorReal } = await supabase
    //   .from("starex_nft_asset")
    //   .select(`     *    `)
    //   .eq("detail", data?.detail.id)
    //   .single();
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

// chain:
// {
//   id: 4,
//   network: 8,
//   token_id: 1,
//   created_at: '2024-05-06T08:40:15.431624+00:00',
//   description: 'opbnb starship demo',
//   product_detail: 4,
//   smart_contract: {
//     id: 4,
//     address: '0x12e96cef6CdB9DD974152113C2f679086E4d14E0',
//     network: [Object],
//     badge_id: 3,
//     created_at: '2024-05-06T05:28:01.538076+00:00',
//     description: 'opBNB testnet starex- starship'
//   }
// }
