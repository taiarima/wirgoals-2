export default function Pane({ children }) {
  return (
    <div className="bg-blue-950 rounded-md mt-4 large:m-4 large:w-full h-96">
      {children}
    </div>
  );
}
