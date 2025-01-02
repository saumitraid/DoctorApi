const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv').config();
const cors=require('cors');

mongoose.connect(process.env.DATABASE_URL)
.then(
    ()=>console.log('Connected with MongoDB'))
    .catch(
        err=>console.log("MongoDB connection Error",err)
    )
const doc=require('./router/docRouter');
const authRoutes=require('./router/auth');

const app=express();
app.use(express.json());
app.use(cors());
app.use('/api/doc', doc);
app.use('/api/auth', authRoutes);

app.listen(3500, () => {
    console.log(`Server Started at ${3500}`)
});