import mongoose from "mongoose";

const orderShema = new mongoose.Schema({
  userId: { type: String, required: true, ref: "user" },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
      },
      quantity: { type: Number, required: true },
    },
  ],
  amount: { type: Number, required: true },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Address",
  },
  status: { type: String, required: true, default: "Pending" },
  date: { type: Number, required: true },
});

const Order = mongoose.models.order || mongoose.model("order", orderShema);

export default Order;
