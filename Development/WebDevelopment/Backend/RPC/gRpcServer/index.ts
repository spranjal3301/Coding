import path from 'path';
import * as grpc from '@grpc/grpc-js';
import  { GrpcObject, ServiceClientConstructor } from "@grpc/grpc-js"
import * as protoLoader from '@grpc/proto-loader';

//- load proto File
const packageDefinition = protoLoader.loadSync(path.join(__dirname, './test.proto'));

const personProto = grpc.loadPackageDefinition(packageDefinition);

const PERSONS = [
    {
        name: "harkirat",
        age: 45
    },
    {
      name: "raman",
      age: 45
    },
];

//- Service
//@ts-ignore
function addPerson(call, callback) {
  console.log(call)
    let person = {
      name: call.request.name,
      age: call.request.age
    }
    PERSONS.push(person);
    callback(null, person) //- Error first callback
}

//- app = exprees()
const server = new grpc.Server();


//- server.addService( ProtoFile, { server1 , server2 , server3 ...})
server.addService((personProto.AddressBookService as ServiceClientConstructor).service, { addPerson: addPerson });


//- app.listen()
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});



//- Generate types
// ./node_modules/@grpc/proto-loader/build/bin/proto-loader-gen-types.js  --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=generated a.proto


// Ref https://github.com/grpc/proposal/blob/master/L70-node-proto-loader-type-generator.md
// Ref https://www.npmjs.com/package/@grpc/proto-loader

