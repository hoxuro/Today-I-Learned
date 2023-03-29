import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nrmopptpnzdaorlspuix.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ybW9wcHRwbnpkYW9ybHNwdWl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5NDU3MzQsImV4cCI6MTk5NTUyMTczNH0.0HGMSiwq41UkmYz0ZFk6JA-aOmBF6rmUCDv1BgCQUnA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
