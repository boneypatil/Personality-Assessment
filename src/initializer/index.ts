import mongoose from 'mongoose';

export default (config: any) => {
  return new Promise((resolve, reject) => {
    mongoose.connect(
      `${config.mongoDbUrl}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      (err) => {
        if (err) return reject(err);
        mongoose.set('debug', config.mongooseDebug);
        return resolve();
      }
    );
  });

};
