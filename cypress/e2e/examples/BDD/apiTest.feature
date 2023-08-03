Feature: Api Tests

  @Api
  Scenario: Api Test Scenario 1
    When get a book instead of all books

  @Api
  Scenario: Api Test Scenario 2
    When get all books from ui and api
    Then compare ui and api