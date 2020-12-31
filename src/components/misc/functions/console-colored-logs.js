
/*
* Console Colored Logs is used for quick easy message logs that look good.
* Usage:
*    err: Type of error
*    msg: Message presented to the console
*    options: Javascript object with styling as preference.
*/

export default function consoleColoredLogs(err, msg, opts)
{

    // Default styling...
    if(opts)
        console.log(`%c[${err}]` + `%c${msg}`, opts, "color: #969696")
    else
        console.log(`%c[${err}]` + `%c${msg}`, "color: #de2f32", "color: #969696")

}