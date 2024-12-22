import mongoose from 'mongoose';

// An interface that describes the properties
// that are required to create a new User
interface UserAttrs {
    email: String;
    password: String;
}

// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}

//An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
    createAt: string;
    updateAt: string;
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

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);


export { User };