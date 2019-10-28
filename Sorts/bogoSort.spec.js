"use strict";

const chai = require("chai");
const expect = chai.expect;
const bogoSort = require("./bogoSort");


const sortThenCheck = (arr, expectedArr) => {
    // when
    const sortedArray = bogoSort(arr);

    // then
    expect(sortedArray).to.deep.eq(expectedArr);
};

describe("Bogo Sort Unit Test", ()=> {
    it("should return an empty array when passed an empty array", () => {
        sortThenCheck([], []);
    });

    it("should return an array with 1 element when passed an array with 1 element", () => {
        sortThenCheck([ 1 ], [ 1 ]);
    });

    context("should return a sorted array", ()=> { 
        it("when given a sorted array", () => {
            sortThenCheck([ 1, 2, 3 ], [ 1, 2, 3 ]);
        });
    
        it("when passed an array of negative and positive values", () => {
            sortThenCheck([6, 7, 8, 0, -1, 1, 12, 14], [ -1, 0, 1, 6, 7, 8, 12, 14 ]);
        });
    });
});