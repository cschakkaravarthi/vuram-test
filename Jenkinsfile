/* groovylint-disable CompileStatic */
pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                echo 'this is for test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deploying') {
            steps {
                sh 'npm start'
            }
        }
    }
}
