/* groovylint-disable-next-line CompileStatic */
pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Slack Notification') {
            steps {
                /* groovylint-disable-next-line LineLength, SpaceAroundMapEntryColon */
                slackSend channel: 'vuram-jenkins', color: 'good', message: 'Hello', tokenCredentialId: '0fb0b394-204d-4ce0-9bc9-e91d2163c6de'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                /* groovylint-disable-next-line SpaceAroundMapEntryColon */
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}