export function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function isAlphanumeric(str) {
  return /^[a-z0-9]+$/i.test(str);
}
