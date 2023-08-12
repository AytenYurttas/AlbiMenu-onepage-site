const express = require('express')
const dotenv = require('dotenv')

const app= express();
const port= 3000


//ejs template engine
app.set('view engine','ejs')


//static files middle
app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.render('index',{
      title:'Albi Menü',
      description:'Dijital menü hizmetleri'
    });
})



// Sunucuyu dinlemeye başlayalım
app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı port üzerinde çalışıyor...`);
});


