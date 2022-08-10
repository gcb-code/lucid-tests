Feature: Check Score

    Scenario Outline: Check Score On Homepage

        Given Regular user visits the homepage for the first time
        When They click on the start button
        Then Their score should be visible as '<score>'
        Examples:
            | score |
            | 0     |