const router = require('express').Router();
const axios = require('axios')

router.route('/').get((req, res) => {
  axios.get('https://xi.test.network/blocks')
    .then( resp => res.send(resp.data) )
    .catch(function(error) {
            res.send({
                status: '500',
                message: error
            })
      });
})

router.route('/coinInfoEndpoint').get((req, res) => {
  axios.get('https://xi.test.network/blocks')
    .then( resp => {
      let numberOfTRansactions = 0
      let amountTransacted = 0
      let chartData = {}
      resp.data.forEach((block) => {
          numberOfTRansactions += block.transactions.length
          block.transactions.forEach((transaction) => {
            amountTransacted += transaction.amount
            const fullDate = new Date(transaction.timestamp).toLocaleTimeString([], {year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute:'2-digit'})
            chartData[fullDate] ? chartData[fullDate] = chartData[fullDate] + 1 : chartData[fullDate] = 1
          });
      });
      res.send({
        "blocks": resp.data,
        "numberOfTRansactions": numberOfTRansactions,
        "amountTransacted": amountTransacted,
        "chartData": chartData,
      })
    } )
    .catch(function(error) {
            res.send({
                status: '500',
                message: error
            })
      });
})

router.route('/latest').get((req, res) => {
  axios.get('https://xi.test.network/blocks/latest' )
    .then( resp => res.send(resp.data) )
    .catch(function(error) {
            res.send({
                status: '500',
                message: error
            })
      });
})

router.route('/:height').get((req, res) => {
  axios.get('https://xi.test.network/blocks/'
  + req.params.height )
    .then( resp => res.send(resp.data) )
    .catch(function(error) {
            res.send({
                status: '500',
                message: error
            })
      });
})

router.route('/:height/transactions').get((req, res) => {
  axios.get('https://xi.test.network/blocks/'
  + req.params.height + '/transactions' )
    .then( resp => res.send(resp.data) )
    .catch(function(error) {
            res.send({
                status: '500',
                message: error
            })
      });
})

router.route('/:height/transactions/:hash').get((req, res) => {
  axios.get('https://xi.test.network/blocks/'
  + req.params.height + '/transactions/' + req.params.hash )
    .then( resp => res.send(resp.data) )
    .catch(function(error) {
            res.send({
                status: '500',
                message: error
            })
      });
})

module.exports = router;
