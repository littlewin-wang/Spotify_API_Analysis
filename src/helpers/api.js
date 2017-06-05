const axios = require('axios')

const API_ROOT = 'https://api.spotify.com/v1/'
const AUTH_TOKEN = 'Bearer BQDygi5wCAWw7ORZ8eAcJm25ufyFaLGD44o6QhXSGnER70yHTN1zX7xF6vFQE-utqiCpPEJyaqZHvVgRbv6XOg'

axios.default.withCredentials = true
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN

// export API interface
export default {
  // Search for an Item
  search (q, type) {
    return axios.get(API_ROOT.concat('search'), { params: { q: q, type: type } })
  },

  // Get info of an Artist
  artists (id) {
    return axios.get(API_ROOT.concat('artists/') + id)
  },

  // Get an Artist's Top Tracks
  topTracks (id) {
    return axios.get(API_ROOT.concat('artists/') + id + '/top-tracks', { params: { country: 'US' }})
  },

  // Get an Artist's Related Artists
  releatedArtists (id) {
    return axios.get(API_ROOT.concat('artists/') + id + '/related-artists')
  }
}
