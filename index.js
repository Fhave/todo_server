const express = require ("express");
const dotenv = require ("dotenv");
const mongoose = require ("mongoose");
const cors = require ("cors");

const app = express();
dotenv.config();

app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));

app.use(cors());

const mongodb = "mongodb+srv://test:test1234@cluster1.wvnchbt.mongodb.net/mern_todo_db?retryWrites=true&w=majority";


const PORT = process.env.PORT || 3000;
mongoose.connect(mongodb,
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }
);

app.get('/', (req,res) => {
  res.send('Trial')
})


app.listen(port, function() {
  console.log(`Listening on port ${PORT}`);
});