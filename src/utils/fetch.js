export const signup = async (username, email, password) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_BASE_URL}/users/signup`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    }
  );

  const data = await response.json();
  console.log("data in fetch signup", data);
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

export const getAllUsers = async (jwt) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_BASE_URL}/users/getAllUsers`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: jwt,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in getAllUsers:", error.message);
    throw error;
  }
};
