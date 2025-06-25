import { describe, expect, test, it, vi } from "vitest"; // @jest/globals highly compatible with jest
import request from "supertest";
import { app } from "../index";
import { prismaClient } from "../__mocks__/db"; //- require for moke return value

//` When writing unit tests , you mock out all external service calls.

//` Mocking :
//- Problem : What if I want to use the value that the database call returns?
// vi.mock('../db', () => ({
//   prismaClient: { sum: { create: vi.fn() }}
// }));

//`Deep Mocking (__mocks__/FileName.ts):
//~ Create a __mocks__ directory in the same directory as the module you want to mock.
vi.mock("../db");

describe("spying on methods inputs", () => {
  it("should return the sum of two numbers", async () => {
    prismaClient.sum.create.mockResolvedValue({
      id: 1,
      a: 1,
      b: 1,
      result: 3,
    });

    //- Spying the database call for testing purposes
    vi.spyOn(prismaClient.sum, "create");

    const res = await request(app).post("/spy").send({
      a: 1,
      b: 2,
    });


    //- Check if the database call was made with correct inputs
    expect(prismaClient.sum.create).toHaveBeenCalledWith({
      data: {
        a: 1,
        b: 2,
        result: 3,
      },
    });
    //- Check if the database call was made once
    expect(prismaClient.sum.create).toHaveBeenCalledTimes(1);


    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(3);
  });
});

describe("mocking Return Value", () => {
  it("should return the sum of two numbers", async () => {
    //- Mocking external service return values
    prismaClient.sum.create.mockResolvedValue({
      id: 1,
      a: 1,
      b: 1,
      result: 3,
    });

    const res = await request(app).post("/mokeReturnValue").send({
      a: 1,
      b: 2,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(3);
  });

  it("should return 411 if no inputs are provided", async () => {
    const res = await request(app).post("/mokeReturnValue").send({});
    expect(res.statusCode).toBe(411);
    expect(res.body.message).toBe("Incorrect inputs");
  });
});

describe("mocking extranal sevice(DB calls)", () => {
  it("should return the sum of two numbers", async () => {
    const res = await request(app).post("/mock").send({
      a: 1,
      b: 2,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(3);
  });

  it("should return the sum of two negative numbers", async () => {
    const res = await request(app).post("/mock").send({
      a: -1,
      b: -2,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(-3);
  });

  it("should return the sum of two zero number", async () => {
    const res = await request(app).post("/mock").send({
      a: 0,
      b: 0,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(0);
  });
});

describe("POST /sum", () => {
  it("should return the sum of two numbers", async () => {
    const res = await request(app).post("/sum").send({
      a: 1,
      b: 2,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(3);
  });

  it("should return the sum of two negative numbers", async () => {
    const res = await request(app).post("/sum").send({
      a: -1,
      b: -2,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(-3);
  });

  it("should return the sum of two zero number", async () => {
    const res = await request(app).post("/sum").send({
      a: 0,
      b: 0,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(0);
  });
});
