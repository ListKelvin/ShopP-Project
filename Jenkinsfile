pipeline{
    agent any

    stages {
        stage('Prepare...') {
            steps {
                sh 'yarn install'
                sh 'yarn build'
            }
        }
        stage('Build...') {
            steps {
                sh 'docker compose down'
                sh 'docker compose build --no-cache'
            }
        }
        stage('Deploy...') {
            when {
                expression {
                    currentBuild.result == null || currentBuild.result == 'SUCCESS'
                }
            }
            steps {
                sh 'docker compose up -d'
            }
        }
    }
}