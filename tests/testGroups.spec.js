import {test} from '@playwright/test';

test.describe("Test group 1", () => {
    test.beforeAll(() => {
        console.log("Before all tests executed");
    });
    test.afterAll(() => {
        console.log("After all tests executed");
    });
    test.beforeEach(() => {
        console.log("Before each test  executed");
    });
    test.afterEach(() => {
        console.log("After each test executed");
    });
    test("test 1", async () => {
        console.log("Test 1 executed");
    });
    test("test 2", async () => {
        console.log("Test 2 executed");
    });
    });