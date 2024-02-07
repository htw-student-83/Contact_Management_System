import { describe, test, it, expect } from "vitest";
import { isValid } from "../src/components/mobilecheck";
import namecheck from "../src/components/namecheck";
import patterntest from '../src/components/patterncheck'

describe('Validation of number', () =>{

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

    it('mobile has a letter', () => {
        expect(isValid("016223334987k")).toBe(false);
    });

})


describe('Validation of name', () => {

    it('valid name', () => {
        expect(namecheck.containsLetters("John")).toBe(true);
    });

    it('valid name', () => {
        expect(namecheck.containsLetters("Beier")).toBe(true);
    });

    it('name has a number at the end', () => {
        expect(namecheck.containsLetters("Daniel1")).toBe(false);
    });

    it('name begins with a number', () => {
        expect(namecheck.containsLetters("3Daniel")).toBe(false);
    });

    it('name begins with an operation symbol', () => {
        expect(namecheck.containsLetters("+Daniel")).toBe(false);
    });

    it('name begins with a point', () => {
        expect(namecheck.containsLetters(".Daniel")).toBe(false);
    });

    it('name begins with a specific symbol', () => {
        expect(namecheck.contains_specific_symbols(".Daniel")).toBe(true);
    });

    it('name has more than one number', () => {
        expect(namecheck.containsLetters("D2anie5l")).toBe(false);
    });

    it('name has a specific symbol', () => {
        expect(namecheck.containsLetters("#Meyer")).toBe(false);
    });

    it('name has a specific symbol', () => {
        expect(namecheck.contains_specific_symbols("#Meyer")).toBe(true);
    });

    it('name has a specific symbol', () => {
        expect(namecheck.contains_specific_symbols("`Meyer")).toBe(true);
    });

    it('name has a specific symbol', () => {
        expect(namecheck.contains_specific_symbols("'Meyer")).toBe(true);
    });

    it('name has two specific symbols', () => {
        expect(namecheck.contains_specific_symbols("'Mey`er")).toBe(true);
    });


    describe('Valid objects', () => {

        it('a valid object to save', () => {
            expect(namecheck.containsLetters("Sabrina")).toBe(true);
            expect(namecheck.containsLetters("Guhl")).toBe(true);
            expect(namecheck.contains_specific_symbols("Sabrina")).toBe(false);
            expect(namecheck.contains_specific_symbols("Guhl")).toBe(false);
            expect(isValid("01744565789")).toBe(true);
        });

    });


    describe('Invalid objects', () => {

        it('an invalid object to save', () => {
            expect(namecheck.containsLetters("2Sabrina")).toBe(false);
            expect(namecheck.containsLetters("Guhl'")).toBe(true);
            expect(namecheck.contains_specific_symbols("2Sabrina")).toBe(false);
            expect(namecheck.contains_specific_symbols("Guhl'")).toBe(true);
            expect(isValid("01744565789")).toBe(true);
        });

        it('an invalid object to save', () => {
            expect(namecheck.containsLetters("Sabrina")).toBe(true);
            expect(namecheck.containsLetters("`Guhl")).toBe(false);
            expect(namecheck.contains_specific_symbols("Sabrina")).toBe(false);
            expect(namecheck.contains_specific_symbols("`Guhl")).toBe(true);
            expect(isValid("01744565789")).toBe(true);
        });

        it('an invalid object to save', () => {
            expect(namecheck.containsLetters("Sabrina")).toBe(true);
            expect(namecheck.containsLetters("`Guhl")).toBe(false);
            expect(namecheck.contains_specific_symbols("Sabrina")).toBe(false);
            expect(namecheck.contains_specific_symbols("`Guhl")).toBe(true);
            expect(isValid("017445657")).toBe(false);
        });

        it('an invalid object to save', () => {
            expect(namecheck.containsLetters("Sabrina")).toBe(true);
            expect(namecheck.containsLetters("`Guhl")).toBe(false);
            expect(namecheck.contains_specific_symbols("Sabrina")).toBe(false);
            expect(namecheck.contains_specific_symbols("`Guhl")).toBe(true);
            expect(isValid("01405657897")).toBe(false);
        });

        it('an invalid object to save', () => {
            expect(namecheck.containsLetters("Sabrina")).toBe(true);
            expect(namecheck.containsLetters("`Guhl")).toBe(false);
            expect(namecheck.contains_specific_symbols("Sabrina")).toBe(false);
            expect(namecheck.contains_specific_symbols("`Guhl")).toBe(true);
            expect(isValid("03044553399")).toBe(false);
        });

        it('an invalid object to save', () => {
            expect(namecheck.containsLetters("Sabrina")).toBe(true);
            expect(namecheck.containsLetters("Guhl")).toBe(true);
            expect(namecheck.contains_specific_symbols("Sabrina")).toBe(false);
            expect(patterntest.scriptPattern("Sabrna", "Guhl","<script>"))
                .toBe(true);
        });

        it('an invalid object to save', () => {
            expect(namecheck.containsLetters("Sabrina")).toBe(true);
            expect(namecheck.containsLetters("Guhl")).toBe(true);
            expect(namecheck.contains_specific_symbols("Sabrina")).toBe(false);
            expect(patterntest.scriptPattern("Sabrna", "Guhl","<?php"))
                .toBe(true);
        });

        it('content of mobile field is invalid', () => {
            expect(patterntest.scriptPattern("<script>", "Guhl","01405657897" ))
                .toBe(true);
        });

        it('content of mobile field is invalid', () => {
            expect(patterntest.scriptPattern("Sabrina", "<script>","01405657897" ))
                .toBe(true);
        });

        it('content of mobile field is invalid', () => {
            expect(patterntest.scriptPattern("Sabrina", "Guhl","<script>"))
                .toBe(true);
        });

        it('content of mobile field is invalid', () => {
            expect(patterntest.scriptPattern("<?php", "Guhl","01405657897" ))
                .toBe(true);
        });

        it('content of mobile field is invalid', () => {
            expect(patterntest.scriptPattern("Sabrina", "<?php","01405657897" ))
                .toBe(true);
        });

        it('content of mobile field is invalid', () => {
            expect(patterntest.scriptPattern("Sabrina", "Guhl","<?php"))
                .toBe(true);
        });
    });

})
