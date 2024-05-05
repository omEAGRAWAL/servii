// apiFunctions.js

export const getTerms = async () => {
  try {
    const data = await fetch("https://server-2-tnxj.onrender.com/api/terms", {
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

export const addTerms = async (data) => {
  try {
    const response = await fetch(
      "https://server-2-tnxj.onrender.com/api/terms",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
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

export const updateTerms = async (updateid, data) => {
  console.log(updateid, data);
  try {
    const response = await fetch(
      `https://server-2-tnxj.onrender.com/api/terms/${updateid}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update terms");
    }

    const updatedTerm = await response.json();
    console.log(updatedTerm); // Log the updated term received from the server
    return updatedTerm;
  } catch (error) {
    console.error("Error updating terms:", error);
    throw error; // Re-throw the error to handle it appropriately in your component
  }
};

export const deleteTerms = async (updateid) => {
  try {
    console.log(updateid);
    const update = await fetch(
      `https://server-2-tnxj.onrender.com/api/terms/${updateid}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
