import db from "../services/db";

export default {
  create: async (req, res) => {
    console.log("create group", req.body);
    const group = await db.createGroup(req.body);
    res.status(200).json(group);
  },
};
