import { RobotEyes, RobotHands, Dependencies } from '../../robots/greencommute/Robot';

context('Negative Test flows!', () => {
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies()
    const testEnv = 'dev';

    afterEach(()=>{
        robotHands.wait(1000);
    })
    
    describe("Verify if the location input stays intact when user navigates to Next page and comes back ", () => {
        it("Navigate to Job location page", ()=>{
            cy.navigateToJobLocationPage();
        })
        it("Enter Job location", ()=>{
            robotHands.fillJobLocation();
        })
        it("Navigate to Next page", ()=>{
            robotHands.clickOnNext();
        })
        it("Come Back to Your Job location page", ()=>{
            robotHands.clickOnBackButton()
        })
        it("Assert if the location input stays intact", ()=>{
            robotEyes.seesJobLocationSelected('Hyderabad, Telangana, India');
        })
    })

    describe("Enter an unrecognizable language text and verify the suggestions list", () => {
        // it("Launch the application", ()=>{
        //     dependencies.loadEnvironmentUrl(testEnv);
        // })
        // it("Enter your location and click on Next", ()=>{
        //     robotHands.fillYourLocation();
        //     robotHands.clickOnNext();
        // })
        it("Navigate to Job location page", ()=>{
            cy.navigateToJobLocationPage();
        })
        it("Enter unrecognizable language text in Job location", ()=>{
            robotHands.enterJobLocationText("ليونيكود");
        })
        it("Assert that no search suggestions are returned ", ()=>{
            robotEyes.seesNoOptionsInSuggestionDropdown();
        })
    })
    });