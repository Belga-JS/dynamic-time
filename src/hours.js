import React, { Component } from 'react';

function msToTime() {
    var ms = document.getElementById("compteur").value
    let mssec = 1000
    let msmin = mssec * 60
    let mshrs = msmin * 60

    let hrs = Math.floor(ms / mshrs)
    let hoursRest = ms % mshrs
    let min = Math.floor(hoursRest / msmin)
    let minutesRest = hoursRest % msmin
    let sec = Math.floor(minutesRest / mssec)

    hrs = (hrs < 10) ? "0" + hrs : hrs;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    document.getElementById("hour").innerHTML = hrs;
    document.getElementById("Minute").innerHTML = min;
    document.getElementById("seconde").innerHTML = sec;
}

class Hours extends Component {

    state = {}
    render() {
        return (
            <div className="time-hour" >
                <div className="time-app">
                    <input id="compteur" type="number" name="ms" onKeyUp={msToTime} />

                    <div className="app-time">
                        <div className="item1"><span id="hour"></span><span className="text1">:</span></div>
                        <div className="item2"><span id="Minute"></span><span className=" text2">:</span> </div>
                        <div className="item3"><span id="seconde"></span> </div>

                    </div>
                    <div className="app-text">
                        <div className="item1">Hours</div>
                        <div className="item2">Minutes</div>
                        <div className="item3">Seconds</div>
                    </div>

                </div>

            </div >


        );

    }
}
export default Hours;