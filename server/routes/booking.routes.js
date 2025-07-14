import express from "express";
import { changeBookingStatus, checkAvailabilityofCar, createBooking, getOwnerBookings, getUserBookings } from "../controllers/booking.controlller.js";
import { protect } from "../middlewares/auth.middleware.js";

const bookingRouter = express.Router();
bookingRouter.post('/check-availability', checkAvailabilityofCar);

bookingRouter.post('/create', protect, createBooking)
bookingRouter.get('/user', protect, getUserBookings)
bookingRouter.get('/owner', protect, getOwnerBookings)
bookingRouter.post('/change-status', protect, changeBookingStatus)

export default bookingRouter;