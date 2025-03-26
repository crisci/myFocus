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
                    wget https://github.com/aquasecurity/trivy/releases/download/v0.18.3/trivy_0.18.3_Linux-64bit.deb
                    sudo dpkg -i trivy_0.18.3_Linux-64bit.deb
                    trivy --version
                '''
            }
        }

    }
}
