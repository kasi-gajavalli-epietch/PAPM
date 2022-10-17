import Property from "../../../models/propertyModel";
import connectMongo from "../../../utils/connectMongo";
import authenticated from "../../../utils/authenticated";

export default authenticated(async function properties({ method, body }, res) {
  if (method === "GET") {
    try {
      await connectMongo();
      const properties = await Property.find();
      res.json({ properties, message: "getAllProperties" });
    } catch (err) {
      console.log(err);
      res.json({ err });
    }
  }
  if (method === "POST") {
    try {
      await connectMongo();
      const property = await Property.create(body);
      res.json({ property, message: "addProperty" });
    } catch (err) {
      console.log(err);
      res.json({ err });
    }
  }
});
