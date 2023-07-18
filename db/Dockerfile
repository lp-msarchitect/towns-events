FROM postgres:15.3-alpine3.18 as dumper

COPY my_dump_lp2.sql /docker-entrypoint-initdb.d/

RUN ["sed", "-i", "s/exec \"$@\"/echo \"skipping...\"/", "/usr/local/bin/docker-entrypoint.sh"]

ENV POSTGRES_USER=leonidpetrov
ENV POSTGRES_PASSWORD=32167
ENV PGDATA=/data

RUN ["/usr/local/bin/docker-entrypoint.sh", "postgres"]

# final build stage
FROM postgres:15.3-alpine3.18

COPY --from=dumper /data $PGDATA