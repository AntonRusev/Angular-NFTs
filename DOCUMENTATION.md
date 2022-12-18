1. The idea behind the NFTs app-

NFTs is designed to be used as an gallery for pictures(not real NFTS!) of cats and dogs. It's non-profit, meaning users can add their own or browse other users pictures, but can't buy, sell or trade them. 

2. Starting the app-

In order to get the app going, it must be started localy(it's designed to run on port 4200, thus the base URL for accessing it is "http://localhost:4200/");

3. Back-end of the application- 

In order for the NFTs application to run as intended, a REST-API is required. It can be downloaded from the Github of the creator(Anton Rusev) at "https://github.com/AntonRusev/rest-api-nfts". It runs on port 3030(http://localhost:3030/).

The app uses http://localhost:3030/auth/ for working with Login, Register, Logout and Profile data and http://localhost:3030/nfts/ for acessing the catalog and the related CRUD operations.  

4. Components of the application-

The application has a basic Home page with some hard-coded images in it. Depending, if the user is logged in or guest, different options are available. If the user is logged in, he is given the option to add his own NFTs, if the user is guest, there are links to the Login and Register components. The Home page also dynamically shows the number of the NFTs in the Catalog. 

4.1 User authentication-

The Login and Register pages are straightforward. Both are equipped with data validation. In order to Register, the User has to provide Username, Email and Password(+ he has to repeat the Password in order to make sure that he is not misspelling it). In order to Login, the User has to provide an Username and Password. The requests are sent to "http://localhost:3030/users/register"(POST) and "http://localhost:3030/users/login"(POST) respectively. 

IMPORTANT- After Login or Registration, the User data and the Access Token are set in the Local Storage!

The Logout clears the Local Storage and logs out the User. The requests are sent to "http://localhost:3030/users/logout"(GET)

The Profile page simply shows the User's chosen Username and Email. 

IMPORTANT- Login and Register have Guards preventing already logged in users from acessing them. Guest users are prevented from acessing Logout and Profile.

4.2 NFTs Catalog-

The Catalog(and Details page of a single NFTs) is accessible by both Guests and logged in Users. It shows the collection of NFTs'. Each individual NFTs has it's name, image and price shown, but in order to read the description, the User has to access the Details page of the given NFTs. The requests for accessing the data for the entire catalog are sent to "http://localhost:3030/data/catalog"(GET), for details of a single NFTs "http://localhost:3030/data/catalog/:id"(GET).

If the User is not logged in, he sees message with a Login link, urging him to login, above the catalog. If he is already logged in, an Add NFTs button is shown. 

In order to add his own NFTs, the logged in User has to enter a Name, Image URL link, Price(Numbers only) and Description. All of these have data validation. The reqests are sent to "http://localhost:3030/data/catalog"(POST).

If the User is an owner of a given NFTs, he can Edit it or Delete it, from the Details page of that NFTs. The requests are sent to "http://localhost:3030/data/catalog/:id" as PUT and DELETE respectively. 

4.3 404 Not Found and Error pages-

Trying to access a non-existing page will send the user to the 404 Not Found page. Reveiving an Error will send him to the Error page. 



