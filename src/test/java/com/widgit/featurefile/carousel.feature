
Feature:   Carousel

  Background:
    Given   User is on HomePage
    And     User clicks on the Product Link
    And     User clicks on Widgit Online link

  Scenario: Verify Carousel navigates right
    When    User clicks on right navigation button
    Then    The content shifts once to the right with new img displaying text "Mind"

  Scenario: Verify Carousel navigates left
    When    User clicks on left navigation button
    Then    The content shifts once to the left with new img displaying text "EAL"

  Scenario: Verify Carousel rotates through all the content
    When    User has navigated through all the content
    Then    The carousel goes back and shows the first item "Flashcards"again



