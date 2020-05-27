# Smart house management | SoftServe ITA

Server for representing smart house. It allows to manage houses and devices
inside. You can add, get, remove and change houses and devices. Api incudes the
versioning system. v1 uses .json for store, v2 - MySQL, v3 - MongoDB

**API**

/api/[v1/v2/v3]/homes/ - CREATE new home<br />
/api/[v1/v2/v3]/homes/ - GET all homes<br />
/api/[v1/v2/v3]/homes/:homeid - GET home by id<br />
/api/[v1/v2/v3]/homes/:homeid - DELETE home by id<br />
/api/[v1/v2/v3]/homes/:homeid - UPDATE home by id<br />

/api/[v1/v2/v3]/homes/:homeid/devices/ - CREATE new device<br />
/api/[v1/v2/v3]/homes/:homeid/devices/:id?page=[]&perPage=[]&type=[]&subname=[] - GET devices<br />
/api/[v1/v2/v3]/homes/:homeid/devices/:id - GET device by id<br />
/api/[v1/v2/v3]/homes/:homeid/devices/:id - DELETE device by id<br />
/api/[v1/v2/v3]/homes/:homeid/devices/:id - UPDATE device by id<br />

<p>Technologies: JavaScript, NodeJS, Express, MySQL, Sequelize, MongoDB, Mongoose,
Jest, Supertest, Joi, GIT, Docker, Postman, ESLint.</p>
