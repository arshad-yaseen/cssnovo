import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://zsuonwmjoqclnvoggsfu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzdW9ud21qb3FjbG52b2dnc2Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk0NzA1NjQsImV4cCI6MTk5NTA0NjU2NH0.Cr7RfzX8YUgEzEiBXF79_Yi-a-wj4vCEmsaGAM_e01E"
);
