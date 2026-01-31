import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    mongoose.connection.on('connected', () => console.log('Data connected'));
    await mongoose.connect(`${process.env.MONGO_URI}pingup`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDb;
