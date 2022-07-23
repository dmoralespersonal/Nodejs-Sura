const { Router } = require('express');
const router = Router();

const fetch = require('node-fetch');
let myHeaders = new fetch.Headers();

myHeaders.append("x-apikey", "");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "incap_ses_1344_2660211=Hax4OllPbxQ1Md44RdmmEp2rE2IAAAAAC2McggMN0PFfKUi3Yze6AA==; nlbi_2660211=9oBMAN0maiuVh1yUDOTN6gAAAACkEOZ16AVtYF53toeI/X9f; visid_incap_2660211=a7liQUGCTz+4yCKWEAJ+ddyRxGEAAAAAQUIPAAAAAABrhs/nUP8iVl2iKnfZ4/F/");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  mode: 'no-cors'
};

const fetchClaseVehiculo = async () => {
  const response = await fetch("https://apisuratest.segurossura.com/apimovilidad/v1/clasesvehiculo", requestOptions)
  return response.json()
}

router.get('/clasesvehiculo', async  (req, res) => {    
    try {
        const players = await fetchClaseVehiculo();
        res.json(players)
    } catch (err) {
        res.json({message: err})
    }
})

module.exports = router;