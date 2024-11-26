const mongoose = require('mongoose');

// Define the SubCategory schema
const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        //mongoose的一种语法，如果不符合就会返回一个err
        required: [true, 'Name is required'], 
        trim: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        //将Id与Modle : Category绑定,其已经成为一个引用 ,在populate时候会填充，比如
        //{name:'a',categoryId:'30'}会变为 
        // {
        // name: 'a', 
        //     {
        //     name: { type: String, required: true }, image: { type: String, required: true }'}
        //     ref: 'Category',
        //     required: [true, 'Category ID is required']
        //     }
        // }

        ref: 'Category',
        required: [true, 'Category ID is required']
    }
},{ timestamps: true });

// Create the SubCategory model
const SubCategory = mongoose.model('SubCategory', subCategorySchema);

module.exports = SubCategory;

