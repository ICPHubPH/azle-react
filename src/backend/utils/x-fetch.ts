export const xFetch = async (xEndpoint: string, requestBody: any = {}) => {
  try {
    const XCONNECTED_API_URL = "https://xconnected.onrender.com";
    const XCONNECTED_API_KEY =
      "0d9f22e26bba9e7caa2963447f6dabf50d2f5e8b9e2936b08831cef6794cb029";
    const response = await fetch(`${XCONNECTED_API_URL}${xEndpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "XC-API-Key": XCONNECTED_API_KEY,
      },
      body: JSON.stringify(requestBody),
    });

    return response;
  } catch (error) {
    console.error("Error in xFetch:", error);
    throw error;
  }
};
