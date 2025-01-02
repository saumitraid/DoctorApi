const mongoose=require('mongoose');
const bcrypt = require('bcryptjs');

const dataSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    mobile:{
        type:Number,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    role:{
        type:String,
        enum:['user','admin'], default:'user'
    }
    
},
{
    collection:'patient'
});

dataSchema.methods.comparePassword=async function(plainPassword){
    return bcrypt.compare(plainPassword, this.password);
}

dataSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password= await bcrypt.hash(this.password,10);
    }
    next();
});

module.exports=mongoose.model('DataPat', dataSchema);