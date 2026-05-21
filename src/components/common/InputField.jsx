export default function InputField({ label, placeholder }) {
  return (
    <div className="flex flex-col gap-2">

      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}