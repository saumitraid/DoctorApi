const mongoose=require('mongoose');

const dataSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    mobile:{
        type:Number,
        require:true
    },
    degree:{
        type:String,
        require:true
    },
    special:{
        type:String,
        require:true
    },
    about:{
        type:String,
        require:true
    },
    yoe:{
        type:Number,
        require:true
    }
},
{
    collection:'doctor'
});

module.exports=mongoose.model('Data', dataSchema);