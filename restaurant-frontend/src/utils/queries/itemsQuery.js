import { gql } from "@apollo/client";
const ITEMS_QUERY = gql`
  query Items_Query{
    items{
      data{
        id
        attributes{
          name
          price
          description
          image{
            data{
              id
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }    
`;
export default ITEMS_QUERY