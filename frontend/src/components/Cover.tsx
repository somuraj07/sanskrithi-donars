

export default function Cover() {
  return (
    <div>
        <section className="relative bg-red-600 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=1600"
            alt="Blood Donation"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Every Drop Counts: Connect with Blood Donors Today
            </h1>
            <p className="text-xl mb-8">
              "The gift of blood is the gift of life. Your single donation can save up to three lives."
            </p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-100 transition-colors">
              Find Donors Now
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
