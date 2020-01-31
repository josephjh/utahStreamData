import {getGaugeHeightBySiteCode, getDischargeRateBySiteCode} from "./service.js"


window.handleSiteCodeFormSubmit = async function (e){
  e.preventDefault()
  const siteNumber = e.target.children.sitenumber.value;
  const gaugeHeight = await getGaugeHeightBySiteCode(siteNumber);
  const dischargeRate = await getDischargeRateBySiteCode(siteNumber);
  renderGaugeHeight(gaugeHeight);
  renderDischargeRate(dischargeRate);
}

function renderGaugeHeight (gaugeHeight) {
  document.querySelector('#gauge-height').innerHTML = `${gaugeHeight} feet`
}

function renderDischargeRate (dischargeRate) {
    document.querySelector('#discharge-rate').innerHTML = `${dischargeRate} feet per second`
}