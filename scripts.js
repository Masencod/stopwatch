const zeroPad = (num, places) => String(num).padStart(places, '0')
const time = document.getElementById('time')
let i = -1
let j = 0
let k = 0
let l = 0
time.innerHTML = `00 : 00 : 00 : 000`
let start = null
const btnStart = document.getElementById('btnStart')
document.getElementById('btnStart').addEventListener('click', ()=>{
    if (start == null || !btnStart.classList.contains('btnstop')) {
        start = setInterval(MS, 10)
        btnStart.classList.add('btnstop')
        btnStart.innerHTML = `PAUSE`
    } else {
        clearInterval(start)
        btnStart.classList.remove('btnstop')
        btnStart.innerHTML = `START`
    }
})
document.getElementById('btnReset').addEventListener('click', ()=>{
    clearInterval(start)
    time.innerHTML = `00 : 00 : 00 : 000`
    i = 0
    j = 0
    k = 0
    l = 0
    if (btnStart.classList.contains('btnstop')) {
        btnStart.classList.remove('btnstop')
        btnStart.innerHTML = `START`
    }
})
const MS = function (){
    if (i === 99) {
        i = -1
        if (j === 60) {
            j = -1
            if (k === 60) {
                k=-1
                l++
            }
            k++
        }
        j++
    }
    i++
    let miliSecs = zeroPad(i, 2)
    let seconds = zeroPad(j, 2)
    let mins = zeroPad(k, 2)
    let hours = zeroPad(l, 2)
    time.innerHTML = `${hours} : ${mins} : ${seconds} : ${miliSecs}0`
}

// setInterval(MS, 10)

