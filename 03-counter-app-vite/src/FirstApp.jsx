export const FirstApp = ({title, subTitle}) => {
  console.log(title)
  return (
    <>
    <h1>{ title }</h1>
    {/* <code>{JSON.stringify( newMessage )}</code> */}
    <p>{subTitle}</p>
    </>
  )
}