import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";

const Widget = ({ widget, categoryId }) => {
  const { removeWidget } = useContext(DashboardContext);

  return (
    <div className="relative bg-white border border-gray-200 rounded-lg shadow-sm p-4 mb-3">
      <button
        onClick={() => removeWidget(categoryId, widget.id)}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition"
        aria-label="Remove widget"
      >
        ✖
      </button>

      {/* Widget Title */}
      <h3 className="text-lg font-semibold text-gray-800">{widget.name}</h3>

      {/* Widget Text */}
      {widget.text && (
        <p className="text-gray-600 text-sm mt-1">{widget.text}</p>
      )}
    </div>
  );
};

export default Widget;
