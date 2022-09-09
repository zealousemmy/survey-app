import connectDB from "../../../../db/connect";
import UserInfos from "../../../../db/userinfoschema";

export default async function handler(req, res) {
  connectDB().catch((err) => console.log(err.message));

  if (req.method === "GET") {
    try {
      const { user_id, code } = req.query;
      const userFound = await UserInfos.findOne({ _id: user_id });

      if (!userFound) {
        return res.status(200).send({ message: "error validating user" });
      }
      if (userFound.phoneVerificationCode !== Number(code)) {
        return res.status(200).send({ message: "Incorrect Pin" });
      }
      userFound.phoneVerificationCode = undefined;
      await userFound.save();
      return res.status(200).send({ message: "verified" });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}
