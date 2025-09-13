import { createContext, useState } from "react";
import data from "../../public/dashboardData.json";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [categories, setCategories] = useState(data.categories);
  const [searchQuery, setSearchQuery] = useState("");

  // Add Widget
  const addWidget = (categoryId, widget) => {
  setCategories((prev) =>
    prev.map((cat) =>
      cat.id === categoryId
        ? { ...cat, widgets: [...cat.widgets, widget] }
        : cat
    )
  );
};

  // Remove Widget
  const removeWidget = (categoryId, widgetId) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId
          ? { ...cat, widgets: cat.widgets.filter((w) => w.id !== widgetId) }
          : cat
      )
    );
  };

  return (
    <DashboardContext.Provider
      value={{ categories, addWidget, removeWidget, searchQuery, setSearchQuery }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
