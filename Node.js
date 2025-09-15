const express = require('express');
const mongoose = require('mongoose');

const Customer = require('./models/customer');
const app = express();

app.use(express.json());

const PORT = 3000;

app.listen(PORT,() =>{
    console.log("app is running in port:",PORT);
})


async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://thanush:thanush2004@scooplabs.ns437im.mongodb.net/?retryWrites=true&w=majority&appName=scooplabs');
        console.log("connected mongo db");
    } catch (error) {
        console.log("there is some error",error);
    }
}

connectDB();


app.post('/api/orders', async (req,res) =>{
    try {
        const newCustomer = new Customer(req.body);
        const savedCustomer = await newCustomer.save();
        res.status(201).json({
            success: true,
            message: "customer created successfully!",
            data: savedCustomer,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "error creating student",
            error: error.message,
        });
    }
});

app.get('/api/orders', async (req, res) => {
    try {
    const allCustomers = await Customer.find();
    res.status(200).json({
        success: true,
        message: "getting all customers data",
        students: allCustomers,
    });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "error finding all data",
            error: error.message,
        });
    }
});

app.get('/api/orders/:id', async (req,res)=>{
    try {
        const id = req.params.id;
        const customerid = await Customer.findById(id);
    res.status(200).json({
        success: true,
        message: "getting customer data by id",
        student: customerid,
    });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "error finding customer data by id",
            error: error.message
        });
    }
});

app.put('/api/orders/:id', async (req,res)=>{
    try {
        const updatedcustomer = await Customer.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true
            }
        );
        if (!updatedcustomer) {
            return res.status(404).json({
                success: false,
                message: 'customer not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'customer found successfully',
            data: updatedcustomer
        })
        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "error finding customer data",
            error: error.message
        });
    }
})

