import React from 'react'

// Initialize the JS client
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
const { data: todos, error } = await supabase.from('test').select('*')
console.log(data);

export default function test() {
  return (
    <div>test</div>
  )
}
