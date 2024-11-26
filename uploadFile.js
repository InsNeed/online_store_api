const multer = require('multer');
const path = require('path');

const storageCategory = multer.diskStorage({
  destination: function (req, file, cb) {
    //第一个参数为错误对象，通常为null，在有错误时指定
    //能够根据每次上传的文件情况灵活选择路径
    //   destination: function(req, file, cb) {
    //   if (file.mimetype === 'image/png') {
    //     cb(null, './public/images');
    //   } else if (file.mimetype === 'application/pdf') {
    //     cb(null, './public/docs');
    //   } else {
    //     cb(null, './public/others');
    //   }
    // }

    //真正保存路径的是cb
    cb(null, './public/category');
  },

  filename: function(req, file, cb) {
    const filetypes = /jpeg|jpg|png/;
    //filetypes.test 测定是否符合正则表达式对象
    //.extname得到.jpg等后缀
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    //随机名
    if (extname) {
      cb(null, Date.now() + "_" + Math.floor(Math.random() * 1000) + path.extname(file.originalname));
    } else {
      //这就是cb接受的第一个参数，他会返回给uploadCategory.single('img')...那，给其报错信息
      cb("Error: only .jpeg, .jpg, .png files are allowed!");
    }
  }
});
//设置和管理文件的相关配置,这是一个由multer返回的中间件函数
const uploadCategory = multer({
  storage: storageCategory,
  limits: {
    fileSize: 1024 * 1024 * 5 // limit filesize to 5MB
  },
});

const storageProduct = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/products');
  },
  filename: function(req, file, cb) {
    // Check file type based on its extension
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (extname) {
      cb(null, Date.now() + "_" + file.originalname);
    } else {
      cb("Error: only .jpeg, .jpg, .png files are allowed!");
    }
  }
});

const uploadProduct = multer({
  storage: storageProduct,
  limits: {
    fileSize: 1024 * 1024 * 5 // limit filesize to 5MB
  },
});


const storagePoster = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/posters');
  },
  filename: function(req, file, cb) {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (extname) {
      cb(null, Date.now() + "_" + file.originalname);
    } else {
      cb("Error: only .jpeg, .jpg, .png files are allowed!");
    }
  }
});

const uploadPosters = multer({
  storage: storagePoster,
  limits: {
    fileSize: 1024 * 1024 * 5 // limit filesize to 5MB
  },
});

module.exports = {
    uploadCategory,
    uploadProduct,
    uploadPosters,
};
