Feature: Check Date

  Scenario Outline: Check date appears in timeline

    Given Regular user visits the homepage
    When They navigate to the case study eye witness step
    Then They should see a date on the timeline as '<date>'
    Examples:
      | date     |
      | 10-12-22 |