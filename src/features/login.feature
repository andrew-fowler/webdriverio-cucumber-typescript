Feature: The internet - Logging in

  Scenario: User can log in with valid details
    Given I attempt to log in with valid details
    Then I am presented with the success message
    And the logout button is visible