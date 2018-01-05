const generator = require('./generateData');
const path = require('path');
const cors = require('cors');
const faker = require('faker');
const rolesData = generator.generateRoles(faker.random.number({min:10, max:100}));
const teamsData = generator.generateTeams(faker.random.number({min:5,max:10}));
const teamrolesData = generator.generateTeamRoles(teamsData,rolesData);
const usersData = generator.generateUsers(faker.random.number({min:10, max:100}),teamsData, teamrolesData);

const jsonServer = require('json-server')
const server = jsonServer.create();
server.use(jsonServer.bodyParser)
server.use(jsonServer.rewriter({
  "/api/*": "/$1",
  "/teams/:id/roles": '/teamroles?teamId=:id&_expand=role'
}));


const router = jsonServer.router({users:usersData, roles:rolesData, teams:teamsData, teamroles:teamrolesData });

const db = router.db; //lowdb instance
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(cors());

server.put('/users',(req,res)=>{
  let users = req.body;
  Promise.all(users.map(user=>{
    return db.get('users')
      .find({id:user.id})
      .assign(user)
      .write();
  })).then((data)=>{
    console.log(data);
    res.send({success:true})
  });
});

server.use(router);

server.listen(3000, (param) => {
  console.log(`JSON Server is listening on 3000`);
});


