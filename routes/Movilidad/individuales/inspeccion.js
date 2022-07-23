const { Router } = require("express");
const router = Router();

const fetch = require("node-fetch");
let myHeaders = new fetch.Headers();

myHeaders.append("x-apikey", "");
myHeaders.append("Content-Type", "application/json");
myHeaders.append(
  "Cookie",
  "incap_ses_1344_2660211=Hax4OllPbxQ1Md44RdmmEp2rE2IAAAAAC2McggMN0PFfKUi3Yze6AA==; nlbi_2660211=9oBMAN0maiuVh1yUDOTN6gAAAACkEOZ16AVtYF53toeI/X9f; visid_incap_2660211=a7liQUGCTz+4yCKWEAJ+ddyRxGEAAAAAQUIPAAAAAABrhs/nUP8iVl2iKnfZ4/F/"
);

router.post("/inspeccion", async (req, res) => {
  try {
    const response = await fetch(
      "https://apisuratest.segurossura.com/apimovilidad/v1/inspeccion",
      {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(req.body),
        redirect: "follow",
        mode: "no-cors",
      }
    )
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => res.status(200).send(response));
  } catch (err) {
      res.json({ message: err });
  }
});

module.exports = router;
