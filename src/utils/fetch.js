/* POST */
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

export const sendMessage = async (username, content, boardId) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_BASE_URL}/messages/newMessage`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          username: username,
          content: content,
          boardId: boardId,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`sendMessage failed with status: ${response.status}`);
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("sendMessage failed:", error);
    throw error;
  }
};
export const createBoard = async(game) => {
  try{
    const response = await fetch(
      `${import.meta.env.VITE_APP_BASE_URL}/boards/createBoard`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          game: game,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Board creation failed with status: ${response.status}`);
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Board creation failed:", error);
    throw error;
  }
}

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

/* GET */
export const fetchMessagesForBoard = async (boardId) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/messages/board/${boardId}`, {
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
    const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/boards/board/${boardId}`, {
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

export const fetchAllMessages = async() =>{
  try {
    const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/messages/`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: jwt,
        "Access-Control-Allow-Origin": "*",
      },
    });

    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error in fetchAllMessages:", error.message);
    throw error;
  }
}
 
/* PUT */
export const updateMessageById = async(messageId, content) => {
  try{
    const response = await fetch(
      `${import.meta.env.VITE_APP_BASE_URL}/messages/${messageId}`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          content: content,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`updateMessageById failed with status: ${response.status}`);
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("updateMessageById failed:", error);
    throw error;
  }
}

/* DELETE */
export const deleteMessageById = async(messageId) => {
  try{
    const response = await fetch(
      `${import.meta.env.VITE_APP_BASE_URL}/messages/delete/${messageId}`,
      {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`deleteMessageById failed with status: ${response.status}`);
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("deleteMessageById failed:", error);
    throw error;
  }
}