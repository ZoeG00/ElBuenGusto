import { Router } from "express";
import {
  verificateAdminRole,
  verificateSuperAdminRole,
} from "../auth/authMiddlewares.js";

import {
  getUsers,
  getUserDetails,
  changeUserRole,
  retrieveUser,
  banUser,
  getSales,
} from "../controllers/adminControllers.js";

const adminRoutes = Router();

adminRoutes.route("/users").get(verificateAdminRole, getUsers);

adminRoutes
  .route("/user/:userid")
  .get(verificateAdminRole, getUserDetails)
  .put(verificateSuperAdminRole, changeUserRole)
  .patch(verificateAdminRole, retrieveUser)
  .delete(verificateAdminRole, banUser);

adminRoutes.route("/sales").get(verificateAdminRole, getSales);

export default adminRoutes;
