pipeline {
    agent any

    environment {
        IMAGE_NAME = "realestate-frontend"
        CONTAINER_NAME = "frontend-container"
        PORT = "3000"
    }

    stages {

        stage('Checkout') {
            steps {
                git credentialsId: 'github-token',
                url: 'https://github.com/your-repo/frontend.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Deploy') {
            steps {
                sh """
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true

                docker run -d \
                --name $CONTAINER_NAME \
                -p $PORT:80 \
                $IMAGE_NAME
                """
            }
        }
    }

    post {
        success {
            echo "Frontend deployed successfully 🚀"
        }
        failure {
            echo "Frontend pipeline failed ❌"
        }
    }
}
