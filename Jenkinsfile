pipeline {
    agent any
    tools {
        nodejs '17.3.1'
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
