import React from "react";

function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-10 text-center">
      <h1 className="text-4xl font-bold mb-4">School Fee Recovery Assistant</h1>
      <p className="text-lg max-w-2xl mb-8">
        Practical help for school business managers dealing with overdue fees. Based on real-world experience, not theory.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        <a href="/strategies" className="bg-blue-600 text-white py-3 px-6 rounded-2xl shadow hover:bg-blue-700">
          Choose Your Strategy
        </a>
        <a href="/core-templates" className="bg-blue-600 text-white py-3 px-6 rounded-2xl shadow hover:bg-blue-700">
          Core Templates
        </a>
        <a href="/phone-techniques" className="bg-blue-600 text-white py-3 px-6 rounded-2xl shadow hover:bg-blue-700">
          Telephone Techniques
        </a>
        <a href="/credit-procedures" className="bg-blue-600 text-white py-3 px-6 rounded-2xl shadow hover:bg-blue-700">
          Setting Up Credit Procedures
        </a>
      </div>

      {/* 🔽 Explore Templates Section */}
      <section className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Explore Templates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="/templates/reminder-early" className="border rounded-xl p-4 hover:shadow-lg hover:border-blue-500">
            Early Reminder Letter
          </a>
          <a href="/templates/follow-up-call" className="border rounded-xl p-4 hover:shadow-lg hover:border-blue-500">
            Follow-up Phone Script
          </a>
          <a href="/templates/final-notice" className="border rounded-xl p-4 hover:shadow-lg hover:border-blue-500">
            Final Notice Email
          </a>
          <a href="/templates/payment-plan-offer" className="border rounded-xl p-4 hover:shadow-lg hover:border-blue-500">
            Payment Plan Offer
          </a>
          <a href="/templates/legal-referral" className="border rounded-xl p-4 hover:shadow-lg hover:border-blue-500">
            Referral to Legal
          </a>
          <a href="/templates/thank-you" className="border rounded-xl p-4 hover:shadow-lg hover:border-blue-500">
            Thank You (After Payment)
          </a>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
