const BASE_URL = "http://localhost:3000/api";

export const request = async (url, method = "GET", body = null, isForm = false) => {
  const options = {
    method,
    credentials: "include", // 🔥 IMPORTANT for cookies
    headers: {}
  };

  if (body && !isForm) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  if (isForm) {
    options.body = body;
  }

  const res = await fetch(BASE_URL + url, options);
  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data;
};