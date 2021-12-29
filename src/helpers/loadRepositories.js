
export const loadRepositories = async () => {
    const url = 'https://api.github.com/graphql';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({
            query: `{
            viewer {
               avatarUrl
               bio
               name
               login
               url
               location
               updatedAt
              repositories(first: 10) {
                  
                nodes {
                    databaseId
                    isPrivate
                    url
                  name
                  
                }
              }
            }
         
         }`
        })
    });

    const repositories = await response.json();
    return repositories;
}
