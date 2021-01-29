const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})


//GET related routes
//Cost to cover floor
router.get('/floorCover', (req, res) => {
    let result = undefined
    res.render('floorCover', {result: result})
})
router.post('/floorCover', (req, res) => {
    let result = req.body["floor-width"]*req.body["floor-height"]*req.body["tile-cost"]
    console.log(result)
    res.render('floorCover', {result: result})
})

//Coin flip simulator
let globalHeadsCount = 0
let globalTailsCount = 0

router.get('/coinFlip', (req, res) => {
    let result = undefined
    globalHeadsCount = 0
    globalTailsCount = 0
    res.render('coinFlip', {result: result, hCount: globalHeadsCount, tCount: globalTailsCount})
})

router.post('/coinFlip', (req, res) => {
    let num = Math.round(Math.random())
    let result = 'heads'
    if(num == 0) {
        result = 'tails'
        globalTailsCount++
    } else {
        result = 'heads'
        globalHeadsCount++
    }
    
    res.render('coinFlip', {result: result, hCount: globalHeadsCount, tCount: globalTailsCount})
})

router.get('/palindrome', (req, res) => {
    let result = undefined
    res.render('palindrome', {result: result})
})
router.post('/palindrome',  (req, res) => {
    let word = req.body["inputString"]
    word = word.replace(/ /g, "")
    console.log(word)
    let len = word.length
    let sP = 0
    if(len%2 == 0) {
        sP = len/2
    } else {
        sP = Math.round(len/2) - 1
    }
    let result = "Is a Palindrome"
    if(len >= 2) {
        for(let i = 0; i <= sP; i++) {
            if(word[i] != word[len-i-1]) {
                result = "Not a Palindrome"
                break
            }
        }
    }
    
    res.render('palindrome', {result: result})
})


module.exports = router