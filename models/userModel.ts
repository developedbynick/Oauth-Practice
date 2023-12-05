import mongoose from 'mongoose';
import validator from 'validator';
import User from './types/user';

const userSchema = new mongoose.Schema<User>({
    name: {
        first: {
            type: String,
            required: [true, "A user must have a first name"],
            min: [3, "A user's first name must be at least 3 characters"],
            max: [50, "A user's first name cannot exceed 50 characters"],
            trim: true,
        },
        last: {
            type: String,
            requried: [true, "A user must have a last name"],
            min: [3, "A user's last name must be at least 3 characters"],
            max: [50, "A user's last name cannot exceed 50 characters"],
            trim: true,
        }
    },
    email: {
        type: String,
        required: [true, "A user musut have an email address"],
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: (val: string) => {
                console.log(val);
                return validator.isEmail(val);
            },
            message: "{VALUE} is not a valid email"
        }
    },
    accountType: {
        type: String,
        enum: {
            values: ['traditional', 'email-only', 'oauth'],
            message: "{VALUE} is not a valid account type"
        },
    },
    password: {
        type: String,
        min: [8, "A user's password must have at least 8 characters"],
        max: [64, "A user's password must have no more than 64 characters"],
        required: [function () {
            if (this.accountType === 'traditional') return true;
            return false;
        }, "A user must have a password"]
    },
    pastPasswords: {
        type: [String],
        default: [],
    }
})

const User = mongoose.model('User', userSchema);
export default User;

