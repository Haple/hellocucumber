# new feature
# Tags: optional
@SecondFeature
Feature: Is it Friday yet? 2
  Everybody wants to know when it's Friday2

  Scenario Outline: Today is or is not Friday2
    Given today is "<day>"2
    When I ask whether it's Friday yet2
    Then I should be told "<answer>"2
    Examples:
      | day | answer |
      | Friday | TGIF |
      | Sunday | Nope |
      | anything else! | Nope |
