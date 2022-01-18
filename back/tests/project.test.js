const request = require("supertest");
const app = require("../server");
const { query } = require("../db-connection");

const projectPayload = {
  title: "Projet 1",
  description: "Description de test",
  start_date: "2022-01-17",
  end_date: "2022-01-17",
  tags: "ReactJs, Javascript",
};

const projectPayloadWithActive = {
  title: "Projet 1",
  description: "Description de test",
  start_date: "2022-01-17",
  end_date: "2022-01-17",
  tags: "ReactJs, Javascript",
  active: true,
};

const badProjectPayload = {
  title: "Projet 1",
  start_date: "2022-01-17",
  end_date: "2022-01-17",
};

const putProjectPayload = {
  title: "Projet 2",
};

describe("Test API endpoint /project", () => {
  beforeAll(async () => {
    const sql = "SET FOREIGN_KEY_CHECKS=0";
    const sql2 = "TRUNCATE TABLE project";
    const sql3 = "SET FOREIGN_KEY_CHECKS=1";
    await query(sql);
    await query(sql2);
    await query(sql3);
  });
  describe("GET all project", () => {
    it("GET /api/project and should return code 200", async () => {
      const res = await request(app).get("/api/project");
      expect(res.statusCode).toBe(200);
    });
  });
  describe("POST new project", () => {
    it("POST /api/project with invalid value return code 422", async () => {
      const res = await request(app).post("/api/project").send(badProjectPayload);
      expect(res.statusCode).toBe(422);
    });
    it("POST /api/project with valid value return code 201", async () => {
      const res = await request(app).post("/api/project").send(projectPayload);
      expect(res.statusCode).toBe(201);
    });
    it("POST /api/project with valid value and optional value 'active' return code 201", async () => {
      const res = await request(app).post("/api/project").send(projectPayloadWithActive);
      expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining({ active: 1 })]));
      expect(res.statusCode).toBe(201);
    });
  });
  describe("PUT project", () => {
    it("PUT /api/project/1 with valid value return code 200", async () => {
      const res = await request(app).put("/api/project/1").send(putProjectPayload);
      expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining({ title: "Projet 2" })]));
      expect(res.statusCode).toBe(200);
    });
    it("PUT /api/project/3 with unknown id return code 404", async () => {
      const res = await request(app).put("/api/project/3").send(putProjectPayload);
      expect(res.statusCode).toBe(404);
    });
  });
  describe("DELETE project", () => {
    it("DELETE /api/project/1 return code 204", async () => {
      const res = await request(app).delete("/api/project/1");
      expect(res.statusCode).toBe(204);
    });
    it("DELETE /api/project/3 with unknown id return code 404", async () => {
      const res = await request(app).delete("/api/project/3");
      expect(res.statusCode).toBe(404);
    });
  });
});
