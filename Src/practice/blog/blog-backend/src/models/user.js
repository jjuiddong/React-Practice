import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
//import Post from './post';


const UserSchema = new Schema({
    username: String,
    hashedPasword: String,
});

UserSchema.methods.setPassword = async function(password) {
    const hash = await bcrypt.hash(password, 10);
    this.hashedPasword = hash;
}

UserSchema.methods.checkPassword = async function(password) {
    const result = await bcrypt.compare(password, this.hashedPasword);
    return result;
}

UserSchema.statics.findByUsername = function(username) {
    return this.findOne({username});
}

UserSchema.methods.serialize = function() {
    const data = this.toJSON();
    delete data.hashedPasword;
    return data;
}

UserSchema.methods.generateToken = function() {
    const token = jwt.sign(
        {
            _id: this.id,
            username: this.username,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '7d',
        },
    );
    return token;
}

const User = mongoose.model('User', UserSchema);
export default User;
