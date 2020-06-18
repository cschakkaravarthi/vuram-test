/* groovylint-disable-next-line CompileStatic */
pipeline {
    agent any
    stages {
        stage('Slack Notification') {
            steps {
                /* groovylint-disable-next-line LineLength, SpaceAroundMapEntryColon */
                slackSend channel: 'vuram-jenkins', color: 'good', message: 'hai', teamDomain: 'onething-talk', tokenCredentialId: '9AGIpj59tDBYFldd8kXklfmP'
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
