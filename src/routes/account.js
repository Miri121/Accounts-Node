import account from "../controllers/account";

export default (router) => {
  router.route("/account").post(account.create);
  router.route("/accountGroup").put(account.updateAccountGroup);
  router.route("/accountGroup/:nameGroup").get(account.getAccountOfGroup);
};

