    FROM golang:1.18.2-alpine3.16 as build
     
    WORKDIR /source
    COPY . .
     
    ARG COMMIT
    RUN CGO_ENABLED=0 go mod tidy
    RUN CGO_ENABLED=0 go build -ldflags "-s -w -X main.commit=${COMMIT}" -o bin/gf-ob-web main.go
     
    FROM alpine:3.12
     
    COPY --from=build /source/bin/gf-ob-web /bin/application/gf-ob-web
    COPY --from=build /source/database /bin/application/database
     
    EXPOSE 5002
     
    ENTRYPOINT ["./bin/application/gf-ob-web"]