import { ref } from 'vue'
import axios from 'axios'

export const searchName = ref('')
const data = ref()

export const bads = ref([])
export const bad = ref()

const api = axios.create ({
    baseURL: 'https://www.breakingbadapi.com/api',
})

export const getBreakingBad = async () => {
    const resource = searchName.value ? 'name' : 'characters'
    const response = await api(resource)
    bads.value = response.data
}

export const getCharacter = async () => {
    const response = await axios (`https://www.breakingbadapi.com/api/characters?name=${searchName.value}`,)
    data.value = response.data
    bad.value = response.data
    console.log(searchName.value)
}

export const getGif = async id => {
    try {
      const response = await api(id)
      bad.value = response.data
    } catch (error) {
      console.log(error)
    }
  }

export const cleanGif = () => (bad.value = null)