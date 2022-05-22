//  to controll ur website

const express = require("express");
const app = express();
 


const Article = require("./models/articleSchema");


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


 
 





// mongoose
const mongoose = require("mongoose");


mongoose.
  connect("mongodb+srv://comptook5:aaaaaaaa@cluster0.mahp0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  .then((result) => {
    app.listen(process.env.PORT  || 3003,  () => {
      console.log("Example app listening at http://localhost:3003");
    });
  })

  .catch((err) => {
    console.log(err);
  });

  app.delete("/nn/:z",(req,res) => {
    
    Article.findByIdAndDelete(req.params.z)

        .then(console.log('yes !'))

        .then((params) => {
            res.json({ mylink: "/" });
        })

        .catch((err) => {
            console.log(err);
        });
});




// all paths 
// const allRoutes = require("./routes/all-a");
// app.use("/",allRoutes);



app.get("/", (req, res) => {   res.redirect("/a")  });
// res.render('index.ejs', { mytitle: 'index' }) })

app.get("/a",(req, res) => {
  Article.find()
      .then((result) => {
          res.render('a.ejs', { mytitle: 'A', array: result });
      }).catch((err) => { console.log(err) });
})

app.post("/a",(req, res) => {
  const article = new Article(req.body);

  console.log(req.body);

  article
      .save()
      .then(result => {
          res.redirect("/");
      })
      .catch(err => {
          console.log(err);
      });
});


app.get("/nn/:id", (req, res) => {
//    //to avoid :id problems 
//      const id = mongoose.Types.ObjectId(req.params.id);
 
  Article.findById(req.params.id)
    .then((result) => {
      res.render("details", { mytitle: "ARTICLE DETAILS", object: result });
    })
    .catch((err) => {
      console.log(err); 
    });
}); 

