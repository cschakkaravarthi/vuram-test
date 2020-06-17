pipeline {
    stages {
        stage('Test') {
            steps {
                sh 'echo this is test.'
            }
        }
        stage('Build') {
            steps {
                //sh 'npm install'
                sh 'echo Build $BUILD_NUMBER'
            }
        }
        stage('Deploye') {
            steps {
                sh 'echo Hai Deploye'
            }
        }
    }
}
