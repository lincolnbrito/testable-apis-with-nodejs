import mongoose from 'mongoose';

const mongodbUrl = process.env.MOGODB_URL || 'mongodb://db/test';

const connect = () => mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const close = () => mongoose.connection.close();

export default {
    connect,
    close
}