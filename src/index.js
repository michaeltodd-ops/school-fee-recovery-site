import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./HomePage";

// Import the 6 template pages
import ReminderEarly from "./templates/ReminderEarly";
import FollowUpCall from "./templates/FollowUpCall";
import FinalNotice from "./templates/FinalNotice";
import PaymentPlanOffer from "./templates/PaymentPlanOffer";
import LegalReferral from "./templates/LegalReferral";
import ThankYou from "./templates/ThankYou";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/templates/reminder-early" element={<ReminderEarly />} />
        <Route path="/templates/follow-up-call" element={<FollowUpCall />} />
        <Route path="/templates/final-notice" element={<FinalNotice />} />
        <Route path="/templates/payment-plan-offer" element={<PaymentPlanOffer />} />
        <Route path="/templates/legal-referral" element={<LegalReferral />} />
        <Route path="/templates/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
