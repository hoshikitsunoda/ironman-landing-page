import axios from 'axios'
import fetchData from '../utils/api'
import { urlCharacter, urlComics, paramsSetting } from '../data/api'
import { characterObject, comicsObject } from '../data/variables'

jest.mock('axios')

describe('fetchData', () => {
  const data = [characterObject, comicsObject]
  const mockedAxios = axios as jest.Mocked<typeof axios>

  it('should call get twice', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data))
    fetchData([urlCharacter, urlComics], paramsSetting)
    expect(axios.get).toHaveBeenCalledTimes(2)
    afterEach(() => {
      jest.clearAllMocks()
    })
  })

  it('should call with correct url and params', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data))
    fetchData([urlCharacter, urlComics], paramsSetting)
    expect(axios.get).toHaveBeenNthCalledWith(1, urlCharacter, paramsSetting)
    expect(axios.get).toHaveBeenNthCalledWith(2, urlComics, paramsSetting)
  })

  it('should get correct data', async () => {
    mockedAxios.all.mockImplementationOnce(() => Promise.resolve(data))
    await expect(
      fetchData([urlCharacter, urlComics], paramsSetting)
    ).resolves.toEqual(data)
  })

  it('should fetch erroneously data from an API', async () => {
    const errorMessage = 'Failed to get data'

    mockedAxios.all.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    )

    await expect(
      fetchData([urlCharacter, urlComics], paramsSetting)
    ).rejects.toThrow(errorMessage)
  })
})
