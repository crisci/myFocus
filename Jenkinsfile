pipeline {
    agent any

    tools {
        nodejs '22.14.0'
        dockerTool 'latest'
    }

    environment {
        TRIVY_PATH = "$HOME/bin/trivy"
        TEMPLATE_PATH = "$HOME/trivy-html.tpl"
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

        stage('Installing Trivy') {
            steps {
               sh'''
                    echo "Installing Trivy"
                    mkdir -p $HOME/bin
                    curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b $HOME/bin
                    chmod +x $HOME/bin/trivy
                    $HOME/bin/trivy --version

                    echo "Downloading Trivy HTML template..."
                    curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/html.tpl -o $TEMPLATE_PATH
                '''
            }
        }

        stage('SCA Analysis') {
            steps {
                sh'''
                    $HOME/bin/trivy fs --scanners vuln,secret,config,license --format template --template @"$TEMPLATE_PATH" -o trivy-report.html ./
                '''
            }
        }

    }
}
