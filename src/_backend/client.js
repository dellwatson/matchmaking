import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://anuievfybpmxudmplmqy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFudWlldmZ5YnBteHVkbXBsbXF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2NDAyMDUsImV4cCI6MjAyNzIxNjIwNX0.VsmTmxN7N8GdsYz91UASJGA5Sj_UhFEKjw67USIcMSA"
);

async function loadData() {
  try {
    // let { data, error } = await supabase.from("network").select("*");

    // let { data, error } = await supabase.from("network").select("name");

    // let { data, error } = await supabase.from("network_provider").select("*");

    // let { data, error } = await supabase.from("network").select("name");

    //     let { data, error } = await supabase.from("network").select(`
    //   provider,
    //   network_provider (
    //     foreign_key
    //   )
    // `);

    let { data, error } = await supabase.from("network").select(`
      *,
      network_provider (
        *
      ),
      testo (
        *
      )
    `);

    // let { data, error } = await supabase.from("crypto").select(`
    //   *,
    //   network!public_network_fkey (
    //     *
    //   ),
    //   currency!public_currency_fkey (
    //     *
    //   )
    // `);

    //     let { data, error } = await supabase.from("crypto").select(`
    //   *,
    //   network (
    //     *
    //   ),
    //   currency (
    //     *
    //   )
    // `);

    //     let { data, error } = await supabase.from("crypto").select(`
    //   *,
    //   network!inner (
    //     *,
    //     network_provider!public_network_provider_fkey(
    //       *
    //     )
    //   ),
    //   currency (
    //     *
    //   )
    // `);

    console.log(data, "network", error);
  } catch (errorx) {
    console.log(errorx, "error trycantc");
  }
}
loadData();
