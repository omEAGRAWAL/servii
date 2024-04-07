// apiFunctions.js

export const getTerms = async () => {
    try {
      const data = await fetch("api/terms", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!data.ok) {
        throw new Error("Failed to fetch terms");
      }
      const response = await data.json();
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error fetching terms:", error);
      return null; // Handle error appropriately in your component
    }
  };
  
  export const addTerms = async (title, content) => {
    try {
      const data = {
        title: title,
        content: content,
      };
      const response = await fetch("api/terms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to add terms");
      }
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error("Error adding terms:", error);
      return null; // Handle error appropriately in your component
    }
  };
  
  export const updateTerms = async (updateid, title, content) => {
    try {
      const data = {
        title: title,
        content: content,
      };
      const update = await fetch(`/api/terms/${updateid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!update.ok) {
        throw new Error("Failed to update terms");
      }
      const response = await update.json();
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error updating terms:", error);
      return null; // Handle error appropriately in your component
    }
  };
  
  export const deleteTerms = async (updateid) => {
    try {
      const update = await fetch(`/api/terms/${updateid}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!update.ok) {
        throw new Error("Failed to delete terms");
      }
      const response = await update.json();
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error deleting terms:", error);
      return null; // Handle error appropriately in your component
    }
  };
  