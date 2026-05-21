import WalletBox from "./WalletBox";
import CouponBox from "./CouponBox";
import Button from "../common/Button";

export default function OrderSummary() {
  return (
    <div className="bg-white border rounded-lg p-5 w-[340px]">

      <h2 className="text-2xl font-semibold mb-5">
        Order Summary
      </h2>

      <div className="border rounded-lg p-4 mb-4">

        <div className="flex justify-between items-start">

          <div>
            <h3 className="text-3xl font-bold">
              ₹4,999
              <span className="text-sm font-normal">
                /month
              </span>
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Includes 5,000 credits/mo.
            </p>
          </div>

          <div className="text-right">

            <p className="text-xs text-blue-600 font-semibold">
              SELECTED PLAN
            </p>

            <p className="font-semibold">
              Startup
            </p>

          </div>
        </div>

        <button className="border border-purple-500 text-purple-600 rounded-md w-full py-2 mt-4">
          Upgrade to Growth Plan
        </button>

      </div>

      <WalletBox />

      <CouponBox />

      <div className="mt-6 space-y-2">

        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>₹14,999.00</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Tax (18% GST)</span>
          <span>₹1,079.64</span>
        </div>

        <div className="flex justify-between text-xl font-bold mt-4">

          <span>Total due today</span>

          <span className="text-blue-600">
            ₹16,078.64
          </span>

        </div>
      </div>

      <div className="mt-5">

        <Button width="w-full">
          Proceed to Payment
        </Button>

      </div>
    </div>
  );
}