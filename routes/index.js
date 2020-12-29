module.exports = function getRoutes({ server, app }) {


  server.get("/ticket-prices", (req, res) => {
    return app.render(req, res, "/ticket-prices");
  });

  server.get("/speakers/new", (req, res) => {
    return app.render(req, res, "/speakers-add");
  });

  server.get("/speakers/edit/:slug", (req, res) => {
    const { slug } = req.params;
    return app.render(req, res, "/speakers-edit", { userId: slug });
  });

  server.get("/speakers", (req, res) => {
    return app.render(req, res, "/speakers");
  });

  server.get("/sessions/new", (req, res) => {
    return app.render(req, res, "/sessions-add");
  });

  server.get("/sessions", (req, res) => {
    return app.render(req, res, "/sessions");
  });

  server.get("/employees/new", (req, res) => {
    return app.render(req, res, "/employees-add");
  });

  server.get("/employees", (req, res) => {
    return app.render(req, res, "/employees");
  });

  server.get("/attendees", (req, res) => {
    return app.render(req, res, "/attendees");
  });

  server.get("/attendees/new", (req, res) => {
    return app.render(req, res, "/attendees-add");
  });

  server.get("/", (req, res) => {
    return app.render(req, res, "/homepage");
  });

  server.get("/*", (req, res) => {
    res.status(404);
    app.render(req, res, `/error-page`);
  });
};
