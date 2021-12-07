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
