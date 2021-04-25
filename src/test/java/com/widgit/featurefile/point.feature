Feature:     Point

 Background:
     Given   User is on Home page
     And     User clicks on About Widgit link

  Scenario:  Check symbols appear correctly
     Given   A word has a valid symbol, or valid symbols
     And     verify title of the Page"About Us | Widgit"
     When    A user hovers over a word
     And     After a short delay
     Then    The word should be highlighted
     And     A symbol,or multiple symbols,"[support, support, support]" should appear for that context
