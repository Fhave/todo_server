const express = require ("express");
const dotenv = require ("dotenv");
const mongoose = require ("mongoose");
const cors = require ("cors");
const todosRoutes = require ("./routes/todos.js")

const app = express();
dotenv.config();

app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));

app.use(cors());

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.mongodb,
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }
);

app.use('/todos', todosRoutes);

app.get('/', (req,res) => {
  res.send('Trial')
})


app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});

// Export the Express API
module.exports = app;