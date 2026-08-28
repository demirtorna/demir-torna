import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aupuuovakgvivgchryri.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1cHV1b3Zha2d2aXZnY2hyeXJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUyNzkxMjgsImV4cCI6MjEwMDg1NTEyOH0.A-jhyOif0FGQibAS63N_tBZ6kqVjUq8JkA0-J6XQ8jE";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);