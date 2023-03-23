## Docker run in dev.yml

- $ docker-compose -f docker-compose.dev.yml up -d

-d : run in backgroud
-f : choose file

## 실행 상태 확인

- $ docker ps

## 실행 상태 확인 pm2

- $ docker exec -it express_task_dev pm2 list

## 실행 중인 도커 종료

- $ docker compose down

## env 예시

DB_USR ="root"
DB_PORT ="5432"
DB_PASSWORD ="5432"
MEMBER_LIST ="wh,dc"
MEMBER_LIST_GITHUB="cc,cc"
PORT = 3000
SLACK_API_TOKEN="a"
SLACK_CHANNEL_ID="c"

-$ docker inspect postgresql
