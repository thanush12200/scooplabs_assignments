const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(express.json());

// MongoDB connection
async function connectDB() {
    try {
        await mongoose.connect(
            'mongodb+srv://thanush:thanush2004@scooplabs.ns437im.mongodb.net/schoolDB?retryWrites=true&w=majority&appName=scooplabs'
        );
        console.log("Connected to MongoDB Atlas");
    } catch (error) {
        console.log("MongoDB connection error:", error);
    }
}
connectDB();

// Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Student = mongoose.model('Student', studentSchema);

// Routes
app.post('/api/students', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.json({ message: 'Student added', student });
    } catch (error) {
        res.json({ message: 'Error adding student', error });
    }
});

app.get('/api/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.json({ message: 'Error fetching students', error });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});