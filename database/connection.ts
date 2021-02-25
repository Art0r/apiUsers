import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/mongoosedb', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
});

export default mongoose;