import { matrixTranspose } from '../MatrixTransposition'

describe('Matrix Transpose', () => {
  it('should transpose a 2x2 matrix', () => {
    const matrix = [
      [1, 2],
      [3, 4]
    ];

    const transposedMatrix = matrixTranspose(matrix);

    expect(transposedMatrix).toEqual([
      [1, 3],
      [2, 4]
    ]);
  });

  it('should transpose a 3x3 matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    const transposedMatrix = matrixTranspose(matrix);

    expect(transposedMatrix).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ]);
  });

});
