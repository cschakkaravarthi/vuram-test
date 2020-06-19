#!/bin/bash
/* groovylint-disable-next-line CompileStatic */
pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                echo 'hello  Test'
            }
        }
        stage('Slack Notification') {
            steps {
                /* groovylint-disable-next-line LineLength, SpaceAroundMapEntryColon */
                slackSend channel: 'vuram-jenkins', color: 'good', message: 'Hello', tokenCredentialId: '0fb0b394-204d-4ce0-9bc9-e91d2163c6de'
            }
        }
        stage('Build') {
            steps {
                echo 'hello  Build $(date)'
                sh 'npm -v'
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
