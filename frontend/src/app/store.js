import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import ticketReducer from '../features/tickets/ticketSlice'
import noteSlice from '../features/notes/noteSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ticket: ticketReducer,
    notes: noteSlice
  },
});
