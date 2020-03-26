$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:hellocucumber/is_it_friday_yet.feature");
formatter.feature({
  "name": "Is it Friday yet?",
  "description": "  Everybody wants to know when it\u0027s Friday",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FirstFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Today is or is not Friday",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "today is \"\u003cday\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.step({
  "name": "I should be told \"\u003canswer\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "day",
        "answer"
      ]
    },
    {
      "cells": [
        "Friday",
        "TGIF"
      ]
    },
    {
      "cells": [
        "Sunday",
        "Nope"
      ]
    },
    {
      "cells": [
        "anything else!",
        "Nope"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Today is or is not Friday",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FirstFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "today is \"Friday\"",
  "keyword": "Given "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions.today_is_Sunday(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions.i_ask_whether_it_s_Friday_yet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"TGIF\"",
  "keyword": "Then "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions.i_should_be_told(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Today is or is not Friday",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FirstFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "today is \"Sunday\"",
  "keyword": "Given "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions.today_is_Sunday(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions.i_ask_whether_it_s_Friday_yet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Nope\"",
  "keyword": "Then "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions.i_should_be_told(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Today is or is not Friday",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FirstFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "today is \"anything else!\"",
  "keyword": "Given "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions.today_is_Sunday(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions.i_ask_whether_it_s_Friday_yet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Nope\"",
  "keyword": "Then "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions.i_should_be_told(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:hellocucumber/is_it_friday_yet2.feature");
formatter.feature({
  "name": "Is it Friday yet? 2",
  "description": "  Everybody wants to know when it\u0027s Friday2",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SecondFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Today is or is not Friday2",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "today is \"\u003cday\u003e\"2",
  "keyword": "Given "
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet2",
  "keyword": "When "
});
formatter.step({
  "name": "I should be told \"\u003canswer\u003e\"2",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "day",
        "answer"
      ]
    },
    {
      "cells": [
        "Friday",
        "TGIF"
      ]
    },
    {
      "cells": [
        "Sunday",
        "Nope"
      ]
    },
    {
      "cells": [
        "anything else!",
        "Nope"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Today is or is not Friday2",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SecondFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "today is \"Friday\"2",
  "keyword": "Given "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions2.today_is_Sunday(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet2",
  "keyword": "When "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions2.i_ask_whether_it_s_Friday_yet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"TGIF\"2",
  "keyword": "Then "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions2.i_should_be_told(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Today is or is not Friday2",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SecondFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "today is \"Sunday\"2",
  "keyword": "Given "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions2.today_is_Sunday(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet2",
  "keyword": "When "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions2.i_ask_whether_it_s_Friday_yet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Nope\"2",
  "keyword": "Then "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions2.i_should_be_told(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Today is or is not Friday2",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SecondFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "today is \"anything else!\"2",
  "keyword": "Given "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions2.today_is_Sunday(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet2",
  "keyword": "When "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions2.i_ask_whether_it_s_Friday_yet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Nope\"2",
  "keyword": "Then "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions2.i_should_be_told(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});