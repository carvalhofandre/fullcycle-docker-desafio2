FROM mysql:5.7


ENV MYSQL_DATABASE=nodedb
ENV MYSQL_ROOT_PASSWORD=root

ADD nodedb.sql /docker-entrypoint-initdb.d

EXPOSE 3306