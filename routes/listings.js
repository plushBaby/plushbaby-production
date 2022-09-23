import express from "express";

import {
  fetchAllListings,
  createAListing,
  updateListing,
  fetchOneListing,
  deleteListing,
  commentListing,
} from "../controllers/listings.js";

const router = express.Router();
import userAUTH from "../middleware/AUTH.js";

router.get("/", fetchAllListings);
router.get("/:id", fetchOneListing);
router.post("/", userAUTH, createAListing);
router.patch("/:id", userAUTH, updateListing);
router.delete("/:id", userAUTH, deleteListing);
router.post('/:id/commentListing', commentListing);

export default router;
