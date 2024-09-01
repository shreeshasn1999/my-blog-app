/* eslint-disable no-useless-catch */
import config from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class DatabaseService {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      const newPost = await this.databases.createDocument(
        config.appwriteDatabaseId, // databaseId
        config.appwriteCollectionId, // collectionId
        slug, // documentId
        { title, content, featuredImage, status, userId } // data
      );
      return newPost;
    } catch (error) {
      throw error;
    }
  }

  async updatePost({ title, slug, content, featuredImage, status }) {
    try {
      const updatedPost = await this.databases.updateDocument(
        config.appwriteDatabaseId, // databaseId
        config.appwriteCollectionId, // collectionId
        slug, // documentId
        { title, content, featuredImage, status } // data
      );
      return updatedPost;
    } catch (error) {
      throw error;
    }
  }

  async deletePost({ slug }) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId, // databaseId
        config.appwriteCollectionId, // collectionId
        slug // documentId
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getPost({ slug }) {
    try {
      const reqPost = await this.databases.getDocument(
        config.appwriteDatabaseId, // databaseId
        config.appwriteCollectionId, // collectionId
        slug // documentId
      );
      return reqPost;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllPosts(queries = [Query.equal("status", "active")]) {
    try {
      const allPosts = await this.databases.listDocuments(
        config.appwriteDatabaseId, // databaseId
        config.appwriteCollectionId, // collectionId
        queries
      );
      return allPosts;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // file related services

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(config.appwriteBucketId, fileId);
  }
}

const dbService = new DatabaseService();

export default dbService;
