const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');

// 1. Add this line here just to be safe
require('dotenv').config(); 

// 2. Double-check your .env file variable names match these exactly
const supabase = createClient(
    process.env.SUPABASE_URL, 
    process.env.SUPABASE_KEY
);


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//fetching students data
app.get('/', async (req, res) => {
  const { data, error } = await supabase.from('students').select('*');
  if (error) return res.send("Error connecting to Supabase");
  res.send(`D-MAT is connected! Found ${data.length} students in DB.`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`D-MAT running on http://localhost:${PORT}`);
});