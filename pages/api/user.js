import connectDB from "../../db/connect";
import UserInfos from "../../db/userinfoschema";

export default async function handler(req, res) {
  connectDB().catch((err) => console.log(err.message));

  if (req.method === "POST") {
    try {
      const { email, phone, name } = req.body;
      const isFound = await UserInfos.findOne({
        $or: [{ email: email }, { phone: phone }],
      });

      if (isFound) {
        return res
          .status(200)
          .send({ message: "Email or Phone already exist" });
      }

      if (email === "" || phone === "" || name === "") {
        return res
          .status(200)
          .send({ message: "required field is missing a vlaue" });
      }
      const user = await UserInfos.create({ email, phone, name });
      res.status(200).send({ user, message: "successful" });
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: err.message });
    }
  }

  if (req.method === "PUT") {
    try {
      await UserInfos.findOneAndUpdate(req.body);
      res.status(200).send({ message: "successful" });
    } catch (err) {
      res.status(500).send({ msg: err.message });
    }
  }
}
