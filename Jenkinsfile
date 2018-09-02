node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image service') {
        app = docker.build("silvablack/service_complains")
    }

    stage('RUN image'){
        app.run()
    }

    stage('Lint Code'){
        app.inside{
            sh 'echo \"Lint Code\"'
            sh "npm run lint"
        }
    }
    stage('Test unit'){
        app.inside{
            sh 'echo \"Test Unit\"'
            sh 'npm run test-unit'
        }
    }

    stage('Push image to Hub') {
        app.push()
    }

}
