//!Elastic Compute Cloud (EC2) 
//*is a web service that provides secure, resizable compute(VMs) capacity in the cloud.
//* It is designed to make web-scale cloud computing easier for developers.

//- The default HTTP and HTTPS ports for the Web server are port 80 and 443, respectively.
//` SSH: also known as Secure Shell or Secure Socket Shell, is a network protocol that gives users,
//`  particularly system administrators, a secure way to access a computer over an unsecured network.

//!Conneting server to local terminal in linux
// "chmod 700 AWS_EC2_Test.pem"  //giving permission
// ssh -i file_name os@ipv4 '
//?Ex: ssh -i AWS_EC2_Test.pem ubuntu@13.60.36.227'


//!PM2: 
//* is an advanced process manager primarily used for production Node.js applications. 
//*Running node.js application in the background as a service.
//* Ensures applications stay alive indefinitely Helps in maintaining application stability and uptime

// npm install pm2 -g  //?installing pm2 globally(-g)
// pm2 start index.js //?starting the app.js file
// pm2 list //?list of all the running processes


//! Certificate management
//- Use https://certbot.eff.org/