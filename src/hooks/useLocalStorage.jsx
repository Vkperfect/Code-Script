import { useEffect, useState } from "react";

// Prefix for local storage keys
const PREFIX = "code-script-";

// Custom hook to manage state with local storage
export default function useLocalStorage(key, initialValue) {
  // Create a prefixed key for local storage
  const prefixedKey = PREFIX + key;

  // Initialize state with a function to handle dynamic initial values
  const [value, setValue] = useState(() => {
    try {
      const jsonValue = localStorage.getItem(prefixedKey);
      if (jsonValue != null) return JSON.parse(jsonValue);

      // Handle dynamic initial values
      if (typeof initialValue === "function") {
        return initialValue();
      } else {
        return initialValue;
      }
    } catch (error) {
      console.error(`Error loading "${key}" from local storage:`, error);
      return initialValue;
    }
  });

  // Update local storage when the value or prefixedKey changes
  useEffect(() => {
    try {
      localStorage.setItem(prefixedKey, JSON.stringify(value));
    } catch (error) {
      console.error(`Error saving "${key}" to local storage:`, error);
    }
  }, [prefixedKey, value]);

  // Return the value and setValue function
  return [value, setValue];
}
