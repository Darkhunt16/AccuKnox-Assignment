import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";

const AddWidgetDialog = ({ category, onClose }) => {
  const { addWidget } = useContext(DashboardContext);

  // filter out already added widgets
  const unusedWidgets = category.availableWidgets.filter(
    (aw) => !category.widgets.some((w) => w.id === aw.id)
  );

  const handleAdd = (widget) => {
    addWidget(category.id, widget);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Select a Widget to Add
        </h3>

        {/* Widget Options */}
        {unusedWidgets.length > 0 ? (
          <div className="space-y-3">
            {unusedWidgets.map((widget) => (
              <div
                key={widget.id}
                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <span className="text-gray-700 font-medium">{widget.name}</span>
                <button
                  onClick={() => handleAdd(widget)}
                  className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
                >
                  Add
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm italic">
            No widgets available to add.
          </p>
        )}

        {/* Footer Buttons */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetDialog;
