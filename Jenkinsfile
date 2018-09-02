node {
    def app

    stage('Clone repository'){
        checkout scm
    }
    
    stage('Build image'){
        docker.image("mongo").withRun("-e \"mongod --port ${env.PORT_DATA_COMPLAINS}\"") { c ->
            app = docker.image("silvablack/service_complains").inside("-e NODE_ENV=\"production\" -e URL_SERVICE_COMPLAINS=${env.URL_SERVICE_COMPLAINS} -e PORT_SERVICE_COMPLAINS=${env.PORT_SERVICE_COMPLAINS} -e URL_DATA_COMPLAINS=${env.URL_DATA_COMPLAINS} -e PORT_DATA_COMPLAINS=${env.PORT_DATA_COMPLAINS} -e URL_CACHE_COMPLAINS=${env.URL_CACHE_COMPLAINS} -e PORT_CACHE_COMPLAINS=${env.PORT_CACHE_COMPLAINS} -e  --link ${c.id}") {

                stage('Test unit'){
                    sh "npm test-unit"
                }

            }
        }
    }
}