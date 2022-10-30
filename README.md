## Installation

Requires:
[Node.js](https://nodejs.org/)
[Docker desktop](https://docs.docker.com/desktop/install/windows-install/)

Clone repository and move to dev branch
```sh
git clone https://github.com/Hunteando/ecommerce-s1-g13.git
cd ecommerce-s1-g13.git
git checkout dev
```

Install dependencies and run backend
```sh
npm i
npm run dev
```

Install dependencies and run frontend
```sh
cd frontend
npm i
npm run dev
```

Create and run MySQL container
```sh
docker pull mysql
docker run --name hunteando -e MYSQL_ROOT_PASSWORD=hunteando -e MYSQL_DATABASE=vivero13 -p 3306:3306 -d -v mysql:/var/lib/mysql mysql
```

Create Data Base
```sh
docker exec -it hunteando bash
Then copy and paste viviero13.sql and enter
And copy and paste vivero13-createUserTable.sql and enter
```
