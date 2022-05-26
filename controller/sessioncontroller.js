const session = require("../models/seesionSchema"); 
 
exports.create = async (req, res) => { 
    const post=new session( 
        { 
           name:req.body.name, 
           timesession:req.body.timesession, 
           couch:req.body.couch 
        } 
    ) 
            const point1 = await post.save() 
 
        if(!point1) return res.status(404).send('not found') 
        res.send(point1) 
    } 
 
 
    exports.getAll = async (req, res) => { 
        try { 
     
          let data = await session.find({}) 
          res.status(200).json({ success: true, data:data }); 
           
        } catch (error) { 
          console.log(error) 
          res.status(500).json({ success: false, error: error }); 
        } 
      } 
 
 
      exports.getone = async (req, res) => { 
        try { 
     
          let nn = await session.findById(req.params.id) 
          res.json(nn) 
           
        } catch (error) { 
          console.log(error) 
          res.status(500).json({ success: false, error: error }); 
        } 
      } 
 
      exports.updatedata=async (req, res)=> { 
        const category = await session.findByIdAndUpdate( 
            req.params.id, 
            { 
              name:req.body.name, 
              timesession:req.body.timesession, 
              couch:req.body.couch 
            } 
        ) 
     
        if(!category) 
        return res.status(400).send('the category cannot be created!') 
     
        res.send(category); 
    } 
 
    exports.delete = async (req, res)=>{ 
        session.findByIdAndRemove(req.params.id).then(session =>{ 
            if(session) { 
                return res.status(200).json({success: true, message: 'the product is deleted!'}) 
            } else { 
                return res.status(404).json({success: false , message: "product not found!"}) 
            } 
        }).catch(err=>{ 
           return res.status(500).json({success: false, error: err})  
        }) 
    }