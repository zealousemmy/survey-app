import connectDB from "../../db/connect";
import Surveyinfos from "../../db/surveySchema";

export default async function handler(req, res) {
  connectDB().catch((err) => console.log(err.message));

  if (req.method === "POST") {
    try {
      console.log(req.body, "from server side");
      await Surveyinfos.create(req.body);
      res.status(200).send({ message: "successful" });
    } catch (err) {
      res.status(500).send({ msg: err.message });
    }
  }
}
