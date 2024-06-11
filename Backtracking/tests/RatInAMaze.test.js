import { RatInAMaze } from '../RatInAMaze'

describe('RatInAMaze', () => {
  it('should fail for non-arrays', () => {
    const values = [undefined, null, {}, 42, 'hello, world']

    for (const value of values) {
      // we deliberately want to check whether this constructor call fails or not
      expect(() => {
        new RatInAMaze(value)
      }).toThrow()
    }
  })

  it('should fail for an empty array', () => {
    // we deliberately want to check whether this constructor call fails or not
    expect(() => {
      new RatInAMaze([])
    }).toThrow()
  })

  it('should fail for a non-square array', () => {
    const array = [
      [0, 0, 0],
      [0, 0]
    ]

    // we deliberately want to check whether this constructor call fails or not
    expect(() => {
      new RatInAMaze(array)
    }).toThrow()
  })

  it('should fail for arrays containing invalid values', () => {
    const values = [[[2]], [['a']]]

    for (const value of values) {
      // we deliberately want to check whether this constructor call fails or not
      expect(() => {
        new RatInAMaze(value)
      }).toThrow()
    }
  })

  it('should work for a single-cell maze', () => {
    const maze = new RatInAMaze([[1]])
    expect(maze.solved).toBe(true)
    expect(maze.path).toBe('')
  })

  it('should work for a single-cell maze that can not be solved', () => {
    const maze = new RatInAMaze([[0]])
    expect(maze.solved).toBe(false)
    expect(maze.path).toBe('')
  })

  it('should work for a simple 3x3 maze', () => {
    const maze = new RatInAMaze([
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 1]
    ])
    expect(maze.solved).toBe(true)
    expect(maze.path).toBe('RDDR')
  })

  it('should work for a simple 2x2 that can not be solved', () => {
    const maze = new RatInAMaze([
      [1, 0],
      [0, 1]
    ])
    expect(maze.solved).toBe(false)
    expect(maze.path).toBe('')
  })

  it('should work for a more complex maze', () => {
    const maze = new RatInAMaze([
      [1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 1, 0, 0],
      [1, 1, 1, 0, 1, 0, 0],
      [1, 0, 1, 0, 1, 0, 0],
      [1, 0, 1, 1, 1, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1]
    ])
    expect(maze.solved).toBe(true)
    expect(maze.path).toBe('RRRRDDDDLLUULLDDDDRRRRRR')
  })

  it('should work for a more complex maze that can not be solved', () => {
    const maze = new RatInAMaze([
      [1, 1, 1, 1, 1, 0, 1],
      [0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1]
    ])
    expect(maze.solved).toBe(false)
    expect(maze.path).toBe('')
  })
})
