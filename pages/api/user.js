import connectDB from "../../db/connect";
import UserInfos from "../../db/userinfoschema";

export default async function handler(req, res) {
  connectDB().catch((err) => console.log(err.message));

  if (req.method === "POST") {
    try {
      const { email, phone } = req.body;
      const emaildata = await UserInfos.findOne({ email: email });
      const phonedata = await UserInfos.findOne({ phone: phone });
      if (emaildata)
        return res.status.send({ message: "email already existing" });
      if (phonedata)
        return res.status.send({ message: "phone no: already existin" });
      const user = await UserInfos.create(req.body);
      res.status(200).send({ message: "successful" });
    } catch (err) {
      res.status(500).send({ msg: err.message });
    }
  }
}
