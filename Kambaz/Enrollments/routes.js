import * as enrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.post("/api/enrollments", async (req, res) => {
    const { userId, courseId } = req.body;
    enrollmentsDao.enrollUserInCourse(userId, courseId);
    res.status(201).send({ message: "User enrolled successfully" });
  });

  app.delete("/api/enrollments", async (req, res) => {
    const { userId, courseId } = req.body;
    const status = enrollmentsDao.unenrollUserFromCourse(userId, courseId);
    res.send(status);
  });

  app.get("/api/enrollments", async (req, res) => {
    const enrollments = enrollmentsDao.getEnrollments();
    res.send(enrollments);
  });
}
