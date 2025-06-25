import {describe, expect, test, it, vi} from 'vitest'; // @jest/globals highly compatible with jest
import request from "supertest";
import { app } from "../index";

//` When writing unit tests , you mock out all external service calls. 

//` Mocking :
//- Problem : What if I want to use the value that the database call returns?
// vi.mock('../db', () => ({
//   prismaClient: { sum: { create: vi.fn() }}
// }));

//`Deep Mocking (__mocks__/FileName.ts):
//~ Create a __mocks__ directory in the same directory as the module you want to mock.
vi.mock('../db');

describe("mocking extranal sevice(DB calls)", () => {
    it("should return the sum of two numbers", async () => {
        const res = await request(app).post("/mock").send({
          a: 1,
          b: 2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
      });

      it("should return the sum of two negative numbers", async () => {
        const res = await request(app).post("/mock").send({
          a: -1,
          b: -2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(-3);
      });

      it("should return the sum of two zero number", async () => {
        const res = await request(app).post("/mock").send({
          a: 0,
          b: 0
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(0);
      });
});



describe("POST /sum", () => {
    it("should return the sum of two numbers", async () => {
        const res = await request(app).post("/sum").send({
          a: 1,
          b: 2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
      });

      it("should return the sum of two negative numbers", async () => {
        const res = await request(app).post("/sum").send({
          a: -1,
          b: -2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(-3);
      });

      it("should return the sum of two zero number", async () => {
        const res = await request(app).post("/sum").send({
          a: 0,
          b: 0
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(0);
      });
});
