import React from 'react'
import Menu from './Menu'
import api from './API'
import axa from './AxaApi'

function Info() {
    const ans = (
        <div>
          <Menu/>
          <h1>Patient Information</h1>
          <h2>Allergies</h2>
          <div id="info_allergies">Loading ...</div>
          <h2>Conditions</h2>
          <div id="info_conditions">Loading ...</div>
          <h2>Current Drugs</h2>
          <div id="info_drugs">Loading ...</div>
        </div>
    )
    //api.get_patient('/1').then(function (info) {
    //    console.log(info)
    //    //document.getElementById("info_allergies").replaceChild(info.allergies)
    //    console.log("pre",document.getElementById("info_conditions"))
    //    document.getElementById("info_conditions").replaceChild(info.conditions)
    //    console.log("post",document.getElementById("info_conditions"))
    //    //document.getElementById("info_drugs").replaceChild(info.drugs)
    //}).catch(err => console.log("err1",err))
    axa.get_drug('/33124').then(function (info) {
        console.log("replace w/", JSON.stringify(info) )
        document.getElementById("info_allergies").innerhtml = "<p>" + JSON.stringify(info) + "</p>"
    }).catch(err => console.log("errx",err))
    return ans;
}

export default Info
