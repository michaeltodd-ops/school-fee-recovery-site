import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main className="flex flex-col items-center px-4 py-10 text-center">
      <h1 className="text-4xl font-bold mb-4">School Fee Recovery Assistant</h1>
      <p className="text-lg max-w-2xl mb-8">
        Practical help for school business managers dealing with overdue fees. Based on real-world experience, not theory.
      </p>

      {/* Main Buttons */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mb-12 justify-center">
        <Link
          to="/strategies"
          className="bg-blue-600 text-white py-3 px-6 rounded-2xl shadow hover:bg-blue-700"
        >
          Choose Your Strategy
        </Link>
        <Link
          to="/core-templates"
          className="bg-blue-600 text-white py-3 px-6 rounded-2xl shadow hover:bg-blue-700"
        >
          Core Templates
        </Link>
        <Link
          to="/phone-techniques"
          className="bg-blue-600 text-white py-3 px-6 rounded-2xl shadow hover:bg-blue-700"
        >
          Telephone Techniques
        </Link>
        <Link
          to="/credit-procedures"
          className="bg-blue-600 text-white py-3 px-6 rounded-2xl shadow hover:bg-blue-700"
        >
          Setting Up Credit Procedures
        </Link>
      </div>

      {/* Explore Templates */}
      <section className="w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Explore Templates</h2>
        <ul className="space-y-4">
          <li>
            <Link
              to="/templates/reminder-early"
              className="block border p-4 rounded-lg hover:shadow-md hover:border-blue-500"
            >
              Early Reminder Letter
            </Link>
          </li>
          <li>
            <Link
              to="/templates/follow-up-call"
              className="block border p-4 rounded-lg hover:shadow-md hover:border-blue-500"
            >
              Follow-up Phone Script
            </Link>
          </li>
          <li>
            <Link
              to="/templates/final-notice"
              className="block border p-4 rounded-lg hover:shadow-md hover:border-blue-500"
            >
              Final Notice Email
            </Link>
          </li>
          <li>
            <Link
              to="/templates/payment-plan-offer"
              className="block border p-4 rounded-lg hover:shadow-md hover:border-blue-500"
            >
              Payment Plan Offer
            </Link>
          </li>
          <li>
            <Link
              to="/templates/legal-referral"
              className="block border p-4 rounded-lg hover:shadow-md hover:border-blue-500"
            >
              Referral to Legal
            </Link>
          </li>
          <li>
            <Link
              to="/templates/thank-you"
              className="block border p-4 rounded-lg hover:shadow-md hover:border-blue-500"
            >
              Thank You (After Payment)
            </Link>
          </li>
        </ul>
      </section>

      {/* Test Link */}
      <div className="mt-12">
        <Link to="/templates/reminder-early" className="text-red-600 underline">
          TEST LINK → Early Reminder Letter
        </Link>
      </div>
    </main>
  );
}

export default HomePage;
