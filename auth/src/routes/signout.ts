import express from "express";

const router = express.Router();

router.post("/api/users/signout", (req, res) => {
  if (req.session) {
    req.session = null
  }
  res.send("Hi there! signOut");
});

export { router as signoutRouter };
