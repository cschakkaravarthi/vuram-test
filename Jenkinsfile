/* groovylint-disable-next-line CompileStatic */
pipeline {
    agent none
    stages {
        stage('Test') {
            steps {
                sh 'echo this is test.'
            }
        }
        stage('Build') {
            steps {
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
