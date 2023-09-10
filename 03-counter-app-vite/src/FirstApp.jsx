const newMessage = {
    message: "Hola Mundo",
    title: "titulo"
};

export const FirstApp = () => {
  return (
    <>
    <h1>Esteban</h1>
    <h1>{JSON.stringify( newMessage )}</h1>
    <p>Soy un subtitulo</p>
    </>
  )
}
