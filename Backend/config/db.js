import mongoose from "mongoose";

export const connectdb = async () => {
    await mongoose.connect('mongodb+srv://vamsi:vamsi@food-delivery.zb2iupc.mongodb.net/Food-Delivery?retryWrites=true&w=majority')
        .then(() => console.log('Database connected successfully'))
        .catch((err) => console.log('Error:', err));
};
