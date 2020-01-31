export async function getGaugeHeightBySiteCode (siteCode){
    const response = await fetch('https://waterservices.usgs.gov/nwis/iv/?format=json&sites=' + siteCode + '&parameterCd=00065,00060,00010&siteStatus=all')
    const data = await response.json();
    console.log(data)
    try {
      return data.value.timeSeries[1].values[0].value[0].value;
    } catch {
      return '-'
    }
}
  
export async function getDischargeRateBySiteCode (siteCode) {
    const response = await fetch('https://waterservices.usgs.gov/nwis/iv/?format=json&sites=' + siteCode + '&parameterCd=00065,00060,00010&siteStatus=all')
    const data = await response.json();
    try {
      return data.value.timeSeries[0].values[0].value[0].value;
    } catch (e) {
      return '-'
    }
}

