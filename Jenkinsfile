pipeline {
    agent any

    tools {
        nodejs '22.14.0'
        dockerTool 'latest'
    }

    
    stages {
        stage('Setup') {
            steps {
                sh '''
                    echo "Checking Node.js and Docker versions..."
                    node -v
                    docker --version
                '''
            }
        }

        stage('Trivy') {
            steps {
               sh'''
                    echo "Installing Trivy"
                    which wget
                '''
            }
        }

    }
}
