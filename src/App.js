import React from "react";
import Map from "./Map";
import getRoute from "./Api";
import { wait } from "@testing-library/user-event/dist/utils";
import "./index.css";

function App() {

  let token = ''

  const start = "37.770581%2C-122.442550"
  const end = "37.765297%2C-122.442527"

  let address1 = ''
  let zip1 = ''
  let address2 = ''
  let zip2 = ''

  function parseAddress() {

    if (!document.getElementById('address1').value) return;
    if (!document.getElementById('zip1').value) return;
    if (!document.getElementById('address2').value) return;
    if (!document.getElementById('zip2').value) return;

    address1 = document.getElementById('address1').value
    zip1 = document.getElementById('zip1').value
    address2 = document.getElementById('address2').value
    zip2 = document.getElementById('zip2').value
  }

  function getCoordinates() {
    let address1Arr = address1.split(' ');
    if (address1Arr.length < 2) return;
    let url1 = `https://api.geoapify.com/v1/geocode/search?housenum=${address1Arr[0]}&street=${address1Arr.slice(1).join('%20')}&city=San%20Francisco&zip=${zip1}&state=CA&country=United%20States&apiKey=9b0a76ae68984a9da39f81ec480d0a17`;
    // console.log(url1);
    fetch(url1).then(res => res.json()).then(data => {
      let long1 = data['features'][0]['bbox'][0]
      let lat1 = data['features'][0]['bbox'][1]

    })


    let address2Arr = address2.split(' ');
    if (address2Arr.length < 2) return;
    let url2 = `https://api.geoapify.com/v1/geocode/search?housenum=${address2Arr[0]}&street=${address2Arr.slice(1).join('%20')}&city=San%20Francisco&zip=${zip2}&state=CA&country=United%20States&apiKey=9b0a76ae68984a9da39f81ec480d0a17`;
    // console.log(url2);
    fetch(url2).then(res => res.json()).then(data => {
      let long2 = data['features'][0]['bbox'][0]
      let lat2 = data['features'][0]['bbox'][1]

    })

  }

  function getRoute(start, end) {
    const url = `https://api.iq.inrix.com/findRoute?wp_1=${start}&wp_2=${end}&format=json&accessToken=${token}`;
  
    const data = {
        method : 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    
    fetch(url, data).then(res => res.json())
  }

  async function callApi() {
    let appId = "z4limdy5g3";
    let hashToken = "ejRsaW1keTVnM3w4bE9sODVPM1FDNk1UdWpaMWlIM2E1bExoR243SmxBTXI3ZXpFbFI3";
    let url = `https://api.iq.inrix.com/auth/v1/appToken?appId=${appId}&hashToken=${hashToken}`;

    const data = {
      method : 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
    };
    var requestOptions = {
      method: 'GET'
    };

    let response = await fetch(url, requestOptions)
    let json = await response.json();
    let output = json.result.token;
    console.log(output)
  }

  callApi()
  getRoute(start, end);

  return (
    <>
      <div class = "SearchBar">
      <br/>
      Address :<input id='address1'></input>
      <br/>
      Zip : <input id='zip1'></input>
      <br/>
      Address :<input id='address2'></input>
      <br/>
      Zip : <input id='zip2'></input>
      <button onClick={event => {
        parseAddress();
        getCoordinates();
      }}>Search</button>
      </div>
      <Map />
    </>
  );
};

export default App;