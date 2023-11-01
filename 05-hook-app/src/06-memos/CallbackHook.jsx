import { useCallback, useState } from "react"
import { ShowIncrement } from "./Showincrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(0)

    const incrementFather = useCallback(
      (value) => {
        setCounter((c) => c + value )
      },
      [],
    )


    // const incrementFather = () => {
    //     setCounter( counter + 1 )
    // }

    return (
        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr />



            <ShowIncrement increment={ incrementFather } />
        </>
  )
}
