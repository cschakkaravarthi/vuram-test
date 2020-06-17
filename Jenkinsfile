/* groovylint-disable CompileStatic */
pipeline {
    agent any
    stages {
        stage('Slack Notification') {
            steps {
                /* groovylint-disable-next-line LineLength, SpaceAroundMapEntryColon */
                slackSend channel: 'vuram-jenkins', color: 'good', message: 'hai', teamDomain: 'onething-talk', tokenCredentialId: '0d40401d-26c4-45c9-a962-f24e0204b0ac'
            }
        }
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
