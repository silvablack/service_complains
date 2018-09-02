node {
    checkout scm
    docker.image('mongo:alphine').withRun('-e "mongod --port ${env.PORT_DATA_COMPLAINS}"') { c ->
        docker.image('silvablack/complains:1.0.0').inside("--link ${c.name}") {
            /*
             * Run some tests which require MySQL, and assume that it is
             * available on the host name `db`
             */
            sh 'make check'
        }
    }
}