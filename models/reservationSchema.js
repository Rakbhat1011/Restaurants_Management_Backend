import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First Name must conatin atleast 3 letters"],
        maxLength: [30, "First Name cannot exceed 30 letters"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last Name must conatin atleast 3 letters"],
        maxLength: [30, "Last Name cannot exceed 30 letters"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide valid email-Id"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone Number must conatin 10 digits"],
        maxLength: [10, "Phone Number must contain 10 digits"],

    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },

});

export const Reservation = mongoose.model("Reservation", reservationSchema);