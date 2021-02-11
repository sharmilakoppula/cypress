import { RobotEyes , RobotHands, Dependencies } from '../../robots/greencommute/Robot';

context('Happy Path flows!', () => {
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies()
    const testEnv = 'dev';

    afterEach(()=>{
        robotHands.wait(1000);
    })

    let testDetails;
    before(() => {
        cy.fixture('testdata').then((data) => {
            testDetails = data;
        })
    })
    
    describe("Navigate to Dashboard", () => {
        it("Launch the application", ()=>{
            dependencies.loadEnvironmentUrl(testEnv);
        })
        it("Skip 'Your location'", ()=>{
            robotHands.clickOnSkip();
        })
        it("Skip 'Job Location'", ()=>{
            robotHands.clickOnSkip();
        })
        it("Skip 'Your skills'", ()=>{
            robotHands.clickOnFinish();
        })
        it("Assert the default page", ()=>{
            robotEyes.seesDashboardPage();
            robotEyes.seesDashboardLabel();
        })
    })

    describe("Save a job", () => {
        it("Launch the application", ()=>{
            dependencies.loadEnvironmentUrl(testEnv);
        })
        it("Enter your location and click on Next", ()=>{
            robotHands.fillYourLocation();
            robotHands.clickOnNext();
        })
        it("Enter Job location and click on Next", ()=>{
            robotHands.fillJobLocation();
            robotHands.clickOnNext();
        })
        it("Enter your skills and click on Finish", ()=>{
            robotHands.enterSkills(testDetails.job_types.java_developer);
            robotHands.clickOnFinish();
        })
        it("Go to Save Jobs page", ()=>{
            robotHands.goToSaveJobsPage();
        })
        it("Verify if the job is already saved and remove it before adding it", ()=>{ 
            if(robotEyes.seesSavedJob(testDetails.job_types.java_developer)){ 
                robotHands.selectTheJob(testDetails.job_types.java_developer);
                robotHands.removeTheSelectedJob();
                robotEyes.seesJobRemovedMessage();
                }
        })
        it("Go back to Find Jobs page", ()=>{
            robotHands.goToFindJobsPage();
        })
    
        it("Select the Job and click on save", ()=>{
            robotHands.selectTheJob(testDetails.job_types.java_developer);
            robotHands.saveTheSelectedJob();
        })
        it("Assert the succes message", ()=>{
            robotEyes.seesJobSavedMessage();
        })
        it("Go to Save Jobs page", ()=>{
            robotHands.goToSaveJobsPage()
        })
        it("Verify if the job saved is available in Saved jobs", ()=>{
            robotEyes.seesSavedJob(testDetails.job_types.java_developer);
        })
    
    })
    });