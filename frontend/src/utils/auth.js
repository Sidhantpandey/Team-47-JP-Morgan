export function getStoredUser() {
  try {
    const raw = localStorage.getItem("user");
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function isAuthenticated() {
  const user = getStoredUser();
  return Boolean(user?.token);
}

export function hasRole(requiredRole) {
  const user = getStoredUser();
  if (!requiredRole) return true;
  return user?.role === requiredRole;
}

export function logout() {
  localStorage.removeItem("user");
}

