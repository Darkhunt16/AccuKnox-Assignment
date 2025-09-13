import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import Widget from "./Widget";

const WidgetList = ({ category }) => {
  const { searchQuery } = useContext(DashboardContext);

  // filter by search
  const filtered = category.widgets.filter((w) =>
    w.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-3">
      {filtered.length > 0 ? (
        filtered.map((widget) => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))
      ) : (
        <p className="text-gray-500 text-sm italic">No widgets found.</p>
      )}
    </div>
  );
};

export default WidgetList;
