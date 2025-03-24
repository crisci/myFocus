pipeline {
    agent any
    
    stages {
        stage('Install Node.js') {
            steps {
                script {
                    // Install Node.js using NodeSource
                    sh '''
                        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
                        # in lieu of restarting the shell
                        \. "$HOME/.nvm/nvm.sh"

                        // Download and install Node.js:
                        nvm install 22
                    '''
                }
            }
        }
        
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
