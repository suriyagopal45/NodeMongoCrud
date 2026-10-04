import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Home');
});

router.get('/1',(req,res)=>{
    res.status(200).send('Home 1');
});


router.get('/api',(req,res)=>{
    res.status(200).send('Home to API');
});

export default router;
