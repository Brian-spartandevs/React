import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
      console.log('Message Mouted')
      
      return () => {
          console.log('Message UnMouted')
      }
    }, [])
    


  return (
    <>
        <h2>Usuario ya existe</h2>


    </>
  )
}
