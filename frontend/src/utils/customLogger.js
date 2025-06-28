export const logEvent = (type, message, meta = {}) => {
  const logs = JSON.parse(localStorage.getItem("affordmedLogs") || "[]");
  logs.push({ timestamp: new Date().toISOString(), type, message, meta });
  localStorage.setItem("affordmedLogs", JSON.stringify(logs));
};
