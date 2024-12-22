import mongoose from 'mongoose';

// An interface that describes the properties
// that are required to create a new User
interface UserAttrs {
    email: String;
    password: String;
}

// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<any> {
    build(attrs: UserAttrs): any;
}



const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    oassword: {
        type: String,
        required: true
    }
});

const User = mongoose.model<any, UserModel>('User', userSchema);


export { User };