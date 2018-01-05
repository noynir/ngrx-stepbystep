const _ = require('lodash');
const faker = require('faker');

module.exports.generateUsers = (count = 100,allTeams=[], allteamRoles=[])=>{
  const teamIds = allTeams.map(t => t.id);
  return _.times(count,(n)=>{
      let phoneFormat = faker.phone.phoneNumberFormat(1);
      let teamId = faker.random.arrayElement(teamIds);
      let teamRoles = allteamRoles.filter( tr => tr.teamId === teamId);
      let role = faker.random.arrayElement(teamRoles);
      return {
        id :n+1,
        username: faker.internet.userName(),
        email: faker.internet.email(),
        teamId: teamId,
        roleId: role.roleId,
        info:{
            firstName:faker.name.firstName(),
            lastName:faker.name.lastName(),
            avatar: faker.internet.avatar(),
            phoneNumber: faker.phone.phoneNumber(phoneFormat)
        }
      }
  });
};

module.exports.generateRoles = (count = 50)=>{
  return _.uniqBy(_.times(count,(n)=>{
      return {
        id :n+1,
        title: faker.name.jobType()
      }
  }), r => r.title);
};
module.exports.generateTeams = (count = 5, allRoles=[])=>{

  return _.uniqBy(_.times(count,(n)=>{
    let start = faker.random.number( { min:0, max:allRoles.length-1});
    let end = faker.random.number({ min:start+1, max:start+5});
      return {
        id :n+1,
        name: faker.name.jobArea()
      }
  }),t => t.name);
};

module.exports.generateTeamRoles = (allTeams=[],allRoles=[])=>{

  let teamRoles = [];
  allTeams.forEach(team => {
    let start = faker.random.number( { min:0, max:allRoles.length-1});
    let end = faker.random.number({ min:start+1, max:start+5});
    let roles=allRoles.slice(start,end);
    roles.forEach( role => {
      teamRoles.push({ roleId:role.id, teamId:team.id });
    })

  })
  return teamRoles;
};



