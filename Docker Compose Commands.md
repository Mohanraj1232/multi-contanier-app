# Multi-Container App

A Node.js application with MongoDB running in Docker containers.

## Prerequisites

- Docker
- Docker Compose

## Getting Started

### Build and start all services

```bash
docker-compose up -d
```

The `-d` flag runs containers in detached mode (background).

### Or run with logs visible

```bash
docker-compose up
```

## Access the Application

- **App:** http://localhost:3000
- **MongoDB:** localhost:27017

## Useful Commands

### Stop all services

```bash
docker-compose down
```

### Rebuild and start (after code changes)

```bash
docker-compose up --build
```

### View logs

```bash
docker-compose logs -f
```

### Check running containers

```bash
docker-compose ps
```

### Stop services (keep volumes)

```bash
docker-compose stop
```

### Remove everything including volumes

```bash
docker-compose down -v
```

## Services

- **app**: Node.js application (port 3000)
- **mongo**: MongoDB database (port 27017)
