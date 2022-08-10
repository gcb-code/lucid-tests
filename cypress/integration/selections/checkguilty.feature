Feature: Check Guilty

    Scenario Outline: Check correct message shown for guilty submission

        Given Regular user visits the homepage
        When They navigate to the judge step for making a case against kevin
        And They vote with the guilty option
        Then They should see this message as '<message>'
        Examples:
            | message                    |
            | You think Kevin is guilty! |