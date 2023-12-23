import request from "supertest";
import app from "../server";

describe("Test app.ts", () => {
  let id: string;
  test("Get All Products", async () => {
    const res = await request(app).get("/products");
    expect(res.body).toEqual([]);
  });

  test("Create a Product", async () => {
    const res = await request(app).post("/products").send({ name: "Test", description: "testing" })
    expect(res.body.id).toBeDefined()
    id = res.body.id
  })

  test("Update a Product", async () => {
    const res = await request(app).put(`/products/${id}`).send({ name: "Testing", description: "testing" })
    expect(res.body.name).toEqual("Testing")
  })

  test("Delete a Product", async () => {
    const res = await request(app).delete(`/products/${id}`)
    expect(res.statusCode).toEqual(204)
  })
  
});
