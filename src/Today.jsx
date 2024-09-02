import React from "react";
function Today() {
let msg;
const date=new Date();
const hours=date.getHours();
const shades={color:""};
if(hours<12) 
{
    msg="Good Morning";
    shades.color="Green";
}
else if(hours<18)
{
    msg="Good Afternoon";
    shades.color="Yellow";
}
else 
{
    msg="Good Evening";
    shades.color="Blue";
}

return (
        <div>
            <h1 style={shades}>{msg}</h1>
        </div>
);
}
export default Today;