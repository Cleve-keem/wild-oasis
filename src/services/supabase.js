import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kcgnwitbdmhacxmtlluv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjZ253aXRiZG1oYWN4bXRsbHV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzNjE2MzIsImV4cCI6MjA2MTkzNzYzMn0.TD3U4IbNPhv1Gv3PLwk_8-oa909yun0FaSTpU3PgGwY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
