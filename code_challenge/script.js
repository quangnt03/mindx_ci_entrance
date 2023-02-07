const colorBtn = document.getElementById('color-changer')
const copyBtn = document.getElementById('color-copy')
const gradientCb = document.getElementById('gradient-cb')
const colorDisplay = document.getElementById('color-display')
const body = document.getElementsByTagName('body')[0]

let isGradient = false
let backgroundColor = ''

const getRandomInRange = high => Math.ceil(Math.random() * high)

const decimalToHex = decimal => {
    const base = 16
    let result = ''
    while(decimal != 0) {
        let rem = decimal % base
        decimal = Math.floor(decimal / base)
        let newChar = ''
        if (rem < 10)
        newChar = rem.toString()
        else {
            rem %= 10
            const charCodeBase = 'A'.charCodeAt(0)
            newChar = String.fromCharCode(charCodeBase + rem)
        }
        result = `${newChar}${result}`
    }
    return result
}

const getRandomHexColor = () => decimalToHex(getRandomInRange(255))

const getColor = () => {
    const r = getRandomHexColor()
    const g = getRandomHexColor()
    const b = getRandomHexColor()
    return `#${r}${g}${b}`
}

const getGradient = () => `linear-gradient(${getColor()},${getColor()})`

const setBackground = (bgCol) => {
    setGradientBg('')
    body.style.backgroundColor = bgCol
}

const setGradientBg = (bgGrad) => body.style.backgroundImage = bgGrad

const handleClick = () => {
    if (isGradient){
        backgroundColor = getGradient()
        setGradientBg(backgroundColor) 
    }
    else {
        backgroundColor = getColor()
        setBackground(backgroundColor)
    }
    colorDisplay.innerText = backgroundColor
}

const handleCopy = async () => {
    console.log(backgroundColor)
    try {
        await navigator.clipboard.writeText(backgroundColor)

    } catch (err) {
        console.error(err)
    }

}

colorBtn.addEventListener('click', handleClick)

gradientCb.addEventListener('click', () => {
    isGradient = !isGradient
    handleClick()
})

copyBtn.addEventListener('click', handleCopy)