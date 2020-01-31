function elementReceiver(tr){
    const tds = tr.querySelectorAll('td')
    console.log(tds, 999999)
    const riverCode = tds[0].querySelector('a').innerText
    const riverName = tds[1].innerText

    return {riverCode, riverName}
}

const trs = document.querySelectorAll('tbody')[1].querySelectorAll('tr')

const completedList = []

trs.forEach(tr => {
    try {
        completedList.push(elementReceiver(tr))
        } catch {
            console.log('uh oh')
        }
});