package hellocucumber;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import static org.junit.Assert.assertEquals;

class IstItFriday2{
    static String isItFriday(String today){
        return "Friday".equals(today) ? "TGIF" : "Nope";
    }
}

public class StepDefinitions2 {

    private String today;
    private String actualAnswer;

    @Before("@SecondFeature")
    public void beforeTest2(){
        System.out.println("BEFORE TEST2");
    }

    @After("@SecondFeature")
    public void afterTest2(){
        System.out.println("AFTER TEST2");
    }

    @Given("today is {string}2")
    public void today_is_Sunday(String today) {
        this.today = today;
    }

    @When("I ask whether it's Friday yet2")
    public void i_ask_whether_it_s_Friday_yet(){
        actualAnswer = IstItFriday2.isItFriday(today);
    }

    @Then("I should be told {string}2")
    public void i_should_be_told(String expectedAnswer){
        assertEquals(expectedAnswer, actualAnswer);
    }
}
