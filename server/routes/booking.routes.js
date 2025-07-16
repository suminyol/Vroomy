import express from "express";
import { cancelBooking, changeBookingStatus, checkAvailabilityofCar, createBooking, getOwnerBookings, getUserBookings } from "../controllers/booking.controlller.js";
import { protect } from "../middlewares/auth.middleware.js";

const bookingRouter = express.Router();
bookingRouter.post('/check-availability', checkAvailabilityofCar);

bookingRouter.post('/create', protect, createBooking)
bookingRouter.get('/user', protect, getUserBookings)
bookingRouter.get('/owner', protect, getOwnerBookings)
bookingRouter.post('/change-status', protect, changeBookingStatus)
bookingRouter.post('/cancel', protect, cancelBooking);

export default bookingRouter;