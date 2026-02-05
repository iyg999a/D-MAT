const express = require('express');

const router = express.Router();

// We'll pass the supabase client from app.js or import it here
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Admin Dashboard - List all students
router.get('/dashboard', async (req, res) => {
    const { data: students, error } = await supabase.from('students').select('*');
    res.render('admin/dashboard', { students });
});

// Route to handle adding a new student
router.post('/add-student', async (req, res) => {
    const { roll_number, name, room_number, mess_fee } = req.body;
    const { error } = await supabase
        .from('students')
        .insert([{ roll_number, name, room_number, mess_fee }]);
    
    if (error) {
        console.error(error);
        return res.send("Error adding student. Make sure Roll Number is unique.");
    }
    res.redirect('/admin/dashboard');
});

module.exports = router;