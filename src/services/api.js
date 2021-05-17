export async function getWine() {
  const wines = await fetch('https://gist.githubusercontent.com/ajubin/d331f3251db4bd239c7a1efd0af54e38/raw/058e1ad07398fc62ab7f3fcc13ef1007a48d01d7/wine-data-set.json')
  const wino = await wines.json()
  return wino
}