/* groovylint-disable CompileStatic */
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
                slackSend channel: 'vuram-jenkins', color: 'good', message: 'hai', teamDomain: 'onething-talk', tokenCredentialId: '9AGIpj59tDBYFldd8kXklfmP'
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
            }
        }
        stage('Deploying') {
            steps {
                sh 'npm start'
            }
        }
    }
}
