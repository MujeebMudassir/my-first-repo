import React, { useEffect, useRef } from "react";
function User(props) {

         let land = useRef()

         useEffect(() => {
                  land.current = props.prop


         })
         let PreviousValue = land.current


         return (
                  <>
                           <h1>User Components</h1>
                           <h1>Value is {props.prop}</h1>
                           <h1>Previous Value is {PreviousValue}</h1>
                  </>
         )

}
export default User;