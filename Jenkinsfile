pipeline {
    agent any

    tools {
        nodejs('22.14.0')
    }
    
    stages {
        stage('build') {
            steps {
                sh '''
                    ls
                    pwd
                    node -v
                '''
                
            }
        }
    }
}
