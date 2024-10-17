export const xFetch = async (
  xEndpoint: string,
  requestBody: any = {},
  customHeaders: any = {}
) => {
  try {
    const defaultHeaders = {
      "Content-Type": "application/json",
      "XC-API-Key": process.env.XC_API_KEY,
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
