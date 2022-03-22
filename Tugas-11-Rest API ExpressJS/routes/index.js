var express = require('express');
var router = express.Router();
const fspromises = require('fs/promises')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register',(req, res) =>{
  try {
    let {name, role, password} = req.body
    let obj = {name, role, password, isLogin: false}
    let existingData = await fspromises.readFile('dataases.json')
    let realData = JSON.parse(existingData)

    realData.push(obj)
    console.log(realData)
    await fspromises.writeFile('data.json', JSON.stringify(realData))
    res.status(201).json(realData)
  }catch(error){
    return res.status(400).json({ message: 'error', error : error})
  }
})

router.get('/karyawan', async (req, res) => {
  try {
     let readJSON = await fspromises.readFile('data.json');
     let currentData = JSON.parse(readJSON);
     console.log(currentData);
     return res.status(200).send({
      message: "Berhasil get karyawan",
       data: currentData
     });
    } catch (error) {
     return res.status(400).json ({
      message: "error",
       error: error
     });
    }
 })
module.exports = router;
