export const xFetch = async (
  xEndpoint: string,
  requestBody: any = {},
  customHeaders: any = {}
) => {
  try {
    const defaultHeaders = {
      "Content-Type": "application/json",
      "XC-API-Key":
        "0d9f22e26bba9e7caa2963447f6dabf50d2f5e8b9e2936b08831cef6794cb029",
    };

    const headers = { ...defaultHeaders, ...customHeaders };

    const response = await fetch(
      `https://xconnected.onrender.com${xEndpoint}`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(requestBody),
      }
    );

    return response;
  } catch (error) {
    console.error("Error in xFetch:", error);
    throw error;
  }
};
