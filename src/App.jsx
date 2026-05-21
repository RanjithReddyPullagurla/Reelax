import Header from "./components/layout/Header";
import BillingForm from "./components/billing/BillingForm";
import OrderSummary from "./components/billing/OrderSummary";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7]">

      <Header />

      <div className="max-w-7xl mx-auto p-6">

        <p className="text-sm text-purple-600 mb-4 cursor-pointer">
          ← Back to plans
        </p>

        <div className="flex gap-6">

          <div className="flex-1">
            <BillingForm />
          </div>

          <OrderSummary />

        </div>
      </div>
    </div>
  );
}