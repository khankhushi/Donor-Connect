const express = require("express"); 
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
// Config
dotenv.config()

//mongodb connection
connectDB();


//Creating rest object by whose help we can create the server
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/v1/test', require('./routes/testRoutes'));
app.use("/api/v1/auth", require("./routes/authRoutes"));


//port
const PORT = process.env.PORT || 8080;

//LISTEN function
    app.listen(PORT, () => {
        console.log(
          `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
      .bgBlue.white
        );
      });
 