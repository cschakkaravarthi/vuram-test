/* groovylint-disable-next-line CompileStatic */
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
                echo 'This is for build'
                sh 'npm install'
            }
        }
        stage('Deploying') {
            steps {
                echo '** Deploying ** '
                sh 'npm start'
            }
        }
    }
}
