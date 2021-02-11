pipeline {
  agent any
  	stages {
		
		
		
		stage('build') {
			
        steps {
                    sh 'sudo npm install -g yarn'
    				sh 'sudo yarn install'		               
    				sh 'sudo yarn test:headless'
		                
			} 
        }
  			
  			}
	
	
}