const ourApp = require("../models/modelSchema"); 
 
exports.create = async (req, res) => { 
    const post=new ourApp( 
        { 
           name:req.body.name, 
           type:req.body.type, 
           desc:req.body.desc 
        } 
    ) 
            const point1 = await post.save() 
 
        if(!point1) return res.status(404).send('not found') 
        res.send(point1) 
    } 
 
 
    exports.getAll = async (req, res) => { 
        try { 
     
          let data = await ourApp.find({}) 
          res.status(200).json({ success: true, data:data }); 
           
        } catch (error) { 
          console.log(error) 
          res.status(500).json({ success: false, error: error }); 
        } 
      } 
 
 
      exports.getone = async (req, res) => { 
        try { 
     
          let nn = await ourApp.findById(req.params.id) 
          res.json(nn) 
           
        } catch (error) { 
          console.log(error) 
          res.status(500).json({ success: false, error: error }); 
        } 
      } 
 
      exports.updatedata=async (req, res)=> { 
        const category = await ourApp.findByIdAndUpdate( 
            req.params.id, 
            { 
                name: req.body.name, 
                type: req.body.type , 
                desc: req.body.desc, 
            } 
        ) 
     
        if(!category) 
        return res.status(400).send('the category cannot be created!') 
     
        res.send(category); 
    } 
 
    exports.delete = async (req, res)=>{ 
        ourApp.findByIdAndRemove(req.params.id).then(ourApp =>{ 
            if(ourApp) { 
                return res.status(200).json({success: true, message: 'the product is deleted!'}) 
            } else { 
                return res.status(404).json({success: false , message: "product not found!"}) 
            } 
        }).catch(err=>{ 
           return res.status(500).json({success: false, error: err})  
        }) 
    }