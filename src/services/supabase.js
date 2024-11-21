import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://frbdwofofrdyqdkdsazb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyYmR3b2ZvZnJkeXFka2RzYXpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5NTgyODAsImV4cCI6MjA0NzUzNDI4MH0.7Pm6ij_nUpfmykRY03OiYPT61ADvDQOu8ouqYhhPIkU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
