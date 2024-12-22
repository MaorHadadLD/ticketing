import mongoose from 'mongoose';

// An interface that describes the properties
// that are required to create a new User
interface UserAttrs {
    email: String;
    password: String;
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

const User = mongoose.model('User', userSchema);

const buildUser = (attrs: UserAttrs) => {
    return new User(attrs);
};

buildUser({
    email: 'test@test.com',
    password: 'passwprd'
});

export { User };