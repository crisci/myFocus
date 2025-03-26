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
                    mkdir -p $HOME/bin
                    curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b $HOME/bin
                    chmod +x $HOME/bin/trivy
                    $HOME/bin/trivy --help
                '''
            }
        }
        
        stage('SCA Analysis') {
            steps {
                sh'''
                    ls
                    cd myFocus
                '''
            }
        }

    }
}
