import { Client, Databases,Storage, ID,Query } from "appwrite";
import config from "../config/config";


class DatabaseService {
    client=new Client();
    databases;
    storage;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl) // Your API Endpoint
        .setProject(config.appwriteProjectId); // Your project ID

        this.databases = new Databases(this.client);
        this.storage = new Storage(client);
    }

    async createPost({title,slug,content,featureImage,status,userId}){
        try {
            // Document ID -->slug
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {title,content,featureImage,status,userId}
            );
        } catch (error) {
            console.log("🚀 ~ DatabaseService ~ createPost ~ error:", error)
        }
    }

    async updatePost(slug,{title,content,featureImage,status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                }
            )
        } catch (error) {
            console.log("🚀 ~ DatabaseService ~ updatePost ~ error:", error)
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("🚀 ~ DatabaseService ~ deletePost ~ error:", error);
            return false;
        }
    }

    async listPost(queries=[Query.equal('status','active')]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("🚀 ~ DatabaseService ~ listPost ~ error:", error)
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("🚀 ~ DatabaseService ~ getPost ~ error:", error)
            return false;
        }
    }


    //`file storage service

    async uplodeFile(file){ // file --> BLOB
        try {
           return await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
           ) 
        } catch (error) {
            console.log("🚀 ~ DatabaseService ~ uplodeFile ~ error:", error)
            return false;
        }
    }

    async deleteFile(fileId){ // fileId --> return uplodeFile
        try {
           return await this.storage.deleteFile(
                config.appwriteBucketId,
                fileId
           ) 
        } catch (error) {
            console.log("🚀 ~ DatabaseService ~ deleteFile ~ error:", error)
            return false;
        }
    }

    getFilePreview(fileId){
        return this.storage.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }


}

const dbService=new DatabaseService();
export default dbService;  // export the instance of DatabaseService class