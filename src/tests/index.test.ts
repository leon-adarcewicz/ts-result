import { test, expect, expectTypeOf } from "vitest";
import { Result, ResultGen } from "../index";

test("add", () => {
    expect(1 + 2).toBe(3);
});

test("return success", () => {
    const numResult = ResultGen.succeed(1);
    const stringResult = ResultGen.succeed("hello");
    const objectResult = ResultGen.succeed({ a: 1, b: 2 });

    expectTypeOf(numResult).toExtend<Result<number, string>>();
    expect(numResult.data).toBe(1);
    expectTypeOf(stringResult).toExtend<Result<string, number>>();
    expect(stringResult.data).toBe("hello");
    expectTypeOf(objectResult).toExtend<Result<{ a: number; b: number }, string>>();
    expect(objectResult.data).toEqual({ a: 1, b: 2 });
});

test("return failure", () => {
    const result = ResultGen.failed("error");
    expectTypeOf(result).toExtend<Result<number, string>>();
    expect(result.error).toBe("error");
});
