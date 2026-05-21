export default function WalletBox() {
  return (
    <div className="bg-gray-50 border rounded-lg p-4 flex justify-between items-center mb-4">

      <div>
        <h4 className="font-medium">
          Wallet Balance
        </h4>

        <p className="text-sm text-gray-500">
          ₹500.00 available
        </p>
      </div>

      <button className="border px-4 py-2 rounded-md">
        Apply
      </button>

    </div>
  );
}