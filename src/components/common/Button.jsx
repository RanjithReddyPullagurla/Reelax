export default function Button({
  children,
  bg = "bg-blue-600",
  text = "text-white",
  width = "w-auto",
}) {
  return (
    <button
      className={`${bg} ${text} ${width} px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition`}
    >
      {children}
    </button>
  );
}