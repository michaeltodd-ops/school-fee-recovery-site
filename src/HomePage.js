import React from "react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen px-4 py-10 text-center">
      <h1 className="text-4xl font-bold mb-4">School Fee Recovery Assistant</h1>
      <p className="text-lg max-w-2xl mb-8">
        Practical help for school business managers dealing with overdue fees. Based on real-world experience, not theory.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        <Link to="/strategies" className="bg-blue-600 text-white py-3 px-6 rounded-2xl shadow hover:bg-blue-700">
          Choose Your Strategy
        </a>
        <Link to="/core-templates" className="bg-blue-600 text-white py-3 px-6 rounded-2xl shadow hover:bg-blue-700">
          Core Templates
        </a>
        <Link to="/phone-techniques" className="bg-blue-600 text-white py-3 px-6 rounded-2xl shadow hover:bg-blue-700">
          Telephone Techniques
        </a>
        <Link to="/credit-procedures" className="bg-blue-600 text-white py-3 px-6 rounded-2xl shadow hover:bg-blue-700">
          Setting Up Credit Procedures
        </a>
      </div>

      {/* 🔽 Explore Templates Section */}
      <section className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Explore Templates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/templates/reminder-early" className="border rounded-xl p-4 hover:shadow-lg hover:border-blue-500">
            Early Reminder Letter
          </a>
          <Link to="/templates/follow-up-call" className="border rounded-xl p-4 hover:shadow-lg hover:border-blue-500">
            Follow-up Phone Script
          </a>
          <Link to="/templates/final-notice" className="border rounded-xl p-4 hover:shadow-lg hover:border-blue-500">
            Final Notice Email
          </a>
          <Link to="/templates/payment-plan-offer" className="border rounded-xl p-4 hover:shadow-lg hover:border-blue-500">
            Payment Plan Offer
          </a>
          <Link to="/templates/legal-referral" className="border rounded-xl p-4 hover:shadow-lg hover:border-blue-500">
            Referral to Legal
          </a>
          <Link to="/templates/thank-you" className="border rounded-xl p-4 hover:shadow-lg hover:border-blue-500">
            Thank You (After Payment)
          </a>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
