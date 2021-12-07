import db from "../services/db";
import redis from "../services/redis";

export default {
  getMessages: async (req, res) => {
    const { groupId } = req.params;
    console.log(`getMessages for group ${groupId}`);
    const messages = await db.getMessagesByGroup(groupId);
    res.status(200).json(messages);
  },
};
