export async function fetchData(usarname) {
  const url = `https://api.github.com/users/${usarname}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
