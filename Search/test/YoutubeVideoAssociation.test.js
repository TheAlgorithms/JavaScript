import AssociationAlgorithm from '../YoutubeVideoAssociation'

describe('Youtube Video Association Algorithm', () => {
  const search = {
    video: {
      id: 'dQw4w9WgXcQ',
      views: '100'
    },
    search: {
      query: 'Rick Roll'
    }
  }

  const algorithm = new AssociationAlgorithm(10)

  test('The video should not be associated after one search', () => {
    algorithm.search(search)

    expect(algorithm.isVideoAssociated('dQw4w9WgXcQ', 'Rick Roll')).toBe(false)
  })

  test('The video should be associated after 11 searches', () => {
    for (let i = 0; i < 10; i++) algorithm.search(search)
  })
})
