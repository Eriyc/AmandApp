import axios from 'axios';

import {API_URL} from '@env';
import {createClient} from '@supabase/supabase-js';

export const client = axios.create({
  baseURL: API_URL,
});

export const supabase = createClient(
  'https://bfcnbjisdyjpevakqwzs.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmY25iamlzZHlqcGV2YWtxd3pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTMzMTQ3NzcsImV4cCI6MTk2ODg5MDc3N30.RL6UeLeaSTobWTZ9FpUELZKbNtIPn1lmzIz08RXsIBw',
);
