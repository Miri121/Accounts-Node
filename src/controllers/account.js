import db from "../services/db";

export default {
  create: async (req, res) => {
    console.log("create account", req.body);
    const account = await db.createAccount(req.body);
    res.status(200).json(account);
  },

  //////////1
  updateAccountGroup: async (req, res) => {
    try {
      console.log("add accountGroup", req.body);
      const accountG = await db.addAccountToGroup(req.body);
      res.status(200).json(accountG);
    } catch (error) {
      res.status(400).json(error);

    }
  },

  /////////2
  getAccountOfGroup: async (req, res) => {
    try {
      const { nameGroup } = req.params;
      console.log(`get getAccountOfGr ${nameGroup}`);
      const accounts = await db.getAccountOfGr(nameGroup);
      res.status(200).json(accounts);
    }
    catch (error) {
      res.status(400).json(error);
    }
  },
};





