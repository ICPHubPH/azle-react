export const getCanisterLink = () => {
  let backendCanisterUrl;
  const backendCanisterId = process.env.CANISTER_ID;
  const network = process.env.DFX_NETWORK || "local";
  if (network === "local") {
    backendCanisterUrl = `http://${backendCanisterId}.localhost:4943`;
  } else if (network === "ic") {
    backendCanisterUrl = `https://${backendCanisterId}.raw.icp0.io`;
  }

  console.log("URL from helpers.ts:", backendCanisterUrl);
  return backendCanisterUrl;
};
