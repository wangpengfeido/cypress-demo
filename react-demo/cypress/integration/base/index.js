describe("Base", function () {
  it("form error", () => {
    cy.visit("http://localhost:3000/base");

    cy.contains("button", "confirm").click();

    cy.get("form .arco-row:nth-child(1) .arco-form-message")
      .should("have.text", "请输入名字")
      .should("have.css", "color", "rgb(245, 63, 63)");
  });

  it("form validate", () => {
    cy.visit("http://localhost:3000/base");

    cy.get("form .arco-row:nth-child(1)").as("name-form-item");
    cy.get("@name-form-item").find("input").type("arco");
    cy.contains("button", "confirm").click();
    cy.get("@name-form-item").find(".arco-form-message").should("not.to.exist");
  });
});
