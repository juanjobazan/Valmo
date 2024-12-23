async function getBicicletas(){
    const res = fetch("http://localhost:4000/productos")
    const resJson = (await res).json()
    return resJson
}
