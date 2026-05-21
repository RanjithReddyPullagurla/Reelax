export default function CouponBox() {
  return (
    <div className="bg-white border rounded-lg p-4">

      <div className="mb-4">

        <input
          type="text"
          placeholder="Enter coupon code"
          className="w-full border rounded-md px-3 py-2 text-sm"
        />

        <div className="mt-2">
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md">
            Apply
          </button>
        </div>

      </div>

      <div className="space-y-3">

        <div className="border rounded-md p-3 flex justify-between">

          <div>
            <h4 className="font-semibold">
              WELCOME20
            </h4>

            <p className="text-xs text-gray-500">
              20% off on first month
            </p>
          </div>

          <input type="radio" />
        </div>

        <div className="border rounded-md p-3 flex justify-between">

          <div>
            <h4 className="font-semibold">
              ANNUAL50
            </h4>

            <p className="text-xs text-gray-500">
              50% off annual plans
            </p>
          </div>

          <input type="radio" />
        </div>

      </div>
    </div>
  );
}