import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

export const graphqlApi = createApi({
  reducerPath: 'graphqlApi',
  baseQuery: graphqlRequestBaseQuery({
    url: 'http://localhost:3000/graphql',
    prepareHeaders: (headers, { getState }) => {

      const token = getState().auth?.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        document: `
          query GetCategories {
            categories
          }
        `,
      }),
    }),
    getChallenges: builder.query({
      query: (category) => ({
        document: `
          query GetChallenges($category: String) {
            challenges(category: $category) {
              _id
              title
              category
              difficulty
              status
              solutionRate
            }
          }
        `,
        variables: {
          category,
        },
      }),
    }),
    getChallenge: builder.query({
      query: (id) => ({
        document: `
          query GetChallenge($id: ID!) {
            challenge(id: $id) {
              _id
              title
              category
              description
              difficulty
              manager {
                firstName
                lastName
              }
              code {
                functionName
                starter
                solution
              }
              tests {
                input
                expected
              }
              status
              solutionRate
            }
          }
        `,
        variables: {
          id,
        },
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetChallengesQuery,
  useGetChallengeQuery,
} = graphqlApi;
