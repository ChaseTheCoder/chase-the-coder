import { GraphQLClient, gql } from 'graphql-request';
import { graphql_api } from '../constants/index';

const graphQLClient = new GraphQLClient(graphql_api);

export interface HomePageObjectInterface {
  homePage: HomePageInterface
}

export interface URL {
  url: string
}

export interface HomePageInterface {
  sectionAboutMe: string
  sectionAboutMeDescription: string
  sectionProjects: string
  sectionTech: string
  title1: string
  title2: string
  heroImage: URL
  sectionAboutMeImage:URL
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
        heroImage {
          url
        }
        sectionAboutMeImage {
          url
        }
      }
    } 
  `;
  const response: HomePageObjectInterface = await graphQLClient.request(query);

  return response.homePage;
}