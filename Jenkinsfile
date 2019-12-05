pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'latest'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        echo 'message'
        timeout(time: 60)
        retry(count: 20)
        sleep(unit: 'MINUTES', time: 60)
        bat 'script'
        ws(dir: 'Dir')
        node(label: 'Label')
        build 'Job'
        warnError(message: 'Message')
        catchError()
      }
    }

  }
}