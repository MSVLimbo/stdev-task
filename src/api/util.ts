export function apiUrlWithoutVersioning(): string {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  return apiUrl.substring(0, apiUrl.length - 3);
}
