const router = require('express').Router();
const axios = require('axios')

router.route('/').get((req, res) => {
  axios.get('https://xi.test.network/wallets')
    .then( resp => res.send(resp.data) )
    .catch(function(error) {
            res.send({
                status: '500',
                message: error
            })
      });
})

router.route('/:address').get((req, res) => {
  axios.get('https://xi.test.network/wallets/'
  + req.params.address )
    .then( resp => res.send(resp.data) )
    .catch(function(error) {
            res.send({
                status: '500',
                message: error
            })
      });
})

module.exports = router;
