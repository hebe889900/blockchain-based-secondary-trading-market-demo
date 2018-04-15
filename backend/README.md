## Pre-requirement

1. Run mysql in local env
2. Create a database named anomaly
3. Update database configuration in .env
    ```
    DB_DIALECT=mysql
    DB_HOST=localhost
    DB_PORT=3306
    DB_NAME=anomaly
    DB_USER=root
    DB_PASSWORD=12345
    ```
4. Make sure node version > 8.0

## Quickstart

```
  npm install
  npm start
```
## Build frontend

```
  cd src/js/frontend
  npm run build
```

DB
----
Create a mysql instance with name "anomaly", and root/12345 and mysql port 3306 mapping
```
docker run -ti -d -p 3309:3306 -e MYSQL_DATABASE=anomaly -e MYSQL_ROOT_PASSWORD=12345 mysql:5.7.18
docker run -ti -d -p 3310:3306 -e MYSQL_DATABASE=anomaly -e MYSQL_ROOT_PASSWORD=12345 mysql:5.7.18
```

API
----
1. mute alert
```
$ curl -XPOST -d '{"dashboardid": "dashboardid", "alertname": "alertname", "datasourceid": "datasourceid"}'  -H "Content-Type: application/json" http://localhost:3000/anomaly/mutealert
```

2. get alert list
```
$ curl -XGET -H "Content-Type: application/json" http://localhost:3000/anomaly/getalerts?dashboardId=4ad594a0-30c2-11e8-9f86-598db5d0ad8c
```

3. insert a new datasource locally
```
$ curl -XPOST -d '{"type": "prometheus", "name": "demo", "url": "localhost:9090", "username": "yyy", "password": "1234"}'  -H "Content-Type: application/json" http://localhost:3000/datasource
{
  "message": "Successfully created datasource",
  "data": {
    "id": "297f3020-2e76-11e8-8801-95f105f45f6e"
  }
}
```

4. get datasource list locally
```
$ curl -XGET -H "Content-Type: application/json" http://localhost:3000/datasource
{
  "data": [
    {
      "id": "6a8707a0-2e6c-11e8-a09b-ab7bcfe202c4",
      "name": "demo",
      "type": "prometheus",
      "url": "localhost:9090",
      "username": "yyy",
      "password": "1234",
      "createdAt": "2018-03-23T07:33:01.000Z",
      "updatedAt": "2018-03-23T07:33:01.000Z"
    }
  ]
}
```

5. get datasource info locally
```
$ curl -XGET -H "Content-Type: application/json" http://localhost:3000/datasource/297f3020-2e76-11e8-8801-95f105f45f6e
{
  "data": {
    "id": "297f3020-2e76-11e8-8801-95f105f45f6e",
    "name": "demo",
    "type": "prometheus",
    "url": "http://localhost:9090",
    "username": "yyy",
    "password": "1234",
    "createdAt": "2018-03-23T08:42:47.000Z",
    "updatedAt": "2018-03-23T08:44:23.000Z"
  }
}

$ curl -XGET -H "Content-Type: application/json" http://localhost:3000/datasource/6a8707a0-2e6c-11e8-a09b-ab7bcfe202c4
{
  "message": "Not found"
}
```

6. create dashboard
```
$ curl -XPOST -d '{"name":"demo_dashboard","config":[{"target":"process_resident_memory_bytes","chartType":"text","datasourceId":"297f3020-2e76-11e8-8801-95f105f45f6e"}, {"target":"scrape_duration_seconds","chartType":"text","datasourceId":"297f3020-2e76-11e8-8801-95f105f45f6e"}]}'  -H "Content-Type: application/json" http://localhost:3000/dashboard
{
  "message": "Successfully created dashboard",
  "data": {
    "id": "7cc257d0-2e76-11e8-8801-95f105f45f6e"
  }
}
```

7. get dashboard list
```
$ curl -XGET -H "Content-Type: application/json" http://localhost:3000/dashboard
{
  "data": [
    {
      "id": "5ede6f80-2e74-11e8-a09b-ab7bcfe202c4",
      "name": "demo_dashboard",
      "config": [
        {
          "target": "process_resident_memory_bytes",
          "chartType": "text",
          "datasourceId": "6a8707a0-2e6c-11e8-a09b-ab7bcfe202c4"
        },
        {
          "target": "scrape_duration_seconds",
          "chartType": "text",
          "datasourceId": "6a8707a0-2e6c-11e8-a09b-ab7bcfe202c4"
        }
      ],
      "createdAt": "2018-03-23T08:29:57.000Z",
      "updatedAt": "2018-03-23T08:29:57.000Z"
    },
    {
      "id": "7cc257d0-2e76-11e8-8801-95f105f45f6e",
      "name": "demo_dashboard",
      "config": [
        {
          "target": "process_resident_memory_bytes",
          "chartType": "text",
          "datasourceId": "297f3020-2e76-11e8-8801-95f105f45f6e"
        },
        {
          "target": "scrape_duration_seconds",
          "chartType": "text",
          "datasourceId": "297f3020-2e76-11e8-8801-95f105f45f6e"
        }
      ],
      "createdAt": "2018-03-23T08:45:06.000Z",
      "updatedAt": "2018-03-23T08:45:06.000Z"
    }
  ]
}
```

8. get dashboard metrics info by dashboard
```
$ curl -XGET -H "Content-Type: application/json" http://localhost:3000/dashboard/7cc257d0-2e76-11e8-8801-95f105f45f6e
{
  "data": {
    "id": "7cc257d0-2e76-11e8-8801-95f105f45f6e",
    "name": "demo_dashboard",
    "config": [
      {
        "target": "process_resident_memory_bytes",
        "chartType": "text",
        "datasourceId": "297f3020-2e76-11e8-8801-95f105f45f6e"
      },
      {
        "target": "scrape_duration_seconds",
        "chartType": "text",
        "datasourceId": "297f3020-2e76-11e8-8801-95f105f45f6e"
      }
    ],
    "createdAt": "2018-03-23T08:45:06.000Z",
    "updatedAt": "2018-03-23T08:45:06.000Z"
  }
}
```
