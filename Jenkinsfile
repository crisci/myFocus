pipeline {
    agent any

    tools {
        nodejs('22.14.0')
        docker('docker:latest')
    }

    
    stages {
        stage('Setup') {
            steps {
                sh '''
                    node -v
                    docker -v
                '''
                
            }
        }

        stage('Trivy') {
            steps {
                sh'''
                    echo "Running Trivy..."
                '''
            }
        }

    }
}
