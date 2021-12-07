import group from "../controllers/group";

export default (router) => {
  router.route("/group").post(group.create);
};
