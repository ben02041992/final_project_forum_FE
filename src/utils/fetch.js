export const signup = async (username, email, password) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_BASE_URL}/users/signup`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Signup failed with status: ${response.status}`);
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Signup failed:", error);
    throw error;
  }
};

export const login = async (username, password) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_BASE_URL}/users/login`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }
  );

  const data = await response.json();
  console.log("data in fetch signup", data);
  return data;
};

// export const getAllUsers = async (jwt) => {
//   try {
//     const response = await fetch(
//       `${import.meta.env.VITE_APP_BASE_URL}/users/getAllUsers`,
//       {
//         method: "GET",
//         mode: "cors",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: jwt,
//           "Access-Control-Allow-Origin": "*",
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error in getAllUsers:", error.message);
//     throw error;
//   }
// };

export const fetchMessagesForBoard = async (boardId) => {
  try {
    const response = await fetch(`boards/${boardId}/messages`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.messages;
  } catch (error) {
    console.error("Error in fetchMessagesForBoard:", error.message);
    throw error;
  }
};

export const fetchBoard = async (boardId) => {
  try {
    const response = await fetch(`boards/${boardId}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.board;
  } catch (error) {
    console.error("Error in fetchBoard:", error.message);
    console.log("Response content:", await response.text());
    throw error;
  }
};

export const postMessageToBoard = async (boardId, messageContent) => {
  try {
    const response = await fetch(`boards/${boardId}/messages`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        content: messageContent,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in postMessageToBoard:", error.message);
    throw error;
  }
};

