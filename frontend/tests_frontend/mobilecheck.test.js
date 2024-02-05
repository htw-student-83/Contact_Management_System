import { describe, test, it, expect } from "vitest";
import { isValid } from "../src/components/mobilecheck";
import isValidName from "../src/components/namecheck";

describe('isValid', () =>{

    it('valid number', () => {
        expect(isValid("01722333445")).toBe(true);
    });

    it('valid number', () => {
        expect(isValid("01622333445")).toBe(true);
    });

    it('mobile is to short', () => {
        expect(isValid("016223334")).toBe(false);
    });

    it('mobile is to short and the patter is unknown', () => {
        expect(isValid("015123334")).toBe(false);
    });

    it('valid number', () => {
        expect(isValid("016223334987")).toBe(true);
    });

    it('mobile hat a letter', () => {
        expect(isValid("016223334987k")).toBe(false);
    });

})


describe('isValidName', () => {

    it('valid name', () => {
        expect(isValidName("John")).toBe(true);
    });

    it('valid name', () => {
        expect(isValidName("Beier")).toBe(true);
    });

    it('name has a number at the end', () => {
        expect(isValidName("Daniel1")).toBe(false);
    });

    it('name begins with a number', () => {
        expect(isValidName("3Daniel")).toBe(false);
    });

    it('name begins with an operation symbol', () => {
        expect(isValidName("+Daniel")).toBe(false);
    });

    it('name begins with a point', () => {
        expect(isValidName(".Daniel")).toBe(false);
    });

    it('name has more than one numbers', () => {
        expect(isValidName("D2anie5l")).toBe(false);
    });

    it('name has one specific symbol', () => {
        expect(isValidName("#Meyer")).toBe(false);
    });

})
