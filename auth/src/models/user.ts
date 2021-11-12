import monguoose from 'mongoose';

interface UserAttrs {
    email: string;
    password: string;
}

interface UserModel extends monguoose.Model<any> {
    build(attrs: UserAttrs): any;
}

const userSchema = new monguoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
}

const User = monguoose.model<any, UserModel>('User', userSchema);

export { User };