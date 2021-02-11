pipeline {
  agent any
  	stages {
		
		
		
		stage('build') {
			
        steps {
                    sh 'npm install -g yarn'
    				sh 'yarn install'		               
    				sh 'yarn test:headless'
		                
			} 
        }
  			
  			}
	
	
}