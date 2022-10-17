import { model, models, Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      max: 128,
    },

    lastname: {
      type: String,
      required: true,
      max: 128,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      max: 128,
    },

    password: {
      type: String,
      required: true,
      max: 128,
    },

    role: {
      type: String,
      default: "user",
    },
    properties: [{ type: Schema.Types.ObjectId, ref: "Property" }],
  },
  { timestamps: true }
);

const User = models.User || model("User", userSchema);

export default User;
