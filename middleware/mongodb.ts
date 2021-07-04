
import { connect, ConnectionOptions } from "mongoose"
const {
    // Attempts to connect to MongoDB and then tries to connect locally:)
    MONGO_URI = "mongodb+srv://toilahuong:admADM1996@cluster0.mh5sl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
} = process.env

console.log(MONGO_URI)

const options: ConnectionOptions = {
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
}

export const connectToDatabase = () => connect(MONGO_URI, options)