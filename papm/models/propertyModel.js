import { model, models, Schema } from "mongoose";

const propertySchema = new Schema(
  {
    fullAddress: {
      type: String,
      unique: true,
    },
    
    lat: {
      type: Number,
      required: true,
    },

    lng: {
      type: Number,
      required: true,
    },

    NumSleepingRoom: {
      type: Number,
    },

    NumKitchen: {
      type: Number,
    },

    NumLivingRoom: {
      type: Number,
    },

    NumBathroom: {
      type: Number,
    },

    NumToilet: {
      type: Number,
    },

    Outdoor: {
      type: String,
    },

    SwimmingPool: {
      type: String,
    },

    userId: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    imgUrl: {
      type: String,
      required: true,
    },

    numberGuest: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Property = models.Property || model("Property", propertySchema);

export default Property;
