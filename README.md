# Smart house management | SoftServe ITA

Server for representing smart house. It allows to manage houses and devices
inside. You can add, get, remove and change houses and devices. Api incudes the
versioning system. v1 uses .json for store, v2 - MySQL, v3 - MongoDB

**API**

<p>/api/[v1/v2/v3]/homes/ - CREATE new home</p>
<p>/api/[v1/v2/v3]/homes/ - GET all homes</p>
<p>/api/[v1/v2/v3]/homes/:homeid - GET home by id</p>
<p>/api/[v1/v2/v3]/homes/:homeid - DELETE home by id</p>
<p>/api/[v1/v2/v3]/homes/:homeid - UPDATE home by id</p>

<p>/api/[v1/v2/v3]/homes/:homeid/devices/ - CREATE new device</p>
<p>/api/[v1/v2/v3]/homes/:homeid/devices/:id?page=[]&perPage=[]&type=[]&subname=[] - GET devices</p>
<p>/api/[v1/v2/v3]/homes/:homeid/devices/:id - GET device by id</p>
<p>/api/[v1/v2/v3]/homes/:homeid/devices/:id - DELETE device by id</p>
<p>/api/[v1/v2/v3]/homes/:homeid/devices/:id - UPDATE device by id</p>

<p>Technologies: JavaScript, NodeJS, Express, MySQL, Sequelize, MongoDB, Mongoose,
Jest, Supertest, Joi, GIT, Docker, Postman, ESLint.</p>