import React from "react";

function Heading() {
    return(
        <h1>Course</h1>
    )
     }
     function Body() {
        return(
            <ul>
                <li>JAVA</li>
                <li>Python</li>
                <li>C/C++</li>
            </ul>
        )
     }
     function MD() {
        return(
            <div>
                <Heading />
                <Body />
            </div>
        )
     }
     export default MD;