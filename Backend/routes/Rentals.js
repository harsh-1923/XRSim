const express = require("express");
const rentalRouter = express.Router();
const Rentals = require("../Models/Rentals");

rentalRouter.post("/create", (req, res) => {
  // console.log(req);
  const { name, email, contact } = req.body;
  const newRentalRequest = new Rentals({ name, email, contact });
  newRentalRequest.save((err) => {
    if (err)
      res.status(500).json({
        message: { msgBody: "Error has occured", msgError: true },
      });
    else {
      res
        .status(201)
        .json({
          message: {
            msgBody: "Order taken, we will get back to you as soon as possible",
            msgError: false,
          },
        });
    }
  });
});

module.exports = rentalRouter;
