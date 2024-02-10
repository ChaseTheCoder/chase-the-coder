import { GraphQLClient, gql } from 'graphql-request';
import { graphql_api } from '../constants/index';

const graphQLClient = new GraphQLClient(graphql_api);

export interface HomePageObjectInterface {
  homePage: HomePageInterface
}

export interface ImageObject {
  url: string
  altText: string
}

export interface HomePageInterface {
  sectionAboutMe: string
  sectionAboutMeDescription: string
  sectionProjects: string
  sectionTech: string
  title1: string
  title2: string
  subtitle: string
  heroImage: ImageObject
  sectionAboutMeImage: ImageObject
};

export const homePage = async () => {
  const query = gql`
    query HomePages {
      homePage(where: {id: "clrsi209o2p630bk60y5oiwpi"}, locales: en) {
        sectionAboutMe
        sectionAboutMeDescription
        sectionProjects
        sectionTech
        title1
        title2
        subtitle
        heroImage {
          url
          altText
        }
        sectionAboutMeImage {
          url
          altText
        }
      }
    } 
  `;
  const response: HomePageObjectInterface = await graphQLClient.request(query);

  return response.homePage;
}

export interface BlogPostsObjectInterface {
  blog_Posts: BlogPostsInterface[]
}

export interface BlogCategories {
  category: string
  id: string
}

export interface BlogPostsInterface {
  id: string
  description: string
  linkGitHub?: string
  linkLiveSite?: string
  linkYouTube?: string
  techStack: string
  title: string
  projectImage: ImageObject
  blogCategories: BlogCategories
}

export const projects = async () => {
  const query = gql`
    query Projects {
      blog_Posts(where: {blogCategories_every: {category: "Projects"}}) {
        id
        description
        linkGitHub
        linkLiveSite
        linkYouTube
        techStack
        title
        projectImage {
          url
          altText
        }
        blogCategories {
          category
          id
        }
      }
    }
  `;
  const response: BlogPostsObjectInterface = await graphQLClient.request(query);

  return response.blog_Posts;
}

export interface BlogPageObjectInterface {
  blogPage: BlogPageInterface
}

export interface BlogPageInterface {
  title: string
  heroImage: ImageObject
}

export const blogPage = async () => {
  const query = gql`
    query BlogPage {
      blogPage(where: {id: "clsb8nq8jlb5w0alex7qwurzo"}) {
        title
        heroImage {
          altText
          url
        }
      }
    }
  `;
  const response: BlogPageObjectInterface = await graphQLClient.request(query);

  return response.blogPage;
}

export interface BlogPostsObjectInterface {
  blog_Posts: BlogPostsInterface[]
}

export const blogPosts = async () => {
  const query = gql`
    query BlogPosts {
      blog_Posts {
        id
        title
        description
        techStack
        projectImage {
          altText
          url
        }
        blogCategories {
          category
          id
        }
      }
    }
  `;
  const response: BlogPostsObjectInterface = await graphQLClient.request(query);

  return response.blog_Posts;
}

export interface BlogPostObjectInterface {
  blog_Post: BlogPostsInterface
}

export const blogPost = async (id: string) => {
  const query = gql`
    query BlogPost($id: ID!) {
      blog_Post(where: {id: $id}) {
        linkGitHub
        linkLiveSite
        linkYouTube
        id
        techStack
        title
        description
        blogCategories {
          category
          id
        }
        projectImage {
          altText
          url
        }
      }
    }
  `;
  const response: BlogPostObjectInterface = await graphQLClient.request(query, { id });

  return response.blog_Post;
}