export const signup = async (username, email, password) => {
    const response = await fetch("<!--backendlink-->", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
        })
    });

    const data = await response.json();
    console.log("data in fetch signup", data);
    return data;
}

export const login = async (username, password) => {
    const response = await fetch("<!--backendlink-->", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    });

    const data = await response.json();
    console.log("data in fetch login", data);
    return data;
}